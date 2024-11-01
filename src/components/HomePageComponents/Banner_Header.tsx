import React from 'react';
import Slider from 'react-slick';
import images from '../../assets/images';
import HeaderMain from '../../components/Headers/HeaderMain';

type BannerHeaderProps = {
    video_ref: React.RefObject<HTMLDivElement>;
};


export default function Banner_Header ({video_ref} : BannerHeaderProps) {
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
    const carouselImages = [
        images.BackGroundBanner1,
        images.BackGroundBanner2,
        images.BackGroundBanner3,
    ];
    return (
        <section className="banner_header">
            <Slider {...settings}>
                {carouselImages.map((image, index) => (
                    <div key={index}>
                        <div
                            className="banner_image"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        >
                            <div className="overlayer"></div>
                            <HeaderMain />
                            <div className="banner_text">
                                <div>
                                    <p className="title_1">(외도민업)</p>

                                    <p className="title_2">
                                        외국인관광도시민박 <br />
                                        전용보험
                                    </p>
                                </div>

                                <img
                                    src={images.ScrollDown}
                                    onClick={handleScrollDown}
                                    alt=""
                                    style={{
                                        width: '44px',
                                        height: '22px',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
