import { useSelector } from 'react-redux';
import RegistrationInfoBox, { InfoProps } from './RegistrationInfoBox';
import { InfoType } from '../../utils/redux/infoSlice';
import { RootState } from '../../utils/redux/store';
import { useMemo } from 'react';

function RegistrationInfo() {
    const state: InfoType = useSelector((state: RootState) => state.info);

    const { current, next } = useMemo(() => {
        const date = new Date(Date.now());

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const current = `${year}.${month}.${day}`;
        const next = `${year + 1}.${month}.${day}`;
        return { current, next };
    }, []);

    const infos: InfoProps[] = [
        {
            title: '상호',
            info: state.businessName,
        },
        {
            title: '등록번호',
            info: state.businessNumber,
        },
        {
            title: '가입 대상 소재지',
            info: state.address,
        },
        {
            title: '보험시작일',
            info: `${current} / 00시 00분'`,
        },
        {
            title: '보험종료일',
            info: `${next} / 00시 00분'`,
        },
        {
            title: '화재보험',
            info: state.fireInsurance,
        },
        {
            title: '영업배상책임보험',
            info: `${state.area}m²`,
        },
    ];

    return (
        <section
            style={{
                margin: '40px 24px 0',
            }}
        >
            <p className="title_label">가입정보</p>
            {infos.map((info, index) => {
                return (
                    <RegistrationInfoBox
                        key={index}
                        title={info.title}
                        info={info.info}
                    />
                );
            })}
        </section>
    );
}

export default RegistrationInfo;