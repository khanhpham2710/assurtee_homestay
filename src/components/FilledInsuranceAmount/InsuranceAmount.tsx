import React, { useState } from 'react';
import {
    CustomInput,
    InputSection,
    numberOnly,
} from '../../utils/styled-components/inputs';
import OptionInput from '../Inputs/OptionInput';
import { InsuranceAmountType } from '../../utils/redux/infoSlice';
import Slider from '@mui/material/Slider';

const initialFormState: InsuranceAmountType = {
    construction: 3,
    facilities: 2,
    inventory: 5,
    housingType: '단독',
    area: 79,
};

function InsuranceAmount() {
    const [form, setForm] = useState<InsuranceAmountType>(initialFormState);

    const handleChange = (
        key: keyof InsuranceAmountType,
        value: string | number
    ) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSlider = (event: Event, value: number): void => {
        handleChange('construction', value);
    };

    return (
        <form>
            <Slider
                defaultValue={3}
                step={1}
                min={1}
                max={5}
                value={form.construction}
                onChange={handleSlider}
                sx={{
                    color: '#ea3062',
                    boxShadow: 'none',
                    '& .MuiSlider-thumb': {
                        height: 18,
                        width: 18,
                        backgroundColor: '#ea3062',
                        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                            boxShadow: 'none',
                            outline: 'none',
                            '@media (hover: none)': {
                                boxShadow: 'none',
                            },
                        },
                        '&:before': {
                            display: 'none',
                        },
                    },
                    '& .MuiSlider-track': {
                        border: 'none',
                        height: 4,
                    },
                    '& .MuiSlider-rail': {
                        opacity: 0.5,
                        backgroundColor: '#e0e0e0',
                    },
                }}
            />
            <InputSection>
                <label className="title_label">주택 유형</label>
                <OptionInput<InsuranceAmountType>
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
}

export default InsuranceAmount;
