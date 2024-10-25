import React, { useState } from 'react';
import { CustomInput } from '.';
import MyDrawer from '../MyDrawer/MyDrawer';
import { BusinessType, InsuranceAmountType } from '../../utils/redux/infoSlice';
import images from '../../assets/images';

type InputProps = {
    variable: keyof BusinessType | keyof InsuranceAmountType;
    value: string;
    placeholder?: string;
    handleChange: (
        key: keyof BusinessType | keyof InsuranceAmountType,
        value: string
    ) => void;
    items: string[];
};

const OptionInput: React.FC<InputProps> = ({
    variable,
    value,
    placeholder,
    handleChange,
    items,
}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div onClick={() => setOpen(true)} className="dflex_center">
                <CustomInput
                    id={variable}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    readOnly
                    autoComplete="off"
                />
                <img src={images.KeyDown} alt="Toggle" />
            </div>
            <MyDrawer
                open={open}
                setOpen={setOpen}
                items={items}
                handleChange={handleChange}
                variable={variable}
            />
        </>
    );
};

export default OptionInput;
