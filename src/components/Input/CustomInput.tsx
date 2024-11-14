import { useState } from 'react';
import { numberOnly } from '../../utils/validation/number';

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
