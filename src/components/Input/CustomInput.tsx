import { useState } from 'react';
import styled from 'styled-components';
import { numberOnly } from '../../utils/validation/number';

export const InputSection = styled.section`
    margin-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    transition: border-color 0.3s ease;

    &:focus-within {
        border-bottom: 1px solid var(--primary);
    }
`;

export const CustomInput = styled.input`
    height: 50px;
    width: 100%;
    font-family: 'AppleSDGothicNeoH';
    font-size: 16px;
    line-height: 1.75;
    text-align: left;
    color: #000;
    background-color: transparent;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #cfcfcf;
    }
`;

export const BlueCustomInput = styled(CustomInput)`
    color: #9faae5;
`;

type InputProps<T> = {
    variable: keyof T;
    value: string;
    placeholder?: string;
    handleChange: (key: keyof T, value: string) => void;
    title?: string;
    maxLength?: number;
    number?: boolean;
};

function NewCustomInput<T>({
    value,
    variable,
    placeholder,
    handleChange,
    title,
    maxLength,
    number = false,
}: InputProps<T>) {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleFocus = (fieldName: string) => setFocusedField(fieldName);
    const handleBlur = () => setFocusedField(null);

    return (
        <div className="form-list">
            <strong className="form-title">{title}</strong>
            <div
                className={`form-cont ${focusedField === (variable as string) ? 'is-input' : ''}`}
            >
                <div className="form-item">
                    <input
                        type="text"
                        className="txt-input"
                        maxLength={maxLength}
                        placeholder={placeholder}
                        value={value}
                        onFocus={() => handleFocus(variable as string)}
                        onBlur={handleBlur}
                        onChange={(e) => {
                            if (number) {
                                handleChange(variable, numberOnly(e));
                            } else {
                                handleChange(variable, e.target.value);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default NewCustomInput;
