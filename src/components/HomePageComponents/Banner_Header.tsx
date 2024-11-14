import React, { CSSProperties } from 'react';
import Slider from 'react-slick';
import images from '../../assets/images';

type BannerHeaderProps = {
    video_ref: React.RefObject<HTMLDivElement>;
};

export default function Banner_Header({ video_ref }: BannerHeaderProps) {
    const handleScrollDown = () => {
        if (video_ref.current) {
            window.scrollTo({
                top: video_ref.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    const carouselImages: CSSProperties[] = [
        {
            backgroundImage: `url(${images.BackGroundBanner1})`,
            backgroundPosition: '30% 0%',
        },
        {
            backgroundImage: `url(${images.BackGroundBanner2})`,
            backgroundPosition: '30% 0',
        },
        {
            backgroundImage: `url(${images.BackGroundBanner3})`,
            backgroundPosition: '55% 0',
        },
    ];

    return (
        <section className="main-section main-section-slide">
            <Slider {...settings}>
                {carouselImages.map((image, index) => (
                    <div key={index}>
                        <div className="banner_image" style={image}>
                            <div className="overlayer"></div>
                            <h1 className="main-section-title">
                                <span className="main-section-title--small">
                                    (외도민업)
                                </span>
                                외국인관광도시민박
                                <br />
                                전용보험
                            </h1>
                            <button
                                type="button"
                                className="btn-scroll-down"
                                onClick={handleScrollDown}
                            >
                                <span className="hidden">아래로</span>
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
