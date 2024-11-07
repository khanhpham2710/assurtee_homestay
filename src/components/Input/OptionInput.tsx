import React, { useState } from 'react';
import { CustomInput } from './CustomInput';
import images from '../../assets/images';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

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

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setOpen((prev) => !prev);
    };

    const handleClick = (value: string) => {
        handleChange(variable, value);
        setOpen(false);
    };

    const list = () => (
        <div role="presentation">
            <div
                style={{
                    background: '#fff',
                    padding: '23px 30px 19px 24px',
                    borderBottom: '1px solid #ededed',
                }}
                className="dflex_spacebetween"
            >
                <p className="title_drawer">{title}</p>
                <img
                    src={images.CloseButton}
                    onClick={toggleDrawer}
                    alt="Close"
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <div
                style={{ height: 133, padding: '24px 14px 24px 23px' }}
                className="dflex-column"
            >
                {items.map((item, index) => (
                    <button
                        key={index}
                        style={{
                            height: '50%',
                            fontFamily: 'AppleSDGothicNeoM',
                            fontSize: '16px',
                            textAlign: 'left',
                            color: '#000',
                            backgroundColor: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );

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
                <img src={images.KeyDown} style={{ cursor: 'pointer' }} />
            </div>

            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        width: '100%',
                        maxWidth: 620,
                        margin: '0 auto',
                    },
                    zIndex: 2000,
                    transform: {
                        sm: 'translateX(-8px)',
                        xs: 'translateX(0px)',
                    },
                }}
            >
                {list()}
            </SwipeableDrawer>
        </>
    );
}

export default OptionInput;
