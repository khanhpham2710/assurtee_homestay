import { useState } from 'react';
import Inputs from '../../components/Inputs/Inputs';
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../utils/redux/infoSlice';
import { PersonalType } from '../../utils/redux/infoSlice';

const initialFormState: PersonalType = {
    contractor: '',
    dob: '',
    registrationNumber: '',
    phoneNumber: '',
};

export default function FilledInfo() {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState<PersonalType>(initialFormState);

    const handleChange = (key: keyof PersonalType, value: string) => {
        setFormState((prev) => ({ ...prev, [key]: value }));
    };

    const validateFields = (): boolean => {
        const { contractor, dob, registrationNumber, phoneNumber } = formState;

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

    const handleSubmit = () => {
        const isValid = validateFields();
        if (isValid) {
            dispatch(updateInfo(formState));
        }
    };

    const allChecked: boolean = validateFields();

    return (
        <div style={{ padding: '0 24px' }}>
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
                <Inputs
                    contractor={formState.contractor}
                    handleChange={handleChange}
                    dob={formState.dob}
                    phoneNumber={formState.phoneNumber}
                    registrationNumber={formState.registrationNumber}
                />
            </section>
            <section
                style={{ width: '100%', marginTop: '40px' }}
                className="dflex_center"
            >
                <button
                    className={allChecked ? 'button1 active' : 'button1'}
                    onClick={handleSubmit}
                    disabled={!allChecked}
                >
                    주택 정보 입력
                </button>
            </section>
        </div>
    );
}
