import GreyLabelInfoBox, { InfoProps } from '../InfoBox/GreyLabelInfoBox';
import { Divider } from '@mui/material';

export default function PaymentInfo() {
    const infos: InfoProps[] = [
        {
            title: '총 상품금액',
            info: '19,300원',
        },
        {
            title: '총 결제금액',
            info: '19,300원',
        },
        {
            title: '결제 수단',
            info: '카드',
        },
    ];

    const handleClick = () => {};

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
            <div
                className="dflex_center"
                style={{
                    height: 50,
                }}
            >
                <p className="grey_label">영수증</p>
                <button className="info-modify-button" onClick={handleClick}>
                    영수증 보기
                </button>
            </div>
            <Divider
                sx={{
                    color: '#fff',
                }}
            />
        </>
    );
}
