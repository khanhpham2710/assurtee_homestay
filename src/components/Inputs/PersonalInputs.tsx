import React, { useState } from 'react';
import { numberOnly } from '../../utils/validation/number';
import { PersonalType } from '../../utils/models/InfoType';
import OptionInput from '../Input/OptionInput';
import NewCustomInput from '../Input/CustomInput';

type InputsProps = {
    form: PersonalType;
    handleChange: (key: keyof PersonalType, value: string) => void;
};

function PersonalInputs({ form, handleChange }: InputsProps) {
    const [focusedField, setFocusedField] = useState<string | null>(null);

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
        <div className="form-wrap">
            <NewCustomInput<PersonalType>
                title="계약자"
                value={form.contractor}
                handleChange={handleChange}
                variable="contractor"
                placeholder="이름을 입력해 주세요."
            />
            <div className="form-list">
                <strong className="form-title">주민등록번호</strong>
                <div
                    className={`form-cont flex-wrap ${
                        focusedField === 'dob' ||
                        focusedField === 'registration'
                            ? 'is-input'
                            : ''
                    }`}
                >
                    <div className="form-item">
                        <input
                            type="tel"
                            className="txt-input"
                            maxLength={6}
                            placeholder="생년월일 6자리"
                            value={form.dob}
                            onFocus={() => setFocusedField('dob')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => handleChange('dob', numberOnly(e))}
                        />
                    </div>
                    <span className="form-item dash"></span>
                    <div className="form-item">
                        <input
                            type="text"
                            className="txt-input first"
                            maxLength={7}
                            placeholder="●●●●●●"
                            onFocus={() => setFocusedField('registration')}
                            onBlur={() => setFocusedField(null)}
                            onChange={handleRegistrationInput}
                            value={'•'.repeat(form.registrationNumber.length)}
                        />
                    </div>
                </div>
            </div>
            <NewCustomInput<PersonalType>
                title="휴대폰번호"
                maxLength={12}
                value={form.phoneNumber}
                handleChange={handleChange}
                variable="phoneNumber"
                placeholder="'-' 없이 입력하세요."
                number
            />
            <NewCustomInput<PersonalType>
                title="이메일"
                value={form.phoneNumber}
                handleChange={handleChange}
                variable="mail"
                placeholder="이메일을 입력해 주세요."
                number
            />
            <div className="form-list">
                <OptionInput<PersonalType>
                    variable="email"
                    value={form.email}
                    placeholder="이메일 선택"
                    handleChange={handleChange}
                    items={[
                        '이메일 선택1',
                        '이메일 선택2',
                        '이메일 선택3',
                        '이메일 선택4',
                    ]}
                    title="이메일을 선택해 주세요."
                />
            </div>
        </div>
    );
}

export default PersonalInputs;
