import { CustomInput, InputSection } from '../Input/CustomInput';
import { numberOnly } from '../../utils/validation/number';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { PersonalType } from '../../utils/models/InfoType';
import OptionInput from '../Input/OptionInput';

const RegistrationInput = styled(CustomInput)`
    font-size: 50px;
    letter-spacing: -25px;
    caret-color: transparent;
    padding-top: 5px;

    &::-ms-reveal,
    ::-ms-clear {
        display: none;
    }
`;

type InputsProps = {
    form: PersonalType;
    handleChange: (key: keyof PersonalType, value: string) => void;
    style?: CSSProperties;
};

function PersonalInputs({ form, handleChange, style }: InputsProps) {
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
        <form className="dflex-column" style={{ ...style, width: '100%' }}>
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
                    <div
                        className="dflex_center"
                        style={{ height: '50px', width: '10px' }}
                    >
                        <div
                            style={{
                                height: '2px',
                                width: '13.5px',
                                backgroundColor: '#000',
                            }}
                        ></div>
                    </div>
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
            <InputSection>
                <label className="title_label" htmlFor="email">
                    이메일
                </label>
                <CustomInput
                    id="email"
                    placeholder="이메일을 입력해 주세요."
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    autoComplete="off"
                />
            </InputSection>
            <InputSection>
                <OptionInput<PersonalType>
                    variable="delivery"
                    handleChange={handleChange}
                    items={[
                        '이메일 선택1',
                        '이메일 선택2',
                        '이메일 선택3',
                        '직접입력',
                    ]}
                    value={form.delivery}
                    title="이메일을 선택해 주세요."
                />
            </InputSection>
        </form>
    );
}

export default PersonalInputs;
