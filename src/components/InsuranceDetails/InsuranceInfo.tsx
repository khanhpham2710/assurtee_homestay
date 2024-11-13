import { InfoProps } from '../InfoBox/GreyLabelInfoBox';
import fees from '../../utils/models/Fee';

export default function InsuranceInfo() {
    const infos: InfoProps[] = [
        {
            title: '보험금 수령인(사망 시)',
            info: '피보험자의 법정상속인',
        },
        {
            title: '보험금 수령인(사망 외)',
            info: '피보험자 본인(미성년자의 경우 법정대리인)',
        },
    ];
    return (
        <>
            <div className="form-cont pt0 pb0">
                <div className="tbl-st">
                    <div className="row-head">
                        <div className="row">
                            <p className="cell item-title al-left">이름</p>
                            <p className="cell item-title">생년월일</p>
                            <p className="cell item-title al-right">보험료</p>
                        </div>
                    </div>
                    <div className="row-body">
                        <div className="row">
                            <p className="cell item-text al-left">김정석</p>
                            <p className="cell item-text">1974.10.11</p>
                            <p className="cell item-text al-right">
                                {fees.total.toLocaleString() + '원'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {infos?.map((info, index) => {
                return (
                    <div className="form-cont type-wrap" key={index}>
                        <p className="item-title">{info.title}</p>
                        <p className="item-text al-right">{info.info}</p>
                    </div>
                );
            })}
        </>
    );
}
