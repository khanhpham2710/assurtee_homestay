import React from 'react';

export default function Banner_Card() {
    const cardBanner = [
        {
            title: 'Special',
            description: '(사)외국인관광도시민박업협회 회원사만 가입가능',
            color: '#ffd4cf',
        },
        {
            title: 'Easy to sign up',
            description:
                '별도로 가입하기 힘든 담보와 가장 저렴한 보험료를 제공',
            color: '#fde8bd',
        },
        {
            title: 'Consulting',
            description:
                '10초면 끝! 사업자등록증 촬영 및 입력 정보 만으로 가입 가능!',
            color: '#cee9ff',
        },
        {
            title: 'Consulting',
            description: '회원사를 위해 전용 콜/온라인 상담 서비스 제공',
            color: '#d3ddff',
            subdesc: '(가입/보상문의, 보험금 청구대행 등)',
        },
    ];

    return (
        <div className="main-section program">
            <div className="main-section-inner">
                <h2 className="main-section-title">
                    전용보험
                    <br />
                    프로그램 특징
                </h2>
                <p className="main-section-description">
                    운영자와 손님 모두를 위한
                    <br />
                    외국인관광 도시민박업주 전용 보험 <br className="pc-hide" />
                    프로그램 특징
                </p>

                <div
                    className="card_component"
                    style={{
                        width: '100%',
                    }}
                >
                    <ul className="program-list">
                        {cardBanner &&
                            cardBanner.map((card, index) => (
                                <li
                                    className={`program-0${index + 1}`}
                                    key={index}
                                >
                                    <strong className="program-title">
                                        {card.title}
                                    </strong>
                                    <p className="program-description">
                                        {card.description}
                                    </p>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
