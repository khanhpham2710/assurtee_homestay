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
    e: React.FormEvent<HTMLInputElement>,
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
) {
    const inputEvent = e.nativeEvent as InputEvent;

    if (inputEvent.inputType === 'deleteContentBackward') {
        setText(text.slice(0, -1));
        return;
    }

    let newText = text + inputEvent.data;
    if (newText.length == 3 || newText.length == 6) {
        newText = newText += '-';
    }
    setText(newText);
}
