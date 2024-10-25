import React from 'react';
import HeaderMain from '../../components/Headers/HeaderMain';
import Slider from 'react-slick';
import images from '../../assets/images';
import Video_component from '../../components/video_component/Video_component';
import { useNavigate, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Card_Banner from '../../components/Card_Banner/Card_Banner';
import FeeLandingPage from '../../components/FeeAccordion/FeeLandingPage';

export default function HomePage() {
    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 100,
        centerMode: false,
        infinite: true,
        speed: 1000,
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

    const cardBanner = [
        {
            title: 'Special',
            description: '(사)외국인관광도시민박업협회 회원사만 가입가능',
            color: '#ffd4cf',
            icon: images.item_1,
        },
        {
            title: 'Easy to sign up',
            description:
                '별도로 가입하기 힘든 담보와 가장 저렴한 보험료를 제공',
            color: '#fde8bd',
            icon: images.item_2,
        },
        {
            title: 'Consulting',
            description:
                '10초면 끝! 사업자등록증 촬영 및 입력 정보 만으로 가입 가능!',
            color: '#cee9ff',
            icon: images.item_3,
        },
        {
            title: 'Consulting',
            description: '회원사를 위해 전용 콜/온라인 상담 서비스 제공',
            color: '#d3ddff',
            icon: images.item_4,
            subdesc: '(가입/보상문의, 보험금 청구대행 등)',
        },
    ];

    console.log('carouselImages: ', carouselImages);

    return (
        <section className="fullWidth_item fullHeightView_item">
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

            <div
                className="title_video"
                style={{ marginTop: '90px', marginBottom: '40px' }}
            >
                <p className="title_main_component">
                    외도민업 <br /> 전용보험
                </p>
                <p className="title_main_des">
                    외도민업을 운영하는 사업주들의 <br />
                    사고로 인해 입을 수 있는 피해와 보상을 <br />
                    전용보험으로 커버 받을 수 있습니다.
                </p>
            </div>

            <Box
                className="video_description"
                sx={{
                    marginTop: '30px',
                    flexGrow: 1,
                    // padding: '0 10px ',
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

            <div
                className="title_card"
                style={{ marginTop: '90px', marginBottom: '40px' }}
            >
                <p className="title_main_component">
                    외도민업 <br /> 프로그램 특징
                </p>
                <p>
                    운영자와 손님 모두를 위한
                    <br />
                    외국인관광 도시민박업주 전용 보험 <br />
                    프로그램 특징
                </p>
            </div>

            <Box
                className="card_component"
                sx={{
                    marginTop: '30px',
                    flexGrow: 1,
                    marginBottom: '90px',
                }}
            >
                <Grid
                    container
                    spacing={1}
                    columnSpacing={1}
                    rowSpacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    {cardBanner &&
                        cardBanner.map((card, index) => (
                            <Grid
                                size={{ xl: 3, lg: 3, md: 6, sm: 12 }}
                                className="dflex_center"
                            >
                                <Card_Banner
                                    title={card.title}
                                    description={card.description}
                                    subdesc={card.subdesc}
                                    color={card.color}
                                    icon={card.icon}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Box>

            <div
                className="title_card"
                style={{ marginTop: '90px', marginBottom: '40px' }}
            >
                <p className="title_main_component">
                    전용보험 <br /> 보험료 산출 예시
                </p>
                <p>최적의 보험료를 분석 추천합니다.</p>
            </div>

            <FeeLandingPage />

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
