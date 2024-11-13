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
        <>
            <div
                className="container container-page container-fx"
                id="container"
            >
                <section className="section">
                    <div className="title-box">
                        <strong className="form-title">가입상품</strong>
                        <div className="title-labels pt16">
                            <span className="ci-img">
                                <img
                                    src="images/ci/logo_hyundai.png"
                                    alt="현대해상"
                                />
                            </span>
                        </div>
                        <p className="title">
                            현대해상화재보험 외국인관광도시민박보험
                        </p>
                    </div>
                    <div className="details-content">
                        <RegistrationInfo />
                    </div>
                    <div className="form-wrap mt35">
                        <strong className="form-title">결제 금액</strong>
                        <div className="form-list">
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
                            <div className="form-cont flex-wrap sum-block">
                                <p className="item-title">총 결제금액</p>
                                <p className="item-text">
                                    <em className="tot-text">
                                        {fees.total.toLocaleString() + '원'}
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="form-wrap">
                        <strong className="form-title">결제수단</strong>
                        <div className="form-list">
                            <div className="form-cont flex-wrap border-none">
                                <label className="chk-box type-bg red full">
                                    <input
                                        type="checkbox"
                                        className="chk-input"
                                        name="chk-pay"
                                        readOnly
                                        checked={annual}
                                        onClick={() =>
                                            setAnnual((prev) => !prev)
                                        }
                                    />
                                    <span className="label">
                                        <em>일반 결제</em>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
                <SmallModal
                    open={modalOpen}
                    setOpen={setModalOpen}
                    description={
                        <>
                            계속해서 문제가 발생할 경우
                            <br />
                            어슈어티 고객센터{' '}
                            <a
                                href="tel:1533-1291"
                                className="text-m btn--underline btn--blue"
                            >
                                1533-1291
                            </a>{' '}
                            로<br />
                            문의 주시기 바랍니다.
                        </>
                    }
                    title="사진을 추가해 주세요."
                    textButton="확인"
                    handleClick={() => {
                        navigate('/detail/failed');
                    }}
                />
            </div>
            <div className="btm-fixed">
                <div className="btn-wrap">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => {
                            navigate('/inprogress');
                        }}
                        disabled={!allFieldsFilled}
                    >
                        결제하기
                    </button>
                </div>
            </div>
        </>
    );
}

export default Payment;
