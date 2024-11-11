import images from '../../assets/images';
import Download from '../../components/Download/Download';
import InsuranceDetailsAccordion from '../../components/InsuranceDetails/InsuranceDetailsAccordion';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SmallModal from '../../components/MyModals/SmallModal';

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

    const { isSuccess } = useParams<{ isSuccess: string }>();
    const success: boolean = isSuccess === 'success';
    const navigate = useNavigate();

    const [open, setOpen] = useState<boolean>(false);

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
            <section
                style={{
                    marginTop: success ? 49 : 59,
                }}
            >
                <img
                    src={images.InsuranceLogo}
                    alt=""
                    style={{
                        margin: '16px 206px 0px 24px',
                        objectFit: 'contain',
                    }}
                />
                <p
                    className="titleH-22"
                    style={{
                        margin: '12px 24px 0',
                        textAlign: 'left',
                        lineHeight: 1.27,
                    }}
                >
                    현대해상화재보험 외국인관광도시민박보험
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
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        가입 취소
                    </StyledButton>
                )}
            </section>
            <SmallModal
                open={open}
                setOpen={setOpen}
                title="가입 취소"
                description={
                    <div className="dflex_center flexColumn_item">
                        <p>가입된 보험을 취소하시겠습니까?</p>
                        <a
                            style={{
                                marginTop: '16px',
                                fontSize: 14,
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                navigate('/detail/canceled');
                                setOpen(false);
                            }}
                        >
                            취소하기
                        </a>
                    </div>
                }
                textButton="유지하기"
                handleClick={() => {}}
            />
        </div>
    );
}

export default InsuranceDetailsPage;
