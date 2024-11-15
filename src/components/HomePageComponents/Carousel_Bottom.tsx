import React from 'react';
import Slider from 'react-slick';

export default function Carousel_Bottom() {
    const settings_bottom = {
        dots: true,
        infinite: true,
        speed: 1500,
        // autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
    };

    const carouselImageBottom = [
        {
            mobile: 'images/img_main_bottom_01.jpg',
            desktop: 'images/img_main_bottom_01_desktop.jpg',
        },
        {
            mobile: 'images/img_main_bottom_02.jpg',
            desktop: 'images/img_main_bottom_02_desktop.jpg',
        },
        {
            mobile: 'images/img_main_bottom_03.jpg',
            desktop: 'images/img_main_bottom_03_desktop.jpg',
        },
    ];

    return (
        <div className="main-section main-section-bottom">
            <div className="slide swiper" data-slide="wrap">
                <div className="swiper-wrapper bottom_carousel">
                    <Slider {...settings_bottom}>
                        {carouselImageBottom.map((image, index) => (
                            <div key={index} className="banner_slider">
                                <picture>
                                    <source
                                        media="(max-width: 768px)"
                                        srcSet={image.mobile}
                                    />
                                    <source
                                        media="(min-width: 769px)"
                                        srcSet={image.desktop}
                                    />
                                    <img
                                        src={image.mobile}
                                        alt={`carousel-image-${index}`}
                                    />
                                </picture>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
