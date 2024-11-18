import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { PersonalInfoType } from '../../utils/models/InfoType';
import { updateInfo } from '../../utils/redux/infoSlice';
import { validatePersonalInfoField } from '../../utils/validation/validatefields';
import PersonalInfoInputs from '../../components/Inputs/PersonalInfoInputs';

function FilledBossInfor() {
    const info = useAppSelector((state) => state.info);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [form, setForm1] = useState<PersonalInfoType>(info);

    const handleChange = (key: keyof PersonalInfoType, value: string) => {
        setForm1((prev) => ({ ...prev, [key]: value }));
    };

    const allChecked = useMemo(() => validatePersonalInfoField(form), [form]);

    const handleSubmit = async () => {
        if (allChecked) {
            dispatch(updateInfo(form));
            navigate('/options');
        }
    };

    return (
        <>
            <div
                className="container container-page container-fx"
                id="container"
            >
                <section className="section">
                    <h2 className="sect-title">정보를 입력해 주세요.</h2>
                    <PersonalInfoInputs
                        form={form}
                        handleChange={handleChange}
                    />
                </section>
            </div>
            <div className="btm-btns btm-fixed">
                <div className="btn-wrap">
                    <button
                        type="button"
                        className={allChecked ? 'btn active' : 'btn'}
                        disabled={!allChecked}
                        onClick={handleSubmit}
                        style={{ borderRadius: 25 }}
                    >
                        주택 정보 입력
                    </button>
                </div>
            </div>
        </>
    );
}

export default FilledBossInfor;
