import { PersonalType } from '../../utils/redux/infoSlice';
import { CustomInput, InputSection } from '../Input/CustomInput';
import { numberOnly } from '../../utils/validation/number';
import React from 'react';
import styled from 'styled-components';

const RegistrationInput = styled(CustomInput)`
    font-size: 60px;
    letter-spacing: -30px;
    caret-color: transparent;
    &::-ms-reveal,
    ::-ms-clear {
        display: none;
    }
`;

type InputsProps = {
    form: PersonalType;
    handleChange: (key: keyof PersonalType, value: string) => void;
};

function PersonalInputs({ form, handleChange }: InputsProps) {
    function handleRegistrationInput(
        e: React.ChangeEvent<HTMLInputElement>
    ): void {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, '');

        const input = e.nativeEvent as InputEvent;
        const temp = form.registrationNumber;

        if (input.inputType === 'deleteContentBackward') {
            handleChange('registrationNumber', temp.slice(0, -1));
        } else if (numericValue.length <= 7) {
            handleChange('registrationNumber', temp + numericValue);
        }
    }

    return (
        <form className="dflex-column" style={{ width: '100%' }}>
            <InputSection>
                <label className="title_label" htmlFor="contractor">
                    계약자
                </label>
                <CustomInput
                    id="contractor"
                    type="text"
                    value={form.contractor}
                    placeholder="이름을 입력해 주세요."
                    onChange={(e) => handleChange('contractor', e.target.value)}
                    autoComplete="off"
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
                        value={form.dob}
                        onChange={(e) => handleChange('dob', numberOnly(e))}
                        autoComplete="off"
                    />
                    <p
                        style={{
                            fontSize: '60px',
                            lineHeight: '1',
                            transform: 'translateY(-15%)',
                        }}
                    >
                        -
                    </p>
                    <RegistrationInput
                        id="registrationNumber"
                        placeholder="•••••••"
                        maxLength={7}
                        value={'•'.repeat(form.registrationNumber.length)}
                        onChange={handleRegistrationInput}
                        autoComplete="off"
                    />
                </section>
            </InputSection>

            <InputSection>
                <label className="title_label" htmlFor="phoneNumber">
                    휴대폰번호
                </label>
                <CustomInput
                    id="phoneNumber"
                    placeholder='"-" 없이 입력하세요.'
                    maxLength={11}
                    value={form.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', numberOnly(e))}
                    autoComplete="off"
                />
            </InputSection>
        </form>
    );
}

export default PersonalInputs;
