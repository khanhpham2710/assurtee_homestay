import React, { useRef } from 'react';
interface Props {
    onTop: () => void;
}
export default function Landing_Footer({ onTop }: Props) {
    const footerInfoRef = useRef<HTMLDivElement>(null);
    const onClickToggle = () => {
        footerInfoRef.current?.classList.toggle('is_open');
    };

    return (
        <>
            {/* <section className="section-notice">
                <div className="section-inner">
                    <p className="notice-title">필수안내사항</p>
                    <ul className="notice-text">
                        <li>
                            ※ 보험 대리점 : (주)어슈어티 (등록번호 :
                            제2020080048호)
                        </li>
                        <li>
                            ※ 보험계약 체결 전 상품설명서 및 약관을 확인하시기
                            바랍니다.
                        </li>
                        <li>
                            ※ (주)어슈어티는 해당 상품에 대해 충분히 설명할
                            의무가 있으며, 가입자는 가입에 앞서 이에 대한 충분한
                            설명을 받으시기 바랍니다.
                        </li>
                        <li>
                            ※ (주)어슈어티는 다수의 보험사와 계약 체결 및
                            대리/중개하는 보험대리점 입니다.
                        </li>
                        <li>
                            ※ 본 광고는 광고심의기준을 준수하였으며, 유효기간은
                            심의일로부터 1년입니다.
                        </li>
                    </ul>
                    <p className="notice-description">
                        어슈어티 준법 심의필 제98호 (2023.01.02~2024.01.01)
                    </p>
                </div>
            </section> */}

            <section className="footer">
                <div className="sec_block sec_block--1st">
                    <div className="inner">
                        <a href="#" className="footer_logo">
                            <span className="hidden">assuretee</span>
                        </a>
                        <button
                            type="button"
                            className="btnTop"
                            onClick={onTop}
                        >
                            <span>TOP</span>
                        </button>
                    </div>
                </div>
                <div className="sec_block sec_block--2nd">
                    <div className="inner">
                        <ul className="footer_company">
                            <li className="info">주식회사 어슈어티</li>
                            <li className="info">대표 : 김영환</li>
                            <li className="info">
                                사업자 등록번호 : 536-87-01775
                            </li>
                            <li className="info">
                                대리점 등록번호 : 제 2020080048호
                            </li>
                            <li className="info">
                                <address>
                                    주소 : 서울특별시 마포구 마포대로 34, 6층
                                </address>
                            </li>
                            <li className="info">고객센터 : 1588-5683</li>
                            <li className="info">팩스 : 02-6008-0801</li>
                            <li className="info">
                                이메일 : info@assuretee.co.kr
                            </li>
                        </ul>
                        <div className="site_select" ref={footerInfoRef}>
                            <button
                                type="button"
                                className="btn_site"
                                onClick={onClickToggle}
                            >
                                관련사이트
                            </button>

                            <ul className="site_list">
                                <li>
                                    <a
                                        href="https://www.assuretee.co.kr"
                                        className="btn_go"
                                    >
                                        <span>어슈어티</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="copyrignt">
                            © assuretee Inc. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
