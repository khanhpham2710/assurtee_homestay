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
            <div
                className="container container-page container-fx"
                id="container"
            >
                <section className="section">
                    <div className="step-num">
                        <span className="num">
                            <em>1</em>
                        </span>
                        <span className="mid">/</span>
                        <span className="num">2</span>
                    </div>
                    <h2 className="sect-title">
                        보험 가입 정보를 입력해 주세요.
                    </h2>
                    <PersonalInputs form={form1} handleChange={handleChange1} />
                    <div className="btn-wrap">
                        <button
                            type="button"
                            className={allChecked1 ? 'btn active' : 'btn'}
                            disabled={!allChecked1}
                            onClick={handleSubmit1}
                        >
                            주택 정보 입력
                        </button>
                    </div>
                </section>
                {isBusinessInfoVisible && (
                    <section className="section section-2nd">
                        <h2 className="sect-title">건물/주택 정보</h2>
                        <BusinessInputs
                            form={form2}
                            handleChange={handleChange2}
                        />
                    </section>
                )}
            </div>
            <div className="btm-fixed">
                <div className="btn-wrap">
                    <button
                        type="button"
                        className="btn"
                        disabled={!allChecked2 || !allChecked1}
                        onClick={handleSubmit2}
                    >
                        다음
                    </button>
                </div>
            </div>
        </>
    );
}
