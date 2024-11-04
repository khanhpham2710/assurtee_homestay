import GreyLabelInfoBox, { InfoProps } from '../InfoBox/GreyLabelInfoBox';

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
            <div
                className="dflex_spacebetween"
                style={{
                    height: 50,
                }}
            >
                <label className="grey_label">이름</label>
                <label className="grey_label" style={{ textAlign: 'center' }}>
                    생년월일
                </label>
                <label className="grey_label" style={{ textAlign: 'right' }}>
                    보험료
                </label>
            </div>
            <div
                className="dflex_spacebetween"
                style={{
                    height: 50,
                }}
            >
                <p className="medium_info" style={{ textAlign: 'left' }}>
                    김정석
                </p>
                <p className="medium_info" style={{ textAlign: 'center' }}>
                    1974.10.11
                </p>
                <p className="medium_info">19,300원</p>
            </div>
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
