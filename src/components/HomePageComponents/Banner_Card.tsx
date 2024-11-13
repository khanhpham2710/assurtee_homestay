import React from 'react';
import Card_Banner from '../../components/HomePageComponents/Card_Banner';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import images from '../../assets/images';
export default function Banner_Card() {
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
                '10초면 끝! 사업자등록증 촬영 및 입력 정보 만으로 가입 가능!',
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

    return (
        <section className="dflex_center fullWidth_item flexColumn_item ">
            <div className="title_card">
                <p className="title_main_component">
                    전용보험 <br /> 프로그램 특징
                </p>
                <p className="title_main_des">
                    운영자와 손님 모두를 위한
                    <br />
                    외국인관광 도시민박업주 전용 보험 
                    프로그램 특징
                </p>
            </div>

            <Box
                className="card_component"
                sx={{
                    flexGrow: 1,
                    // marginBottom: '90px',
                }}
            >
                <ul className="program-list">
                    {cardBanner &&
                        cardBanner.map((card, index) => (
                            <li className={`program-0${index+1}`} key={index}>
                                <strong className="program-title">{card.title}</strong>
                                <p className="program-description">
                                    {card.description}
                                </p>
                            </li>
                        ))}
                </ul>
            </Box>
        </section>
    );
}
