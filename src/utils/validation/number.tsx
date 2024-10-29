import React from 'react';

export const numberOnly = (e: React.ChangeEvent<HTMLInputElement>): string => {
    const value = e.target.value;
    if (/^[\d]*$/.test(value)) {
        return value;
    }
    return '';
};

export const numberAndLineOnly = (
    e: React.ChangeEvent<HTMLInputElement>
): string => {
    const value = e.target.value;
    if (/^[\d-]*$/.test(value)) {
        return value;
    }
    return '';
};

export function handleBusinessNumber(
    e: React.KeyboardEvent<HTMLInputElement>,
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
) {
    e.preventDefault();

    if (e.key === 'Backspace') {
        const newText = text.slice(0, -1);
        setText(newText);
    } else if (/^[0-9]$/.test(e.key) && text.length <= 11) {
        if (text.length === 3 || text.length === 6) {
            const newText = text + '-' + e.key;
            setText(newText);
        } else {
            const newText = text + e.key;
            setText(newText);
        }
    }
}
