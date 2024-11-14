import React from 'react';
import Slider from 'react-slick';
import images from '../../assets/images';
export default function Carousel_Bottom() {
    const settings_bottom = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
    };

    const carouselImageBottom = [
        images.bottom_carousel_1,
        images.bottom_carousel_2,
        images.bottom_carousel_3,
    ];

    return (
        <div className="main-section main-section-bottom">
            <div className="slide swiper" data-slide="wrap">
                <div className="swiper-wrapper">
                    <Slider {...settings_bottom}>
                        {carouselImageBottom.map((image, index) => (
                            <div key={index} className="banner_slider">
                                <img src={image} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
