import React from 'react';
import styled from 'styled-components';

export const InputSection = styled.section`
    margin-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    transition: border-color 0.3s ease;

    &:focus-within {
        border-bottom: 1px solid #ea3062;
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
    background-color: #f6f7f9;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #cfcfcf;
    }

    &::autoComplete="off"
`;

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
