import { Typography } from '@mui/material';
import RegistrationInfoBox, { InfoProps } from './RegistrationInfoBox';

function RegistrationInfo() {
    const infos: InfoProps[] = [
        {
            title: '상호',
            info: '홍대우리민박',
        },
        {
            title: '등록번호',
            info: '584-12-65820',
        },
        {
            title: '가입 대상 소재지',
            info: '경기도 고양시 덕양구 향기5로 66(향동동, DMC 두산위브 더 퍼스트) 1003동 204호',
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
            <Typography
                sx={{
                    fontFamily: 'AppleSDGothicNeoM',
                    fontSize: '12px',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '1.83',
                    letterSpacing: 'normal',
                    textAlign: 'left',
                    color: '#000',
                }}
            >
                가입정보
            </Typography>
            {infos.map((info, index) => {
                return (
                    <RegistrationInfoBox
                        key={index}
                        title={info.title}
                        info={info.info}
                    />
                );
            })}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
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
