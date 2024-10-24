import { useState } from 'react';
import { CustomInput } from '.';
import MyDrawer from '../MyDrawer/MyDrawer';
import { BusinessType } from '../../utils/redux/infoSlice';

type InputProps = {
    variable: keyof BusinessType;
    value: string;
    placeholder: string;
    handleChange: (key: keyof BusinessType, value: string) => void;
    items: string[];
};

function OptionInput({
    variable,
    value,
    placeholder,
    handleChange,
    items,
}: InputProps) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <CustomInput
                id={variable}
                type="text"
                value={value}
                placeholder={placeholder}
                onClick={() => setOpen(true)}
                readOnly
                autoComplete="off"
            />
            <MyDrawer
                open={open}
                setOpen={setOpen}
                items={items}
                handleChange={handleChange}
                variable={variable}
            />
        </>
    );
}

export default OptionInput;
