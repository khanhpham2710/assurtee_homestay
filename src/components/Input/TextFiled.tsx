import { TextField } from '@mui/material';
import React from 'react';
import { CSSProperties } from 'styled-components';

type CustomTextFieldProps = {
    id?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
};

export default function CustomTextField({
    id,
    placeholder,
    value,
    onChange,
    style,
}: CustomTextFieldProps) {
    return (
        <TextField
            id={id}
            multiline
            fullWidth
            placeholder={placeholder}
            onChange={onChange}
            variant="standard"
            sx={{
                backgroundColor: 'transparent',
                outline: 'none',
                width: '100%',
                '& .MuiInputBase-input::placeholder': {
                    color: '#cfcfcf',
                    opacity: 1,
                },
                ...style,
            }}
            slotProps={{
                input: {
                    disableUnderline: true,
                    style: {
                        fontFamily:
                            'Apple SD Gothic Neo, Pretendard, sans-serif',
                        fontSize: 'inherit',
                        lineHeight: 'inherit',
                        fontWeight: 900,
                        color: '#000',
                        padding: 0,
                    },
                },
            }}
            value={value}
        />
    );
}
