import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function FilledData() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ alignItems: 'baseline' }}
        >
            <TextField
                id="outlined-number"
                fullWidth
                label="계약자"
                type="input"
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                    input: {
                        classes: {
                            root: 'custom-root',
                            focused: 'custom-focused',
                        },
                        disableUnderline: true,
                    },
                }}
                variant="standard"
                className="textfiledInput"
                placeholder="이름을 입력해 주세요."
            />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    background: 'pink',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                    '&:hover': {
                        borderBottom: '2px solid #ea3062',
                    },
                }}
            >
                <TextField
                    id="outlined-number"
                    label="주민등록번호"
                    type="input"
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                        input: { disableUnderline: true },
                    }}
                    variant="standard"
                    className="textfiledInput"
                    placeholder="생년월일6자리"
                    sx={{
                        flex: 1,
                        minWidth: '120px',
                        maxWidth: 'calc(70% - 8px)',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        background: 'red',
                    }}
                >
                    <button
                        type="button"
                        onClick={handleClickShowPassword}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            alignSelf: 'flex-end',
                        }}
                    >
                        -
                    </button>
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        id="outlined-number"
                        label="주민등록번호"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                            input: {
                                disableUnderline: true,
                                inputMode: 'numeric',
                            },
                        }}
                        inputProps={{
                            maxLength: 7, // Limit to 7 digits
                            inputMode: 'numeric', // Ensure numeric input on mobile
                            pattern: '[0-9]*', // Ensure digits only
                            style: {
                                WebkitTextSecurity: !showPassword
                                    ? 'disc'
                                    : 'none',
                            } as React.CSSProperties,
                        }}
                        variant="standard"
                        className="textfiledInput label2"
                        placeholder="- •••••••"
                        sx={{
                            flex: 1,
                            minWidth: '120px',
                            maxWidth: 'calc(30% - 8px)',
                            '& input': {
                                fontSize: '1.5rem',
                                letterSpacing: '0.3rem',
                                alignItems: 'center',
                            },
                        }}
                    />
                </Box>
            </Box>
            <TextField
                id="outlined-number"
                fullWidth
                label="휴대폰번호"
                type="input"
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                    input: {
                        classes: {
                            root: 'custom-root',
                            focused: 'custom-focused',
                        },
                        disableUnderline: true,
                    },
                }}
                variant="standard"
                className="textfiledInput"
                placeholder='"-" 없이 입력하세요.'
            />
        </Box>
    );
}
