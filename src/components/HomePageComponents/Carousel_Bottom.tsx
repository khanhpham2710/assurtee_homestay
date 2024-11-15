import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import useThrottle from '../../utils/hooks/useThrottle';

export default function NewCarousel() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = useThrottle(() => {
        setWindowWidth(window.innerWidth);
    }, 500);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const settings_bottom = {
        dots: true,
        infinite: true,
        speed: 1500,
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
            <div className="bottom_carousel">
                <Slider {...settings_bottom}>
                    {carouselImageBottom.map((image, index) => (
                        <div key={index} className="banner_slider">
                            <picture>
                                <source
                                    media="(max-width: 624px)"
                                    srcSet={image.mobile}
                                />
                                <source
                                    media="(min-width: 769px)"
                                    srcSet={image.desktop}
                                />
                                <img
                                    src={image.desktop}
                                    alt={`carousel-image-${index}`}
                                    style={{
                                        width:
                                            windowWidth < 769
                                                ? 'calc(100vw - 48px)'
                                                : '100%',
                                        height: 'auto',
                                    }}
                                />
                            </picture>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
