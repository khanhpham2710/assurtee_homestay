import React, { useMemo, useState } from 'react';
import { updateInfo } from '../../utils/redux/infoSlice';
import BusinessInputs from '../../components/Inputs/BusinessInputs';
import Question from '../../components/Questions/Question';
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
        info.sameAddress ? '예' : '아니오'
    );

    const items = ['예', '아니오'];

    const handleChange = (key: keyof BusinessType, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const allChecked: boolean = useMemo(() => {
        const validate = validateBusinessField(form);
        if (form.equip == '설치되어 있습니다.') {
            return validate && info.image != null;
        }
        return validate;
    }, [form, info]);

    const handleSubmit = async () => {
        if (allChecked) {
            await dispatch(
                updateInfo({
                    ...form,
                    sameAddress: item === '예',
                    image: info.image,
                })
            );
            navigate('/personal-business-infor');
        }
    };

    return (
        <>
            <div
                className="container container-page container-fx"
                id="container"
            >
                <section className="section">
                    <Question
                        item={item}
                        items={items}
                        setItem={setItem}
                        title="사업자등록 주소지와 보험 가입 대상 민박업 운영 주소지가 동일하나요?"
                    />
                </section>

                <section className="section">
                    <h2 className="sect-title">건물/주택 정보</h2>
                    <BusinessInputs
                        form={form}
                        handleChange={handleChange}
                        style={{
                            marginBottom: 40,
                        }}
                    />
                </section>
            </div>
            <div className="btm-fixed">
                <div className="btn-wrap">
                    <button
                        type="button"
                        className="btn"
                        disabled={!allChecked}
                        onClick={handleSubmit}
                    >
                        다음
                    </button>
                </div>
            </div>
        </>
    );
};

export default FilledBusinessInfo;
