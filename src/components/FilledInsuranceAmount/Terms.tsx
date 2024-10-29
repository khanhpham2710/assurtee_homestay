import React, { useState, useEffect } from 'react';
import images from '../../assets/images';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type TermsProp = {
    checkAll: boolean;
    setCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
};

type TermType = {
    term: string;
    check: boolean;
};

type TermTypeGroup = {
    main: TermType;
    subTerms?: TermType[];
};

function Terms({ checkAll, setCheckAll }: TermsProp) {
    const [terms, setTerms] = useState<TermTypeGroup[]>([
        {
            main: { term: '자격 및 전자서명 동의(필수)', check: true },
            subTerms: [
                { term: '전자서명 동의 안내', check: true },
                { term: '초과 및 중복가입 제한 안내', check: true },
            ],
        },
        {
            main: { term: '개인정보 수집 및 이용 동의(필수)', check: true },
        },
        {
            main: { term: '서비스 및 기타 약관 동의(필수)', check: true },
        },
        {
            main: { term: '마케팅 이용 동의(선택)', check: true },
        },
    ]);

    useEffect(() => {
        const allChecked = terms.every(
            (term) =>
                term.main.check ||
                (term.subTerms && term.subTerms.every((sub) => sub.check))
        );
        setCheckAll(allChecked);
    }, [terms, setCheckAll]);

    const handleCheckAll = (): void => {
        const newCheckAll = !checkAll;
        setCheckAll(newCheckAll);
        setTerms((prevTerms) =>
            prevTerms.map((term) => ({
                ...term,
                main: { ...term.main, check: newCheckAll },
                subTerms: term.subTerms?.map((sub) => ({
                    ...sub,
                    check: newCheckAll,
                })),
            }))
        );
    };

    const toggleMainCheck = (index: number): void => {
        setTerms((prevTerms) => {
            const newCheck = !prevTerms[index].main.check;
            return prevTerms.map((term, i) =>
                i === index
                    ? {
                          ...term,
                          main: { ...term.main, check: newCheck },
                          subTerms: term.subTerms?.map((sub) => ({
                              ...sub,
                              check: newCheck,
                          })),
                      }
                    : term
            );
        });
    };

    const toggleSubCheck = (mainIndex: number, subIndex: number): void => {
        setTerms((prevTerms) => {
            const updatedTerms = prevTerms.map((term, i) =>
                i === mainIndex
                    ? {
                          ...term,
                          subTerms: term.subTerms?.map((sub, j) =>
                              j === subIndex
                                  ? { ...sub, check: !sub.check }
                                  : sub
                          ),
                      }
                    : term
            );

            const mainTerm = updatedTerms[mainIndex];
            const allChecked =
                mainTerm.subTerms?.every((sub) => sub.check) ?? false;

            return updatedTerms.map((term, i) =>
                i === mainIndex
                    ? {
                          ...term,
                          main: { ...term.main, check: allChecked },
                      }
                    : term
            );
        });
    };

    return (
        <div>
            <section
                className="dflex_item"
                style={{ marginBottom: '21px', gap: '10px' }}
            >
                <img
                    src={checkAll ? images.CheckBox : images.UnCheckBox}
                    alt="Checkbox"
                    style={{ cursor: 'pointer' }}
                    onClick={handleCheckAll}
                />
                <p className="title_all_terms">전체 동의</p>
            </section>
            <section>
                {terms.map((term, index) => (
                    <Accordion
                        key={index}
                        disableGutters
                        elevation={0}
                        sx={{
                            backgroundColor: '#f6f7f9',
                            '&:not(:last-child)': { borderBottom: 0 },
                            '&::before': { display: 'none' },
                        }}
                    >
                        <AccordionSummary
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            expandIcon={<ExpandMoreIcon />}
                            sx={{ p: 0 }}
                        >
                            <img
                                src={
                                    term.main.check
                                        ? images.TermCheckBox
                                        : images.TermUnCheckBox
                                }
                                style={{
                                    marginRight: '10px',
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMainCheck(index);
                                }}
                            />
                            <p
                                className="title_terms"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {term.main.term}
                            </p>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pr: '16px' }}>
                            {term.subTerms?.map((sub, id) => (
                                <div
                                    key={id}
                                    className="dflex_spacebetween"
                                    style={{
                                        height: '40px',
                                        paddingLeft: '24px',
                                    }}
                                >
                                    <div className="dflex_item">
                                        <img
                                            src={
                                                sub.check
                                                    ? images.TermCheckBox
                                                    : images.TermUnCheckBox
                                            }
                                            style={{
                                                marginRight: '10px',
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleSubCheck(index, id);
                                            }}
                                        />
                                        <p className="title_terms">
                                            {sub.term}
                                        </p>
                                    </div>
                                    <KeyboardArrowRightIcon />
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </section>
        </div>
    );
}

export default Terms;
