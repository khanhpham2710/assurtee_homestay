import { useSelector } from 'react-redux';
import InsuranceDetailsBox, { InfoProps } from './InsuranceDetailsBox';
import { RootState } from '../../utils/redux/store';

function InsuranceDetails() {
    const info = useSelector((state: RootState) => state.info);

    const infos: InfoProps[] = [
        {
            title: '화재/붕괴/침강/사태 손해(주택)',
            info: '5,000만원',
        },
        {
            title: '화재/붕괴/침강/사태 손해(가재도구)',
            info: '5,000만원',
        },
        {
            title: '화사고 폐기물 운반/매립/소각 등 비용(주택)',
            info: '1,000만원',
        },
        {
            title: '주택 복구비용지원(화재/붕괴/침강/ 사택',
            info: '-',
        },
        {
            title: '주택 가재도구 복구비용지원(화재/붕괴/침강/사태)',
            info: '-',
        },
        {
            title: '특수건물 풍수재손해',
            info: '5,000만원',
        },
        {
            title: '특수건물 신체손해 배상책임',
            info: '1억5,000만원',
        },
        {
            title: '특수건물 화재대물 배상책임',
            info: '10억원',
        },
        {
            title: '가족 화재벌금',
            info: '2,000만원',
        },
        {
            title: '급배수시설 누출 손해',
            info: '300만원',
            tooltip: [
                '[급배수시설누출손해(자기부담금10%)]',
                '보험의 목적의 수조, 급배수설비 또는 수관이 우연한 사고로 인해 누수 또는 방수됨에 따라 보험의 목적에 생긴 직접손해를 가입금액 한도로 실제손해액 보상',
                '※ 보장개시일은 최초 계약일 또는 부활(효력회복)일부터 90일이 지난 날의 다음날',
            ],
        },
        {
            title: '가족 일상생활중 배상책임',
            info: '1억원',
        },
        {
            title: '화재/붕괴/침강/사태 임시거주비(1일부터)',
            info: '1일 10만원',
        },
        {
            title: '화재/붕괴/침강/사태 상해사망',
            info: '5,000만원',
        },
        {
            title: '화재/붕괴/침강/사태 상해후유장해 (80%이상)',
            info: '1억원',
        },
        {
            title: '도난손해',
            info: '-',
        },
        {
            title: '강력범죄 위로금',
            info: '-',
        },
        {
            title: '20대 가전제품 고장수리비용',
            info: '-',
        },
        {
            title: '7대 문화용품 고장수리비용',
            info: '-',
        },
        {
            title: '민사소송 법률비용손해',
            info: '2,000만원',
        },
    ];

    return (
        <section
            style={{
                margin: '40px 24px 0',
            }}
        >
            <p className="title_label">보장내용</p>
            {infos.map((info, index) => {
                return (
                    <InsuranceDetailsBox
                        key={index}
                        title={info.title}
                        info={info.info}
                        tooltip={info.tooltip}
                    />
                );
            })}
        </section>
    );
}

export default InsuranceDetails;
