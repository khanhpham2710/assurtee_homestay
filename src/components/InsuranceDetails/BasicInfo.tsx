import React from 'react';
import GreyLabelInfoBox, { InfoProps } from '../InfoBox/GreyLabelInfoBox';

function BasicInfo() {
    const infos: InfoProps[] = [
        {
            title: '가입일시',
            info: '2024.04.12 / 15시 16분',
        },
        {
            title: '가입번호',
            info: 'C20240412151614526',
        },
        {
            title: '보험시작일',
            info: '2024.04.14 / 00시 00분',
        },
        {
            title: '보험종료일',
            info: '2025.04.14 / 00시 00분',
        },
        {
            title: '납입 보험료',
            info: '19,300원',
        },
        {
            title: '계약자',
            info: 'FALI20240605565',
        },
    ];
    return (
        <>
            {infos?.map((info, index) => {
                return (
                    <GreyLabelInfoBox
                        title={info.title}
                        info={info.info}
                        key={index}
                    />
                );
            })}
        </>
    );
}

export default BasicInfo;
