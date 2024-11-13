import GreyLabelInfoBox, { InfoProps } from '../InfoBox/GreyLabelInfoBox';
import fees from '../../utils/models/Fee';

export default function PaymentInfo() {
    const infos: InfoProps[] = [
        {
            title: '총 상품금액',
            info: `${fees.total.toLocaleString()}원`,
        },
        {
            title: '총 결제금액',
            info: `${fees.total.toLocaleString()}원`,
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
            <div className="form-cont flex-wrap">
                <p className="item-title">영수증</p>
                <p className="item-text">
                    <button
                        type="button"
                        className="btn btn--small"
                        onClick={handleClick}
                    >
                        영수증 보기
                    </button>
                </p>
            </div>
        </>
    );
}
