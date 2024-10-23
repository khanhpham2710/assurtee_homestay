import React from 'react';
import styled from 'styled-components';

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
    setContractor: React.Dispatch<React.SetStateAction<string>>;
    dob: string;
    setDob: React.Dispatch<React.SetStateAction<string>>;
    registrationNumber: string;
    setRegistrationNumber: React.Dispatch<React.SetStateAction<string>>;
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
};

function Inputs({
    contractor,
    setContractor,
    dob,
    setDob,
    registrationNumber,
    setRegistrationNumber,
    phoneNumber,
    setPhoneNumber,
}: InputsProps) {
    const numberOnly = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setter(value);
        }
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
                    onChange={(e) => setContractor(e.target.value)}
                />
            </InputSection>

            <InputSection>
                <label className="title_label" htmlFor="id-number">
                    주민등록번호
                </label>
                <section className="dflex_center">
                    <CustomInput
                        id="id-number"
                        placeholder="생년월일6자리"
                        maxLength={6}
                        value={dob}
                        onChange={(e) => numberOnly(e, setDob)}
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
                        maxLength={6}
                        value={registrationNumber}
                        onChange={(e) => numberOnly(e, setRegistrationNumber)}
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
                    value={phoneNumber}
                    onChange={(e) => numberOnly(e, setPhoneNumber)}
                />
            </InputSection>
        </form>
    );
}

export default Inputs;
