import React from 'react';
import styled from 'styled-components';
import { PersonalType } from '../../utils/redux/infoSlice';

const CustomInput = styled.input`
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
`;

const PasswordInput = styled(CustomInput)`
    font-size: 60px;
    letter-spacing: -30px;
    caret-color: transparent;

    &::-ms-reveal,
    ::-ms-clear {
        display: none;
    }
`;

const InputSection = styled.section`
    margin-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    transition: border-color 0.3s ease;

    &:focus-within {
        border-bottom: 1px solid #ea3062;
    }
`;

type InputsProps = {
    contractor: string;
    dob: string;
    registrationNumber: string;
    phoneNumber: string;
    handleChange: (key: keyof PersonalType, value: string) => void;
};

function Inputs({
    contractor,
    dob,
    registrationNumber,
    phoneNumber,
    handleChange,
}: InputsProps) {
    const numberOnly = (e: React.ChangeEvent<HTMLInputElement>): string => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            return value;
        }
        return '';
    };

    return (
        <form className="dflex-column">
            <InputSection>
                <label className="title_label" htmlFor="contractor">
                    계약자
                </label>
                <CustomInput
                    id="contractor"
                    type="text"
                    value={contractor}
                    placeholder="이름을 입력해 주세요."
                    onChange={(e) => handleChange('contractor', e.target.value)}
                />
            </InputSection>

            <InputSection>
                <label className="title_label" htmlFor="dob">
                    주민등록번호
                </label>
                <section className="dflex_center">
                    <CustomInput
                        id="dob"
                        placeholder="생년월일6자리"
                        maxLength={6}
                        value={dob}
                        onChange={(e) => handleChange('dob', numberOnly(e))}
                    />
                    <p
                        style={{
                            fontSize: '50px',
                            lineHeight: '1',
                            transform: 'translateY(-15%)',
                        }}
                    >
                        -
                    </p>
                    <PasswordInput
                        placeholder="•••••••"
                        type="password"
                        maxLength={7}
                        value={registrationNumber}
                        onChange={(e) =>
                            handleChange('registrationNumber', numberOnly(e))
                        }
                    />
                </section>
            </InputSection>

            <InputSection>
                <label className="title_label" htmlFor="phone-number">
                    휴대폰번호
                </label>
                <CustomInput
                    id="phone-number"
                    placeholder='"-" 없이 입력하세요.'
                    maxLength={11}
                    value={phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', numberOnly(e))}
                />
            </InputSection>
        </form>
    );
}

export default Inputs;
