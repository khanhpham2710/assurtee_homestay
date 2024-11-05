import React, { useEffect, useMemo, useState } from 'react';
import { updateInfo } from '../../utils/redux/infoSlice';
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
import { InfoType } from '../../utils/models/InfoType';

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

    const allChecked: boolean = useMemo(() => {
        return (
            validateAmountField(form) &&
            validateBusinessField(form) &&
            validatePersonalField(form)
        );
    }, [form]);

    const handleSubmit = async () => {
        if (allChecked) {
            await dispatch(updateInfo(form));
            setOpen(false);
        }
    };

    return (
        <div
            style={{
                marginTop: 8,
                padding: '0 24px',
            }}
            className="dflex_center flexColumn_item"
        >
            <PersonalInputs form={form} handleChange={handleChange} />
            <p
                className="title-22"
                style={{
                    textAlign: 'left',
                    marginTop: 20,
                    marginBottom: 28,
                }}
            >
                건물/주택 정보
            </p>

            <BusinessInputs form={form} handleChange={handleChange} />
            <DateInputs style={{ marginTop: 36, marginBottom: 24 }} />
            <Question<'1억' | '3억' | '5억'>
                title="화재보험 가입금액을 선택해 주세요."
                item={item}
                items={items}
                setItem={setItem}
                style={{ marginBottom: 30 }}
            />
            <InsuranceAmount form={form} handleChange={handleChange} />
            <section style={{ marginTop: 20, marginBottom: 40 }}>
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
