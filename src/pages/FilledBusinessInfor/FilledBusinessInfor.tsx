import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../utils/redux/infoSlice';
import BusinessInputs from '../../components/Inputs/BusinessInputs';
import { BusinessType } from '../../utils/redux/infoSlice';
import Question from '../../components/Questions/Question';
import { Divider } from '@mui/material';

const initialFormState: BusinessType = {
    division: '',
    businessNumber: '',
    businessName: '',
    address: '',
    extra: '',
    hanok: '',
};

export default function FilledBusinessInfo() {
    const dispatch = useDispatch();
    const [form, setForm] = useState<BusinessType>(initialFormState);
    const [item, setItem] = useState<string>('예');

    const items: string[] = ['예', '아니오'];

    const handleChange = (key: keyof BusinessType, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const validateFields = (): boolean => {
        const { businessNumber, businessName, address, extra, hanok } = form;

        if (!businessNumber || !businessName || !address || !extra || !hanok)
            return false;

        if (!/\d{3}-\d{2}-\d{5}/.test(businessNumber)) {
            return false;
        }

        return true;
    };

    const allChecked: boolean = validateFields();

    const handleSubmit = () => {
        if (allChecked) {
            dispatch(updateInfo(form));
        }
    };

    return (
        <div style={{ padding: '16px 24px 0' }}>
            <Question
                item={item}
                items={items}
                setItem={setItem}
                title="사업자등록 주소지와 보험 가입 대상 민박업 운영 주소지가 동일하나요?"
            />

            <Divider className="divider_1" />

            <p
                className="titleMedium"
                style={{ textAlign: 'left', marginBottom: '28px' }}
            >
                건물/주택 정보를 입력해 주세요.
            </p>

            <BusinessInputs form={form} handleChange={handleChange} />
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
                    확인
                </button>
            </section>
        </div>
    );
}
