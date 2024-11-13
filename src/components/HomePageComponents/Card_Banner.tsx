import React from 'react';

interface Props {
    title: string;
    description: string;
    icon: string;
    subdesc?: string;
    color: string;
}

export default function Card_Banner({
    title,
    description,
    subdesc,
    color,
    icon,
}: Props) {
    return (
        // <div className="card_banner" style={{backgroundColor: `${color}`}}>
        //     <div className="card_item_left">
        //         <p className="title_card_banner">{title}</p>
        //         <p className="title_card_desc">{description}</p>
        //
        //         {subdesc && <p className="title_card_subdesc">{subdesc}</p>}
        //     </div>
        //     <div className="card_item_right">
        //         <img src={icon} alt=""/>
        //     </div>
        // </div>

    <li className="program-01">
        <strong className="program-title">Special</strong>
        <p className="program-description">
            (사)외국인관광도시민박업협회 회원사만 가입가능
        </p>
    </li>
)
    ;
}
