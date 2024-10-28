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
