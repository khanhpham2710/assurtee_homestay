import React, { useEffect, useMemo, useState } from 'react';
import { updateInfo } from '../../utils/redux/infoSlice';
import BusinessInputs from '../../components/Inputs/BusinessInputs';
import Question from '../../components/Questions/Question';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { validateBusinessField } from '../../utils/validation/validatefields';
import { useAppSelector, useAppDispatch } from '../../utils/hooks/reduxHooks';
import { BusinessType } from '../../utils/models/InfoType';

const FilledBusinessInfo: React.FC = () => {
    const info = useAppSelector((state) => state.info);

    const dispatch = useAppDispatch();
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

    useEffect(() => {
        handleChange('extra', form.address);
    }, [item]);

    const allChecked: boolean = useMemo(
        () => validateBusinessField(form),
        [form]
    );

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
                style={{ width: '100%', marginTop: '20px' }}
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
