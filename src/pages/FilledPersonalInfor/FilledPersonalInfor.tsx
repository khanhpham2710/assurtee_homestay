import { useState } from 'react';
import PersonalInputs from '../../components/Inputs/PersonalInputs';
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../utils/redux/infoSlice';
import { PersonalType } from '../../utils/redux/infoSlice';
import { useNavigate } from 'react-router-dom';

const initialForm: PersonalType = {
    contractor: '',
    dob: '',
    registrationNumber: '',
    phoneNumber: '',
};

export default function FilledPersonalInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState<PersonalType>(initialForm);

    const handleChange = (key: keyof PersonalType, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const validateFields = (): boolean => {
        const { contractor, dob, registrationNumber, phoneNumber } = form;

        if (!contractor || !dob || !registrationNumber || !phoneNumber)
            return false;

        if (
            dob.length !== 6 ||
            registrationNumber.length !== 7 ||
            !/^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])-[0-4,9][0-9]{6}$/.test(
                dob + '-' + registrationNumber
            )
        ) {
            return false;
        }

        if (phoneNumber.length <= 8) {
            return false;
        }

        return true;
    };

    const allChecked: boolean = validateFields();

    const handleSubmit = async () => {
        if (allChecked) {
            await dispatch(updateInfo(form));
            navigate('/scan-option');
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
                <PersonalInputs form={form} handleChange={handleChange} />
            </section>
            <section
                style={{ width: '100%', marginTop: '40px' }}
                className="dflex_center"
            >
                <button
                    className={allChecked ? 'button1 active' : 'button1'}
                    onClick={handleSubmit}
                    disabled={!allChecked}
                    style={{
                        marginBottom: '30px',
                    }}
                >
                    주택 정보 입력
                </button>
            </section>
        </div>
    );
}
