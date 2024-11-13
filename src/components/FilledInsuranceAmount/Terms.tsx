import React, { useState, useEffect } from 'react';

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
        <div className="agree-list-wrap">
            <div className="agree-all">
                <label className="chk-box type-bg">
                    <input
                        type="checkbox"
                        className="chk-input"
                        name="chk-group"
                        checked={checkAll}
                        onClick={handleCheckAll}
                    />
                    <span className="label">
                        <em>전체 동의</em>
                    </span>
                </label>
            </div>
            <ul className="agree-list">
                {terms.map((term, index) => (
                    <li
                        data-role="accordion-item"
                        className="is-active"
                        key={index}
                    >
                        <div className="agree-holder">
                            <label className="chk-box">
                                <input
                                    type="checkbox"
                                    className="chk-input"
                                    name="chk-group"
                                    checked={term.main.check}
                                    onClick={() => {
                                        toggleMainCheck(index);
                                    }}
                                />
                                <span className="label">
                                    <em>{term.main.term}</em>
                                </span>
                            </label>
                            <button
                                type="button"
                                className="btn-open"
                                aria-label="열기/닫기"
                                data-role="accordion-title"
                            ></button>
                        </div>
                        {term.subTerms && (
                            <ul
                                className="agree-depth"
                                data-role="accordion-content"
                            >
                                {term.subTerms.map((subTerm, i) => {
                                    return (
                                        <li key={i}>
                                            <div className="agree-holder">
                                                <label className="chk-box">
                                                    <input
                                                        type="checkbox"
                                                        className="chk-input"
                                                        name="chk-group"
                                                        checked={subTerm.check}
                                                        onClick={() => {
                                                            toggleSubCheck(
                                                                index,
                                                                i
                                                            );
                                                        }}
                                                    />
                                                    <span className="label">
                                                        <em>{subTerm.term}</em>
                                                    </span>
                                                </label>
                                                <button
                                                    type="button"
                                                    className="btn-link"
                                                    aria-label="상세보기"
                                                ></button>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Terms;
