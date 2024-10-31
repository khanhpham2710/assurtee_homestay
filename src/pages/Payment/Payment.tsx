import { Avatar } from '@mui/material';
import images from '../../assets/images';
import RegistrationInfo from '../../components/InsuranceInfo/RegistrationInfo';
import RegistrationInfoBox from '../../components/InsuranceInfo/RegistrationInfoBox';
import PaymentInfoBox from './PaymentInfoBox';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UnpaidModal from '../../components/UnpaidModal/UnpaidModal';

type Fee = {
    name: string;
    fee: number;
};

function Payment() {
    const location = useLocation();
    const { isPaid }: { isPaid: boolean } = location.state || {};

    useEffect(() => {
        if (isPaid) {
            navigate('/complete');
        } else if (!isPaid && isPaid != undefined) {
            setModalOpen(true);
        }
    }, [isPaid]);

    const fees: Fee[] = [
        {
            name: '화재보장 부문',
            fee: 9300,
        },
        {
            name: '영업배상 보장 부문',
            fee: 10000,
        },
    ];

    const orangeFont = {
        fontFamily: 'AppleSDGothicNeoH',
        fontSize: '22px',
        lineHeight: '1.27',
        color: '#fb5601',
    };

    const navigate = useNavigate();
    const state = useAppSelector((state) => state.info);

    const allFieldsFilled = [
        state.businessName,
        state.businessNumber,
        state.address,
        state.fireInsurance,
        state.area,
    ].every((field) => field);

    function handleClick() {
        navigate('/loading');
    }

    const totalFee =
        fees.reduce((sum, item) => sum + item.fee, 0).toLocaleString() + '원';

    const [annual, setAnnual] = useState<boolean>(true);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

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
            <Avatar
                src={images.InsuranceLogo}
                alt=""
                sx={{
                    margin: '16px 24px 0px',
                    objectFit: 'contain',
                }}
            />
            <p
                className="titleMedium"
                style={{ margin: '12px 24px 0', textAlign: 'left' }}
            >
                현대해상화재보험 외국인관광도시민박보험
            </p>
            <RegistrationInfo />
            <p
                className="title_label"
                style={{ margin: '40px 24px 0', textAlign: 'left' }}
            >
                결제 금액
            </p>
            <section style={{ margin: '0 24px' }}>
                <RegistrationInfoBox title="총 보험료" info={totalFee} />
                {fees.map((fee, index) => {
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
                <p className="title-16">총 결제금액</p>
                <p style={orangeFont}>{totalFee}</p>
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
                />
                <p className="title_all_terms">일반 결제</p>
            </div>
            <UnpaidModal open={modalOpen} setOpen={setModalOpen} />
            <section className="dflex_center" style={{ width: '100%' }}>
                <button
                    className={allFieldsFilled ? 'button3 active' : 'button3'}
                    disabled={!allFieldsFilled}
                    onClick={handleClick}
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
