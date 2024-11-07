import images from '../../assets/images';
import RegistrationInfo from '../../components/InsuranceInfo/RegistrationInfo';
import GreyLabelInfoBox from '../../components/InfoBox/GreyLabelInfoBox';
import PaymentInfoBox from '../../components/InfoBox/PaymentInfoBox';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import SmallModal from '../../components/MyModals/SmallModal';
import fees from '../../utils/models/Fee';

function Payment() {
    const location = useLocation();
    const { isPaid }: { isPaid: boolean } = location.state || {};
    const navigate = useNavigate();
    const state = useAppSelector((state) => state.info);
    const [annual, setAnnual] = useState<boolean>(true);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isPaid) {
            navigate('/complete');
        } else if (!isPaid && isPaid != undefined) {
            setModalOpen(true);
        }
    }, [isPaid]);

    const orangeFont = {
        fontFamily: 'AppleSDGothicNeoH',
        fontSize: '22px',
        lineHeight: '1.27',
        color: '#fb5601',
    };

    const allFieldsFilled = useMemo(() => {
        return [
            state.businessName,
            state.businessNumber,
            state.address,
            state.fireInsurance,
            state.area,
        ].every((field) => field);
    }, [state]);

    return (
        <div>
            <p
                className="title_label"
                style={{
                    margin: '16px 24px 0',
                }}
            >
                가입상품
            </p>
            <img
                src={images.InsuranceLogo}
                alt=""
                style={{
                    margin: '16px 24px 0px',
                    objectFit: 'contain',
                }}
            />
            <p
                className="titleH-22"
                style={{ margin: '12px 24px 0', textAlign: 'left' }}
            >
                현대해상화재보험 외국인관광도시민박보험
            </p>
            <RegistrationInfo style={{ margin: '40px 24px 0' }} />
            <p
                className="title_label"
                style={{ margin: '40px 24px 0', textAlign: 'left' }}
            >
                결제 금액
            </p>
            <section style={{ margin: '0 24px' }}>
                <GreyLabelInfoBox
                    title="총 보험료"
                    info={fees.total.toLocaleString() + '원'}
                />
                {fees.fees.map((fee, index) => {
                    return (
                        <PaymentInfoBox
                            key={index}
                            title={fee.name}
                            info={fee.fee.toLocaleString() + '원'}
                        />
                    );
                })}
            </section>
            <section
                className="dflex_spacebetween"
                style={{
                    margin: '19px 24px 0',
                }}
            >
                <p className="titleH-16">총 결제금액</p>
                <p style={orangeFont}>{fees.total.toLocaleString() + '원'}</p>
            </section>
            <p
                className="title_label"
                style={{ margin: '51px 24px 0', textAlign: 'left' }}
            >
                결제수단
            </p>
            <div
                className="dflex_item"
                style={{ gap: '10px', margin: '14px 24px 110px' }}
            >
                <img
                    src={annual ? images.PinkCheckBox : images.UnCheckBoxGrey}
                    onClick={() => {
                        setAnnual((prev) => !prev);
                    }}
                    style={{ cursor: 'pointer' }}
                />
                <p className="title_all_terms">일반 결제</p>
            </div>
            <SmallModal
                open={modalOpen}
                setOpen={setModalOpen}
                description={
                    <p>
                        계속해서 문제가 발생할 경우 <br />
                        어슈어티 고객센터 <a href="tel:1533-1291">1533-1291</a>
                        로 <br />
                        문의 주시기 바랍니다.
                    </p>
                }
                title="사진을 추가해 주세요."
                textButton="확인"
                handleClick={() => {
                    navigate('/insurance-details/failed');
                }}
            />
            <section className="dflex_center" style={{ width: '100%' }}>
                <button
                    className={allFieldsFilled ? 'button3 active' : 'button3'}
                    disabled={!allFieldsFilled}
                    onClick={() => {
                        navigate('/loading');
                    }}
                    style={{
                        position: 'fixed',
                        bottom: 0,
                    }}
                >
                    결제하기
                </button>
            </section>
        </div>
    );
}

export default Payment;
