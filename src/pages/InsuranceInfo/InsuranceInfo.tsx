import { Avatar } from '@mui/material';
import images from '../../assets/images';
import FeeAccordion from '../../components/Accordion/FeeAccordion';
import RegistrationInfo from '../../components/InsuranceInfo/RegistrationInfo';
import InsuranceDetails from '../../components/InsuranceInfo/InsuranceDetails';
import Download from '../../components/Download/Download';
import WarningAccordion from '../../components/Accordion/WarningAccordion';
import ConfirmCheckbox from '../../components/InsuranceInfo/ConfirmCheckbox';
import { useState, useEffect } from 'react';
import MyModal from '../../components/MyModal/MyModal';
import FillAllInfor from '../FilledAllInfor/FillAllInfor';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import WarningContent from './WarningContent';

function InsuranceInfo() {
    const [checked, setChecked] = useState<boolean>(true);
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

    const handleCheck = () => {
        setChecked((prev) => !prev);
    };

    function handleSubmit() {
        if (allFilled && checked) {
            navigate('/payment');
        }
    }

    return (
        <div className="dflex-column">
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
                style={{ margin: '12px 24px 52px', textAlign: 'left' }}
            >
                현대해상화재보험 외국인관광도시민박보험
            </p>
            <FeeAccordion />
            <RegistrationInfo />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '8px',
                    marginRight: '24px',
                }}
            >
                <button
                    className="info-modify-button"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    내용수정
                </button>
            </div>
            <section
                style={{
                    margin: '40px 0',
                    padding: '0 24px',
                }}
            >
                <InsuranceDetails />
            </section>
            <section
                className="dflex_center"
                style={{
                    margin: '20px 0',
                    gap: '12px',
                }}
            >
                <Download text="상품설명서(PDF)" href="" fileName="" />
                <Download text="보험약관(PDF)" href="" fileName="" />
            </section>
            <section style={{ padding: '0 24px' }}>
                <WarningAccordion
                    title="보험가입 전 유의사항"
                    content={WarningContent}
                />
            </section>
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
            <ConfirmCheckbox checked={checked} handleCheck={handleCheck} />
            <section className="dflex_center">
                <button
                    className={`button3 ${checked && allFilled ? 'active' : ''}`}
                    disabled={!checked && !allFilled}
                    onClick={handleSubmit}
                >
                    가입하기
                </button>
            </section>
            <MyModal
                component={<FillAllInfor setOpen={setOpen} />}
                open={open}
                setOpen={setOpen}
                title="가입 내용 수정"
            />
        </div>
    );
}

export default InsuranceInfo;
