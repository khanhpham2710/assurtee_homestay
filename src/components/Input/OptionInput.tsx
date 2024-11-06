import { useState } from 'react';
import { CustomInput } from './CustomInput';
import MyDrawer from '../MyDrawer/MyDrawer';
import images from '../../assets/images';

type InputProps<T> = {
    variable: keyof T;
    value: string;
    placeholder?: string;
    handleChange: (key: keyof T, value: string) => void;
    items: [string, string];
    title: string;
};

function OptionInput<T>({
    variable,
    value,
    placeholder,
    handleChange,
    items,
    title,
}: InputProps<T>) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div onClick={() => setOpen(true)} className="dflex_center">
                <CustomInput
                    id={variable as string}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    readOnly
                    autoComplete="off"
                />
                <img src={images.KeyDown} alt="Toggle" />
            </div>
            <MyDrawer<T>
                open={open}
                setOpen={setOpen}
                items={items}
                handleChange={handleChange}
                variable={variable}
                title={title}
            />
        </>
    );
}

export default OptionInput;
