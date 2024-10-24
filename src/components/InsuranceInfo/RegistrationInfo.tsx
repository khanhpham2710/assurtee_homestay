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
            info: state.businessName || '홍대우리민박',
        },
        {
            title: '등록번호',
            info: state.registrationNumber || '584-12-65820',
        },
        {
            title: '가입 대상 소재지',
            info:
                state.address ||
                '경기도 고양시 덕양구 향기5로 66(향동동, DMC 두산위브 더 퍼스트) 1003동 204호',
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
            info: '1억',
        },
        {
            title: '영업배상책임보험',
            info: '79m²',
        },
    ];

    return (
        <section
            style={{
                margin: '40px 24px 0',
            }}
        >
            <h4 className="title_label">가입정보</h4>
            {infos.map((info, index) => {
                return (
                    <RegistrationInfoBox
                        key={index}
                        title={info.title}
                        info={info.info}
                    />
                );
            })}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '8px',
                }}
            >
                <button
                    style={{
                        width: '66px',
                        height: '24px',
                        background: '#333647',
                        padding: '1px 12px',
                        fontFamily: 'AppleSDGothicNeoM',
                        fontSize: '12px',
                        lineHeight: '1.83',
                        color: '#fff',
                        borderRadius: '40px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    내용수정
                </button>
            </div>
        </section>
    );
}

export default RegistrationInfo;
