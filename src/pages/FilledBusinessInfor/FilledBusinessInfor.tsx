// FilledBusinessInfo.tsx
import React, { useState } from 'react';
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

const FilledBusinessInfo: React.FC = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState<BusinessType>(initialFormState);
    const [item, setItem] = useState<string>('예');

    const items = ['예', '아니오'];

    const handleChange = (key: keyof BusinessType, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const validateFields = () => {
        const { businessNumber, businessName, address, extra, hanok } = form;
        return (
            businessNumber &&
            businessName &&
            address &&
            extra &&
            hanok &&
            /\d{3}-\d{2}-\d{5}/.test(businessNumber)
        );
    };

    const allChecked = validateFields();

    const handleSubmit = async () => {
        if (allChecked) {
            await dispatch(updateInfo(form));
        }
    };

    return (
        <div style={{ padding: '16px 24px 0' }}>
            <Question
                item={item}
                items={items}
                setItem={setItem}
                title="사업자등록 주소지와 보험 가입 대상 민박업 운영 주소지가 동일하나요?"
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
                    className={`button1 ${allChecked ? 'active' : ''}`}
                    onClick={handleSubmit}
                    disabled={!allChecked}
                    style={{ marginBottom: '30px' }}
                >
                    확인
                </button>
            </section>
        </div>
    );
};

export default FilledBusinessInfo;
