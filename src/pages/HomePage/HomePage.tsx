import React from 'react';
import HeaderMain from '../../components/Headers/HeaderMain';
import Slider from 'react-slick';
import images from '../../assets/images';
import Video_component from '../../components/video_component/Video_component';
import { useNavigate, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
export default function HomePage() {
    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: false,
        infinite: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    console.log('Images', images.BackGroundBanner1);

    const carouselImages = [
        images.BackGroundBanner1,
        images.BackGroundBanner2,
        images.BackGroundBanner3,
    ];

    const videos_embbeded = [
        {
            title: '부천 호텔화재 사고',
            video_id: '2_EBBUhKrcY',
        },
        {
            title: '보일러 가스 누출 사고',
            video_id: 'sSpx5kBTBEc',
        },
        {
            title: '대전 숙박업소서 불',
            video_id: '3jlxmgFEeZE',
        },
        {
            title: '강릉 펜션 참사',
            video_id: 'E5fToRdMnm4',
        },
    ];

    console.log('carouselImages: ', carouselImages);

    return (
        <section>
            <section className="banner_header">
                <div className="banner">
                    <Slider {...settings}>
                        {carouselImages.map((image, index) => (
                            <div
                                key={index}
                                // className="banner_image"
                            >
                                <div
                                    className="banner_image"
                                    style={{
                                        backgroundImage: `url(${image})`,
                                    }}
                                >
                                    {' '}
                                    <div className="overlayer"></div>
                                    <HeaderMain />
                                    <div className="banner_text">
                                        <p className="title_1">(외도민업)</p>

                                        <p
                                            className="title_2"
                                            style={{
                                                marginTop: '3px',
                                                marginBottom: '48px',
                                            }}
                                        >
                                            외국인관광도시민박 전용보험
                                        </p>

                                        <img
                                            src={images.ArrowDown}
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
                </div>
            </section>

            <Box
                className="video_description"
                sx={{
                    marginTop: '30px',
                    flexGrow: 1,
                    padding: '0 24px ',
                }}
            >
                <Grid
                    container
                    spacing={1}
                    columnSpacing={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    {videos_embbeded &&
                        videos_embbeded.map((video, index) => (
                            <Grid
                                size={{ xl: 3, lg: 3, md: 6, sm: 12 }}
                                className="dflex_center"
                                key={index}
                            >
                                <Video_component
                                    title={video.title}
                                    video_id={video.video_id}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Box>

            <section className="button_container">
                <Link to="/scan-option">
                    <button className="button_main">
                        <p className="titleMini">보험료 계산하기</p>
                    </button>
                </Link>
            </section>
        </section>
    );
}
