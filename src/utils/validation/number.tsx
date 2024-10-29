import React from 'react';

export const numberOnly = (e: React.ChangeEvent<HTMLInputElement>): string => {
    const value = e.target.value;
    if (/^[\d]*$/.test(value)) {
        return value;
    }
    return '';
};

export function handleBusinessNumber(
    e: React.FormEvent<HTMLInputElement>,
    text: string
) {
    const inputValue = e.currentTarget.value;

    if (inputValue.length < text.length) {
        return inputValue;
    }

    const lastChar = inputValue[inputValue.length - 1];
    if (/^\d$/.test(lastChar)) {
        let newText = inputValue;

        if (newText.length === 3 || newText.length === 6) {
            newText += '-';
        }
        return newText;
    }
    return '';
}
