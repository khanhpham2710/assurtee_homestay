import PersonalInputs from '../../components/Inputs/PersonalInputs';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../utils/redux/infoSlice';
import { PersonalType, BusinessType } from '../../utils/redux/infoSlice';
import BusinessInputs from '../../components/Inputs/BusinessInputs';

const initialForm: PersonalType = {
    contractor: '',
    dob: '',
    registrationNumber: '',
    phoneNumber: '',
};

const initialFormState: BusinessType = {
    division: '',
    businessNumber: '',
    businessName: '',
    address: '',
    extra: '',
    hanok: '',
};

function FillAllInfor() {
    const dispatch = useDispatch();
    const [form1, setForm1] = useState<PersonalType>(initialForm);
    const [form2, setForm2] = useState<BusinessType>(initialFormState);

    const handleChange1 = (key: keyof PersonalType, value: string) => {
        setForm1((prev) => ({ ...prev, [key]: value }));
    };

    const handleChange2 = (key: keyof BusinessType, value: string) => {
        setForm2((prev) => ({ ...prev, [key]: value }));
    };

    const validateFields = (): boolean => {
        const { contractor, dob, registrationNumber, phoneNumber } = form1;

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

        const { businessNumber, businessName, address, extra, hanok } = form2;

        if (!businessNumber || !businessName || !address || !extra || !hanok)
            return false;

        if (!/\d{3}-\d{2}-\d{5}/.test(businessNumber)) {
            return false;
        }

        return true;
    };

    const allChecked: boolean = validateFields();

    const handleSubmit = async () => {
        if (allChecked) {
            await dispatch(updateInfo(form1));
            await dispatch(updateInfo(form2));
        }
    };

    return (
        <div
            style={{
                marginTop: '8px',
                marginBottom: '40px',
                padding: '0 24px',
            }}
        >
            <PersonalInputs form={form1} handleChange={handleChange1} />
            <p
                className="titleMedium"
                style={{
                    textAlign: 'left',
                    marginTop: '20px',
                    marginBottom: '28px',
                }}
            >
                건물/주택 정보를 입력해 주세요.
            </p>

            <BusinessInputs form={form2} handleChange={handleChange2} />
        </div>
    );
}

export default FillAllInfor;
