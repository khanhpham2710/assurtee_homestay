import images from '../../assets/images';
import { Avatar } from '@mui/material';
import Download from '../../components/Download/Download';
import InsuranceDetailsAccordion from '../../components/InsuranceDetails/InsuranceDetailsAccordion';
import React, { useMemo } from 'react';
// import { useAppSelector } from '../../utils/hooks/reduxHooks';

type StyledButtonProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
};

function StyledButton({ children, style, onClick }: StyledButtonProps) {
    return (
        <div
            style={{
                height: 50,
                width: 150,
                flexGrow: 0,
                borderRadius: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontFamily: 'AppleSDGothicNeoB',
                fontSize: 14,
                ...style,
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

function InsuranceDetailsPage() {
    // const { success } = useAppSelector((state) => state.info);

    const success: boolean = useMemo(() => {
        return Math.floor(Math.random() * 2) === 0 ? true : false;
    }, []);

    return (
        <div>
            <section>
                <p
                    className="title_drawer"
                    style={{
                        fontSize: 22,
                        marginLeft: 24,
                        marginTop: 16,
                    }}
                >
                    {success ? '보호 중입니다!' : '가입 취소되었습니다.'}
                </p>
                <div
                    style={{
                        width: '100%',
                        marginTop: '42.3px',
                    }}
                    className="dflex_center"
                >
                    <img
                        src={
                            success
                                ? images.SuccessRegistration
                                : images.FailedRegistration
                        }
                    />
                </div>
            </section>
            <section>
                <Avatar
                    src={images.InsuranceLogo}
                    alt=""
                    sx={{
                        margin: '16px 206px 0px 24px',
                        objectFit: 'contain',
                    }}
                />
                <p
                    className="titleMedium"
                    style={{ margin: '12px 24px 0', textAlign: 'left' }}
                >
                    현대해상화재보험 해외장기체류단체보험
                </p>
            </section>
            {success && (
                <section
                    className="dflex_center"
                    style={{
                        gap: 12,
                        marginTop: 53,
                    }}
                >
                    <Download text="가입확인서" href="" fileName="" />
                    <Download text="가입확인서(영문)" href="" fileName="" />
                </section>
            )}
            <section style={{ marginTop: success ? 32 : 24 }}>
                <InsuranceDetailsAccordion />
            </section>
            <section
                className="dflex_center"
                style={{
                    marginTop: '40px',
                    paddingBottom: '40px',
                    gap: '12px',
                }}
            >
                <StyledButton
                    style={{
                        backgroundColor: '#f1d607',
                        color: '#372020',
                        gap: 8,
                        width: success ? 150 : 312,
                    }}
                    onClick={() => {}}
                >
                    <p>1:1 카톡상담</p>
                    <img src={images.ArrowIconRight} alt="" />
                </StyledButton>
                {success && (
                    <StyledButton
                        style={{
                            backgroundColor: '#ffeef1',
                            color: '#fa4c00',
                        }}
                        onClick={() => {}}
                    >
                        가입 취소
                    </StyledButton>
                )}
            </section>
        </div>
    );
}

export default InsuranceDetailsPage;
