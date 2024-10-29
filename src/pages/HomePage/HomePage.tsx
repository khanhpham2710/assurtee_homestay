import HeaderMain from '../../components/Headers/HeaderMain';
import Slider from 'react-slick';
import images from '../../assets/images';
import Video_component from '../../components/video_component/Video_component';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Card_Banner from '../../components/Card_Banner/Card_Banner';
import FeeLandingPage from '../../components/FeeAccordion/FeeLandingPage';
import MyToolTip from '../../components/MyTooltip/MyToolTip';
import { useRef } from 'react';

export default function HomePage() {
    const video_ref = useRef<HTMLDivElement>(null);

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

    const settings_bottom = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
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

    const onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const carouselImageBottom = [
        images.bottom_carousel_1,
        images.bottom_carousel_2,
        images.bottom_carousel_3,
    ];

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
                                            onClick={() => {
                                                if (video_ref.current) {
                                                    window.scrollTo({
                                                        top: video_ref.current
                                                            .offsetTop,
                                                        behavior: 'smooth',
                                                    });
                                                }
                                            }}
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

            {/* banner video */}
            <section
                className="dflex_center fullWidth_item flexColumn_item "
                style={{
                    padding: '0 24px',
                }}
            >
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
                        width: '100%',
                    }}
                >
                    <Grid
                        container
                        spacing={1}
                        columnSpacing={1}
                        justifyContent="left"
                        alignItems="center"
                        ref={video_ref}
                    >
                        {videos_embbeded &&
                            videos_embbeded.map((video, index) => (
                                <Grid
                                    size={{ xl: 3, lg: 3, md: 6, sm: 12 }}
                                    // className="dflex_center"
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
            </section>

            {/* banner card */}
            <section
                className="dflex_center fullWidth_item flexColumn_item "
                style={{
                    padding: '0 24px',
                }}
            >
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
                        columnSpacing={3}
                        rowSpacing={2}
                        justifyContent="left"
                        alignItems="center"
                    >
                        {cardBanner &&
                            cardBanner.map((card, index) => (
                                <Grid
                                    key={index}
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
            </section>

            <section
                className="dflex_center fullWidth_item flexColumn_item "
                style={{
                    padding: '0 24px',
                }}
            >
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
            </section>
            <section className="bottom_carousel">
                <Slider {...settings_bottom}>
                    {carouselImageBottom.map((image, index) => (
                        <div key={index} className="banner_slider">
                            <div className="banner_slider">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className="footer_warning">
                <div className="footer-warning_title">
                    <MyToolTip text={[]} align="left" color="black" />
                    <p>필수안내사항</p>
                </div>

                <div className="footer_warning_descr">
                    <p>
                        ※ 보험 대리점 : (주)어슈어티 (등록번호 : 제2020080048호){' '}
                        <br />
                        ※보험계약 체결 전 상품설명서 및 약관을 확인하시기
                        바랍니다.
                        <br />
                        ※(주)어슈어티는 해당 상품에 대해 충분히 설명할 의무가
                        있으며, 가입자는 가입에 앞서 이에 대한 충분한 설명을
                        받으시기 바랍니다. <br />
                        ※ (주)어슈어티는 다수의 보험사와 계약 체결 및
                        대리/중개하는 보험대리점 입니다. <br />
                        ※ 본 광고는 광고심의기준을 준수하였으며, 유효기간은
                        심의일로부터 1년입니다.
                        <br />
                    </p>
                    <span>
                        어슈어티 준법 심의필 제98호 (2023.01.02~2024.01.01)
                    </span>
                </div>
            </section>
            <section className="footer">
                <div className="footer-logo">
                    <img src={images.mainLogo} alt="" />

                    <button onClick={onTop}>
                        <img src={images.onTopIcon} alt="" />
                    </button>
                </div>
                <Divider
                    variant="fullWidth"
                    sx={{
                        height: '2px',
                        backgroundColor: '#3a3a3a',
                        width: '100%',
                    }}
                />
                <div className="footer-info">
                    <p>
                        주식회사 어슈어티 <br />
                        대표 : 김영환 <br />
                        사업자 등록번호 : 536-87-01775 <br />
                        대리점 등록번호 : 제 2020080048호 <br />
                        주소 : 서울특별시 마포구 마포대로 34, 6층 <br />
                        고객센터 : 1588-5683 <br />
                        팩스 : 02-6008-0801 <br />
                        이메일 : info@assuretee.co.kr <br />
                    </p>

                    <div style={{ marginTop: '30px' }}>
                        <Accordion
                            disableGutters
                            elevation={0}
                            className="footer-accordion"
                        >
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <p
                                    style={{
                                        color: 'white',
                                        fontWeight: '500',
                                        lineHeight: '25px',
                                        fontSize: '14px',
                                    }}
                                >
                                    관련사이트
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className="footer-end">
                        © assuretee Inc. All Rights Reserved.
                    </div>
                </div>
            </section>
            <section className="button_container">
                <Link to="/personal-infor">
                    <button className="button_main">
                        <p className="titleMini">보험료 계산하기</p>
                    </button>
                </Link>
            </section>
        </section>
    );
}
