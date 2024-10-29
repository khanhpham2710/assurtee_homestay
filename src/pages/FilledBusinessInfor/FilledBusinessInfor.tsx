import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInfo } from '../../utils/redux/infoSlice';
import BusinessInputs from '../../components/Inputs/BusinessInputs';
import { BusinessType } from '../../utils/redux/infoSlice';
import Question from '../../components/Questions/Question';
import { Divider } from '@mui/material';
import { RootState } from '../../utils/redux/store';
import { useNavigate } from 'react-router-dom';

const FilledBusinessInfo: React.FC = () => {
    const info = useSelector((state: RootState) => state.info);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState<BusinessType>(info);
    const [item, setItem] = useState<string>(
        sessionStorage.getItem('sameAddress') || '예'
    );

    const items = ['예', '아니오'];

    const handleChange = (key: keyof BusinessType, value: string) => {
        if (item === '예' && (key === 'address' || key === 'extra')) {
            setForm((prev) => ({ ...prev, extra: value, address: value }));
        } else {
            setForm((prev) => ({ ...prev, [key]: value }));
        }
    };

    const validateFields = (): boolean => {
        const { businessNumber, businessName, address, extra, hanok } = form;

        if (!businessNumber || !businessName || !address || !extra || !hanok) {
            return false;
        }

        const businessNumberRegex = /^\d{3}-\d{2}-\d{5}$/;
        if (!businessNumberRegex.test(businessNumber)) {
            return false;
        }

        return true;
    };

    const allChecked: boolean = validateFields();

    const handleSubmit = async () => {
        if (allChecked) {
            await dispatch(
                updateInfo({
                    ...form,
                    sameAddress: item === '예' ? true : false,
                })
            );
            navigate('/personal-infor');
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
