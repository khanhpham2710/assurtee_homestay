import { useState } from 'react';
import { CustomInput } from '.';
import MyDrawer from '../MyDrawer/MyDrawer';
import { BusinessType } from '../../utils/redux/infoSlice';
import images from '../../assets/images';

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
            <div onClick={() => setOpen(true)} className="dflex_center">
                <CustomInput
                    id={variable}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    readOnly
                    autoComplete="off"
                />
                <img src={images.KeyDown} />
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
}

export default OptionInput;
