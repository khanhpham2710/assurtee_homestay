import { useMemo, useState } from 'react';
import PersonalInputs from '../../components/Inputs/PersonalInputs';
import { updateInfo } from '../../utils/redux/infoSlice';
import { useNavigate } from 'react-router-dom';
import {
    validateBusinessField,
    validatePersonalField,
} from '../../utils/validation/validatefields';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { BusinessType, PersonalType } from '../../utils/models/InfoType';
import BusinessInputs from '../../components/Inputs/BusinessInputs';

export default function FilledPersonalInfo() {
    const info = useAppSelector((state) => state.info);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [form1, setForm1] = useState<PersonalType>(info);
    const [form2, setForm2] = useState<BusinessType>(info);

    const handleChange1 = (key: keyof PersonalType, value: string) => {
        setForm1((prev) => ({ ...prev, [key]: value }));
    };

    const handleChange2 = (key: keyof BusinessType, value: string) => {
        setForm2((prev) => ({ ...prev, [key]: value }));
    };
    const allChecked1 = useMemo(() => validatePersonalField(form1), [form1]);
    const allChecked2 = useMemo(() => validateBusinessField(form2), [form2]);

    const handleSubmit1 = async () => {
        if (allChecked1) {
            await dispatch(updateInfo(form1));
            navigate('/options');
        }
    };

    const handleSubmit2 = async () => {
        if (allChecked2) {
            await dispatch(updateInfo(form2));
            navigate('/insurance-amount');
        }
    };

    const isBusinessInfoVisible = form2.businessName || form2.businessNumber;

    return (
        <>
            <div style={{ padding: '8px 24px 0' }}>
                <section
                    className="dflex-column"
                    style={{ marginBottom: '28px' }}
                >
                    <p className="titleNumber">
                        <span>1</span> / 2
                    </p>
                    <p
                        className="titleH-22"
                        style={{ textAlign: 'left', marginTop: '17px' }}
                    >
                        보험 가입 정보를 입력해 주세요.
                    </p>
                </section>
                <PersonalInputs form={form1} handleChange={handleChange1} />
                <section
                    style={{
                        width: '100%',
                        marginTop: '40px',
                        marginBottom: '70px',
                    }}
                    className="dflex_center"
                >
                    <button
                        className={allChecked1 ? 'button1 active' : 'button1'}
                        onClick={handleSubmit1}
                        disabled={!allChecked1}
                    >
                        주택 정보 입력
                    </button>
                </section>
            </div>
            {isBusinessInfoVisible && (
                <>
                    <p
                        className="titleH-22"
                        style={{ textAlign: 'left', marginTop: '38px' }}
                    >
                        건물/주택 정보
                    </p>
                    <BusinessInputs form={form2} handleChange={handleChange2} />
                </>
            )}
            <section className="dflex_center" style={{ width: '100%' }}>
                <button
                    className={
                        allChecked1 && allChecked2
                            ? 'button3 active'
                            : 'button3'
                    }
                    disabled={!allChecked2 || !allChecked1}
                    onClick={handleSubmit2}
                    aria-label="Submit business information"
                >
                    수정
                </button>
            </section>
        </>
    );
}
