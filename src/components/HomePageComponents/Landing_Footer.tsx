import React, { useState, useRef, useEffect } from 'react';
import MyToolTip from '../../components/MyTooltip/MyToolTip';
import { Accordion, AccordionSummary, Divider } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import images from '../../assets/images';
export default function Landing_Footer() {
    const [expanded, setExpanded] = useState(false);

    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const footerInfoRef = useRef<HTMLDivElement>(null);
    const siteListRef = useRef<HTMLUListElement>(null);


    const updateSiteListWidht = ()=> {
        if (footerInfoRef.current && siteListRef.current) {
            siteListRef.current.style.width = `${footerInfoRef.current.offsetWidth}px`;
        }
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(updateSiteListWidht);

        // Observe the footerInfo element
        if (footerInfoRef.current) {
            resizeObserver.observe(footerInfoRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (footerInfoRef.current) {
                resizeObserver.unobserve(footerInfoRef.current);
            }
            resizeObserver.disconnect();
        };
    }, [expanded, siteListRef.current ]);

    return (
        <section>
            <section className="footer_warning">
                <section className="footer_warning_container">
                    <div className="footer-warning_title">
                        <MyToolTip color="black" />
                        <p>필수안내사항</p>
                    </div>
                    <div className="footer_warning_descr">
                        <p>
                            ※ 보험 대리점 : (주)어슈어티 (등록번호 :
                            제2020080048호) <br />
                            ※보험계약 체결 전 상품설명서 및 약관을 확인하시기
                            바랍니다.
                            <br />
                            ※(주)어슈어티는 해당 상품에 대해 충분히 설명할
                            의무가 있으며, 가입자는 가입에 앞서 이에 대한 충분한
                            설명을 받으시기 바랍니다. <br />
                            ※ (주)어슈어티는 다수의 보험사와 계약 체결 및
                            대리/중개하는 보험대리점 입니다. <br />
                            ※ 본 광고는 광고심의기준을 준수하였으며, 유효기간은
                            심의일로부터 1년입니다.
                            <br />
                        </p>

                        <span>
                            어슈어티 준법 심의필 제98호 (2023.01.02~2024.01.01)
                        </span>
                    </div>
                </section>
            </section>

            <section id="footer">
                <div className="footer_container">

                    <div className="footer-logo">
                        <img src={images.mainLogo} alt="" />
                        <img src={images.ScrollUp} alt="" onClick={onTop} />
                    </div>

                    <div  ref={footerInfoRef} className="footer-info">
                        <p>
                            주식회사 어슈어티 <br />
                            대표 : 김영환 <br />
                            사업자 등록번호 : 536-87-01775 <br />
                            대리점 등록번호 : 제 2020080048호 <br />
                            주소 : 서울특별시 마포구 마포대로 34, 6층 <br />
                            고객센터 : 1588-5683 <br />
                            팩스 : 02-6008-0801 <br />
                            이메일 : info@assuretee.co.kr <br />
                        </p>
                    </div>

                    {expanded && (
                     
                            <ul className="siteList"  ref={siteListRef}>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="">
                                        <span>어슈어티</span>
                                    </a>
                                </li>
                                <Divider
                                    variant="fullWidth"
                                    sx={{
                                        height: '1px',
                                        backgroundColor: '#3a3a3a',
                                    }}
                                />
                                <li
                                    style={{
                                        marginTop: '20px',
                                    }}
                                >
                                    <a href="">
                                        <span>번역하다</span>
                                    </a>
                                </li>
                            </ul>
                    
                    )}

                    <Accordion
                        disableGutters
                        elevation={0}
                        className="footer-accordion"
                        sx={{
                            marginTop: '30px',
                            position: 'relative',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<CloseIcon />}
                            onClick={() => {
                                setExpanded(!expanded);
                            }}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p
                                style={{
                                    color: 'white',
                                    fontWeight: '500',
                                    lineHeight: '25px',
                                    fontSize: '14px',
                                }}
                            >
                                관련사이트
                            </p>
                        </AccordionSummary>
                    </Accordion>

                    <p className="footer-end">
                        © assuretee Inc. All Rights Reserved.
                    </p>
                </div>

                <Divider
                    variant="fullWidth"
                    sx={{
                        height: '2px',
                        backgroundColor: '#3a3a3a',
                    }}
                />
            </section>
        </section>
    );
}
