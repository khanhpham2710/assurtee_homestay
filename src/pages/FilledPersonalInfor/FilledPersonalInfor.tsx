import { useState } from 'react';
import PersonalInputs from '../../components/Inputs/PersonalInputs';
import { useDispatch, useSelector } from 'react-redux';
import { BusinessType, updateInfo } from '../../utils/redux/infoSlice';
import { PersonalType } from '../../utils/redux/infoSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../utils/redux/store';
import BusinessInputs from '../../components/Inputs/BusinessInputs';
import {
    validateBusinessField,
    validatePersonalField,
} from '../../utils/validation/validatefields';

export default function FilledPersonalInfo() {
    const info = useSelector((state: RootState) => state.info);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form1, setForm1] = useState<PersonalType>(info);
    const [form2, setForm2] = useState<BusinessType>(info);

    const handleChange1 = (key: keyof PersonalType, value: string) => {
        setForm1((prev) => ({ ...prev, [key]: value }));
    };

    const handleChange2 = (key: keyof BusinessType, value: string) => {
        setForm2((prev) => ({ ...prev, [key]: value }));
    };

    const allChecked1: boolean = validatePersonalField(form1);
    const allChecked2: boolean = validateBusinessField(form2);

    const handleSubmit1 = async () => {
        if (allChecked1) {
            await dispatch(updateInfo(form1));
            navigate('/scan-option');
        }
    };

    const handleSubmit2 = async () => {
        if (allChecked2) {
            navigate('/insurance-amount');
        }
    };

    return (
        <div style={{ padding: '8px 24px 0' }}>
            <section className="dflex-column" style={{ marginBottom: '28px' }}>
                <p className="titleNumber">
                    <span>1</span> / 2
                </p>
                <p
                    className="titleMedium"
                    style={{ textAlign: 'left', marginTop: '17px' }}
                >
                    보험 가입 정보를 입력해 주세요.
                </p>
            </section>
            <section>
                <PersonalInputs form={form1} handleChange={handleChange1} />
            </section>
            <section
                style={{ width: '100%', marginTop: '40px' }}
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
            {form2.address !== '' && (
                <div
                    style={{
                        marginBottom: '70px',
                    }}
                >
                    <p
                        className="titleMedium"
                        style={{ textAlign: 'left', marginTop: '38px' }}
                    >
                        건물/주택 정보
                    </p>
                    <BusinessInputs form={form2} handleChange={handleChange2} />
                </div>
            )}
            <section className="dflex_center" style={{ width: '100%' }}>
                <button
                    className={
                        allChecked1 && allChecked2
                            ? 'button3 active'
                            : 'button3'
                    }
                    disabled={!allChecked2 || !allChecked1}
                    style={{
                        position: 'fixed',
                        bottom: 0,
                    }}
                    onClick={handleSubmit2}
                >
                    수정
                </button>
            </section>
        </div>
    );
}