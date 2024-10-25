import React, { useState } from 'react';
import { CustomInput, InputSection, numberOnly } from '../Inputs';
import OptionInput from '../Inputs/OptionInput';
import { InsuranceAmountType } from '../../utils/redux/infoSlice';

const initialFormState: InsuranceAmountType = {
    construction: 3,
    facilities: 2,
    inventory: 5,
    housingType: '단독',
    area: 79,
};

const InsuranceAmount: React.FC = () => {
    const [form, setForm] = useState<InsuranceAmountType>(initialFormState);

    const handleChange = (key: keyof InsuranceAmountType, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <form>
            <InputSection>
                <label className="title_label">주택 유형</label>
                <OptionInput
                    items={['단독', 'test']}
                    value={form.housingType}
                    handleChange={handleChange}
                    variable="housingType"
                />
            </InputSection>
            <InputSection>
                <label className="title_label">공급면적(전용면적이 아님)</label>
                <CustomInput
                    maxLength={10}
                    value={form.area.toString()}
                    onChange={(e) => handleChange('area', numberOnly(e))}
                />
            </InputSection>
        </form>
    );
};

export default InsuranceAmount;
