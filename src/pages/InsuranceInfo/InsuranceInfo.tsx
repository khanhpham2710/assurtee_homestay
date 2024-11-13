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
import NewWarningContent from './NewWarningContent';

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
        <>
            <div className="container container-page" id="container">
                <div className="section">
                    <div className="title-box">
                        <div className="title-labels">
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
                    <FeeAccordion />
                    <div className="form-section">
                        <RegistrationInfo />
                        <div className="btn-wrap al-right">
                            <a
                                href="#"
                                className="btn btn--small btn--dark"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(true);
                                }}
                            >
                                내용수정
                            </a>
                        </div>
                    </div>
                    <InsuranceDetails />
                    <div className="btn-wrap btn-mid type-col">
                        <Download text="상품설명서(PDF)" href="" fileName="" />
                        <Download text="보험약관(PDF)" href="" fileName="" />
                    </div>
                    <WarningAccordion
                        title={
                            <button
                                type="button"
                                className="btn-open"
                                data-role="accordion-title"
                            >
                                보험가입 전 유의사항
                            </button>
                        }
                        content={NewWarningContent}
                    />

                    <p className="text-sbox">
                        준법감시확인필 제202325412호 2024.5.25~2025.5.25
                    </p>

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
            </div>
            <ConfirmCheckbox
                handleSubmit={handleSubmit}
                allFilled={allFilled}
            />
        </>
    );
}

export default InsuranceInfo;
