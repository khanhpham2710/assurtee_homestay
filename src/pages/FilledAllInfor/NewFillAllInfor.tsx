import React, { useEffect, useMemo, useState } from 'react';
import { updateInfo } from '../../utils/redux/infoSlice';
import PersonalInputs from '../../components/Inputs/PersonalInputs';
import BusinessInputs from '../../components/Inputs/BusinessInputs';
import Question from '../../components/Questions/Question';
import InsuranceAmount from '../../components/FilledInsuranceAmount/InsuranceAmount';
import {
    validateAmountField,
    validateBusinessField,
    validatePersonalField,
} from '../../utils/validation/validatefields';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { InfoType } from '../../utils/models/InfoType';
import { useNavigate } from 'react-router-dom';
import UploadImage from '../../components/upLoadImage/UpLoadImage';

function NewFillAllInfor() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const info: InfoType = useAppSelector((state) => state.info);

    const [form, setForm] = useState<InfoType>(info);
    const items: Array<'1억' | '3억' | '5억'> = ['1억', '3억', '5억'];
    const [item, setItem] = useState<'1억' | '3억' | '5억'>(items[0]);

    const handleChange = (key: keyof InfoType, value: string | number) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        setForm((prev) => ({ ...prev, fireInsurance: item }));
    }, [item]);

    const allChecked: boolean = useMemo(() => {
        const validate =
            validateAmountField(form) &&
            validateBusinessField(form) &&
            validatePersonalField(form);
        if (form.equip == '설치되어 있습니다.') {
            return validate && info.image != null;
        }
        return validate;
    }, [form, info]);

    const handleSubmit = async () => {
        if (allChecked) {
            await dispatch(updateInfo({ ...form, image: info.image }));
            navigate('/insurance-infor');
        }
    };

    return (
        <div className="container container-page" id="container">
            <section className="section">
                <div className="form-wrap">
                    <PersonalInputs form={form} handleChange={handleChange} />
                    <h2 className="sect-title">건물/주택 정보</h2>
                    <BusinessInputs form={form} handleChange={handleChange} />
                    <div className="form-list">
                        <strong className="form-title">보험 시작일</strong>
                        <div className="form-cont readonly">2024.04.14</div>
                    </div>

                    <div className="form-list">
                        <strong className="form-title">보험 종료일</strong>
                        <div className="form-cont readonly">2024.04.14</div>
                    </div>
                </div>
                <div className="form-list mb35">
                    <UploadImage />
                </div>
                <Question<'1억' | '3억' | '5억'>
                    title="화재보험 가입금액을 선택해 주세요."
                    item={item}
                    items={items}
                    setItem={setItem}
                />
                <InsuranceAmount form={form} handleChange={handleChange} />
                <div className="btn-wrap">
                    <button
                        type="button"
                        className="btn btn--square"
                        onClick={handleSubmit}
                        disabled={!allChecked}
                    >
                        수정
                    </button>
                </div>
            </section>
        </div>
    );
}

export default NewFillAllInfor;
