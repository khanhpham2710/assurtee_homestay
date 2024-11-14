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
                <HeaderMain />
                <Banner_Header video_ref={video_ref} />
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
                    <div
                        className="main-section-bottom"
                        style={{
                            maxWidth: '588px',
                            overflow: 'hidden',
                            margin: '0 auto',
                        }}
                    >
                        <Carousel_Bottom />
                    </div>
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
