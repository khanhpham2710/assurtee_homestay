import React, { useEffect, useState } from 'react';
import { updateInfo, InfoType } from '../../utils/redux/infoSlice';
import PersonalInputs from '../../components/Inputs/PersonalInputs';
import BusinessInputs from '../../components/Inputs/BusinessInputs';
import DateInputs from '../../components/Inputs/DateInputs';
import Question from '../../components/Questions/Question';
import InsuranceAmount from '../../components/FilledInsuranceAmount/InsuranceAmount';
import {
    validateAmountField,
    validateBusinessField,
    validatePersonalField,
} from '../../utils/validation/validatefields';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';

function FillAllInfor({
    setOpen,
}: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const dispatch = useAppDispatch();
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

    const allChecked: boolean =
        validateAmountField(form) &&
        validateBusinessField(form) &&
        validatePersonalField(form);

    const handleSubmit = async () => {
        if (allChecked) {
            await dispatch(updateInfo(form));
            setOpen(false);
        }
    };

    return (
        <div
            style={{
                marginTop: '8px',
                padding: '0 24px',
            }}
            className="dflex_center flexColumn_item"
        >
            <PersonalInputs form={form} handleChange={handleChange} />
            <p
                className="titleMedium"
                style={{
                    textAlign: 'left',
                    marginTop: '20px',
                    marginBottom: '28px',
                }}
            >
                건물/주택 정보
            </p>

            <BusinessInputs form={form} handleChange={handleChange} />
            <DateInputs />
            <Question<'1억' | '3억' | '5억'>
                title="화재보험 가입금액을 선택해 주세요."
                item={item}
                items={items}
                setItem={setItem}
            />
            <InsuranceAmount form={form} handleChange={handleChange} />
            <section style={{ marginTop: '20px', marginBottom: '40px' }}>
                <button
                    className={allChecked ? 'button2 active' : 'button2'}
                    onClick={handleSubmit}
                >
                    수정
                </button>
            </section>
        </div>
    );
}

export default FillAllInfor;
