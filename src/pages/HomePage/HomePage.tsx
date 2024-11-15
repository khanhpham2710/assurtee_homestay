import React, { useRef } from 'react';
import Banner_Video from '../../components/HomePageComponents/Banner_Video';
import Banner_Card from '../../components/HomePageComponents/Banner_Card';
import Landing_Fee from '../../components/HomePageComponents/Landing_Fee';
import Landing_Footer from '../../components/HomePageComponents/Landing_Footer';
import Banner_Header from '../../components/HomePageComponents/Banner_Header';
import Carousel_Bottom from '../../components/HomePageComponents/Carousel_Bottom';
import { useNavigate } from 'react-router-dom';
import HeaderMain from '../../components/Headers/HeaderMain';

export default function HomePage() {
    const video_ref = useRef<HTMLDivElement>(null);
    const naviagate = useNavigate();

    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleClick = () => {
        naviagate('/personal-infor');
    };

    return (
        <section className="wrap-main">
            <div className="wrap-inner">
                <header>
                    <HeaderMain />
                    <Banner_Header video_ref={video_ref} />
                </header>
                <div className="container container-main" id="container">
                    <section className="main" id="main">
                        <div className="main-inner">
                            <div className="main-contents">
                                <section
                                    ref={video_ref}
                                    style={{
                                        margin: '0 auto',
                                        width: '100%',
                                    }}
                                >
                                    <Banner_Video />
                                </section>

                                <Banner_Card />

                                <Landing_Fee />
                                <Carousel_Bottom />
                            </div>
                            <section className="section-notice">
                                <div className="section-inner">
                                    <p className="notice-title">필수안내사항</p>
                                    <ul className="notice-text">
                                        <li>
                                            ※ 보험 대리점 : (주)어슈어티
                                            (등록번호 : 제2020080048호)
                                        </li>
                                        <li>
                                            ※ 보험계약 체결 전 상품설명서 및
                                            약관을 확인하시기 바랍니다.
                                        </li>
                                        <li>
                                            ※ (주)어슈어티는 해당 상품에 대해
                                            충분히 설명할 의무가 있으며,
                                            가입자는 가입에 앞서 이에 대한
                                            충분한 설명을 받으시기 바랍니다.
                                        </li>
                                        <li>
                                            ※ (주)어슈어티는 다수의 보험사와
                                            계약 체결 및 대리/중개하는
                                            보험대리점 입니다.
                                        </li>
                                        <li>
                                            ※ 본 광고는 광고심의기준을
                                            준수하였으며, 유효기간은
                                            심의일로부터 1년입니다.
                                        </li>
                                    </ul>
                                    <p className="notice-description">
                                        어슈어티 준법 심의필 제98호
                                        (2023.01.02~2024.01.01)
                                    </p>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <Landing_Footer onTop={onTop} />
                <div className="btn-wrap btn-floating">
                    <a
                        href="#"
                        className="btn"
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                        }}
                    >
                        보험료 계산하기
                    </a>
                </div>
            </div>
        </section>
    );
}
