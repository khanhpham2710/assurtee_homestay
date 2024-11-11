import React, { useRef } from 'react';
import images from '../../assets/images';
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

    // const onTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // };

    const handleClick = () => {
        naviagate('/personal-infor');
    };

    return (
        <section
            className="fullWidth_item fullHeightView_item"
            style={{ position: 'relative' }}
        >
            <HeaderMain />

            <section>
                <Banner_Header video_ref={video_ref} />
            </section>

            <div
                className="fullWidth_item dflex_center dflex-column"
                style={{
                    maxWidth: '636px',
                    margin: '0 auto',
                    overflow: 'hidden',
                    padding: '0 24px',
                }}
            >
                {/* banner video */}
                <section ref={video_ref}>
                    <Banner_Video />
                </section>

                <Banner_Card />

                {/* Landing Fee */}

                <Landing_Fee />

                {/* Bottom Carousel */}

                <Carousel_Bottom />
            </div>

            {/* footer section */}
            <section>
                <Landing_Footer />
            </section>
            {/* Button Fixed */}

            <section className="button_container">
                <button
                    className="button_main titleH-18"
                    onClick={handleClick}
                    // onClick={onTop}
                >
                    보험료 계산하기
                </button>
            </section>
            {/* <section className="button_container_2"> */}
            <button
                className="button_main_2 titleH-18"
                onClick={handleClick}
                // onClick={onTop}
            >
                보험 비교 견적
                <img src={images.PNextButton} alt="" />
            </button>
        </section>
    );
}
