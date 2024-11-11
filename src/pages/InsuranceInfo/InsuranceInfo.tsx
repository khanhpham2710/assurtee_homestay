import images from '../../assets/images';
import FeeAccordion from '../../components/Accordion/FeeAccordion';
import RegistrationInfo from '../../components/InsuranceInfo/RegistrationInfo';
import InsuranceDetails from '../../components/InsuranceInfo/InsuranceDetails';
import Download from '../../components/Download/Download';
import WarningAccordion from '../../components/Accordion/WarningAccordion';
import ConfirmCheckbox from '../../components/InsuranceInfo/ConfirmCheckbox';
import { useState, useEffect } from 'react';
import FullPageModal from '../../components/MyModals/FullPageModal';
import FillAllInfor from '../FilledAllInfor/FillAllInfor';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import WarningContent from './WarningContent';

function InsuranceInfo() {
    const [allFilled, setAllFilled] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const state = useAppSelector((state) => state.info);

    const checkAllFilled = () => {
        const requiredFields = [
            state.businessName,
            state.businessNumber,
            state.address,
            state.fireInsurance,
            state.area,
        ];
        return requiredFields.every(
            (field) => field !== '' && field !== undefined
        );
    };

    useEffect(() => {
        setAllFilled(checkAllFilled());
    }, [state]);

    function handleSubmit() {
        if (allFilled) {
            navigate('/payment');
        }
    }

    return (
        <div className="dflex-column">
            <img
                src={images.InsuranceLogo}
                alt=""
                style={{
                    width: 40,
                    height: 40,
                    margin: '16px 206px 0px 24px',
                }}
            />
            <p
                className="titleH-22"
                style={{ margin: '12px 24px 52px', textAlign: 'left' }}
            >
                현대해상화재보험 외국인관광도시민박보험
            </p>
            <FeeAccordion />
            <RegistrationInfo
                style={{
                    margin: '40px 24px 0',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '8px',
                    marginRight: '24px',
                }}
            >
                <button
                    className="small-button"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    내용수정
                </button>
            </div>
            <InsuranceDetails
                style={{
                    marginTop: '40px',
                    padding: '0 24px',
                }}
            />
            <section
                className="dflex_center"
                style={{
                    gap: 12,
                    marginTop: 12,
                }}
            >
                <Download text="상품설명서(PDF)" href="" fileName="" />
                <Download text="보험약관(PDF)" href="" fileName="" />
            </section>
            <div style={{ padding: '0 24px', marginTop: 20 }}>
                <WarningAccordion
                    title="보험가입 전 유의사항"
                    content={WarningContent}
                />
            </div>
            <p
                className="title_label"
                style={{
                    lineHeight: 'normal',
                    color: '#646464',
                    margin: '34px auto 47px',
                }}
            >
                준법감시확인필 제202325412호 2024.5.25~2025.5.25
            </p>
            <ConfirmCheckbox
                handleSubmit={handleSubmit}
                allFilled={allFilled}
            />
            <FullPageModal
                component={<FillAllInfor setOpen={setOpen} />}
                open={open}
                setOpen={setOpen}
                title="가입 내용 수정"
                style={{
                    transform: {
                        sm: 'translateX(-8px)',
                    },
                }}
            />
        </div>
    );
}

export default InsuranceInfo;
