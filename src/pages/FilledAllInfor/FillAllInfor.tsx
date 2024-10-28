import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInfo, InfoType } from '../../utils/redux/infoSlice';
import { RootState } from '../../utils/redux/store';
import PersonalInputs from '../../components/Inputs/PersonalInputs';
import BusinessInputs from '../../components/Inputs/BusinessInputs';
import DateInputs from '../../components/Inputs/DateInputs';
import Question from '../../components/Questions/Question';
import InsuranceAmount from '../../components/FilledInsuranceAmount/InsuranceAmount';

function FillAllInfor({
    setOpen,
}: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const dispatch = useDispatch();
    const info: InfoType = useSelector((state: RootState) => state.info);

    const [form, setForm] = useState<InfoType>(info);
    const items: Array<'1억' | '3억' | '5억'> = ['1억', '3억', '5억'];
    const [item, setItem] = useState<'1억' | '3억' | '5억'>(items[0]);

    const handleChange = (key: keyof InfoType, value: string | number) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        setForm((prev) => ({ ...prev, fireInsurance: item }));
    }, [item]);

    const validateFields = (): boolean => {
        const {
            contractor,
            dob,
            registrationNumber,
            phoneNumber,
            businessNumber,
            businessName,
            address,
            extra,
            hanok,
        } = form;

        if (
            !contractor ||
            !dob ||
            !registrationNumber ||
            !phoneNumber ||
            !businessNumber ||
            !businessName ||
            !address ||
            !extra ||
            !hanok
        )
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

        if (!/\d{3}-\d{2}-\d{5}/.test(businessNumber)) {
            return false;
        }

        return true;
    };

    const allChecked: boolean = validateFields();

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
                    className={
                        allChecked
                            ? 'button-submit-all active'
                            : 'button-submit-all'
                    }
                    onClick={handleSubmit}
                >
                    수정
                </button>
            </section>
        </div>
    );
}

export default FillAllInfor;
