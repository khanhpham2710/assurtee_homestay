import { useEffect, useState } from 'react';
import { PersonalInfoType } from '../../utils/models/InfoType';
import CustomInput from '../Input/CustomInput';
import OptionInput from '../Input/OptionInput';
import CustomTextField from '../Input/TextFiled';
import { PostCode } from '../SearchPopUp/SearchPopUp';

type InputsProps = {
    form: PersonalInfoType;
    handleChange: (key: keyof PersonalInfoType, value: string) => void;
};

function PersonalInfoInputs({ form, handleChange }: InputsProps) {
    const [homeAddress, setHomeAddress] = useState<string>(form.homeAddress);
    useEffect(() => {
        handleChange('homeAddress', homeAddress);
    }, [homeAddress]);

    return (
        <div className="form-wrap">
            <CustomInput<PersonalInfoType>
                title="상호"
                value={form.businessName}
                handleChange={handleChange}
                variable="businessName"
                placeholder="상호명 또는 법인명을 입력해 주세요."
            />
            <CustomInput<PersonalInfoType>
                title="성명"
                maxLength={12}
                value={form.name}
                handleChange={handleChange}
                variable="name"
                placeholder="이름을 입력해주세요"
            />
            <div className="form-list">
                <strong className="form-title">주소</strong>
                <div className="form-item">
                    <div className="form-cont">
                        <CustomTextField
                            id="address"
                            placeholder="주소를 입력해 주세요."
                            onChange={(e) =>
                                handleChange('homeAddress', e.target.value)
                            }
                            value={form.homeAddress}
                        />
                        <PostCode setAddress={setHomeAddress} />
                    </div>
                    <OptionInput<PersonalInfoType>
                        variable="homeExtra"
                        value={form.homeExtra}
                        placeholder="이메일 선택"
                        handleChange={handleChange}
                        items={[
                            '이메일 선택1',
                            '이메일 선택2',
                            '이메일 선택3',
                            '이메일 선택4',
                        ]}
                        title="건물(동)명을 선택해 주세요."
                        icon={false}
                    />
                </div>
            </div>
            <CustomInput<PersonalInfoType>
                title="고유번호"
                value={form.fullRegistrationNumber}
                handleChange={handleChange}
                variable="fullRegistrationNumber"
                placeholder="등록증 고유번호를 입력해 주세요.(숫자만 입력)"
                number
            />
            <p className="form-text">
                등록증 상단에 표시된 번호를 확인해 주세요.
                <span
                    className="tooltip-btn"
                    style={{
                        display: 'inline-block',
                        transform: 'translateX(4px)',
                    }}
                ></span>
            </p>
        </div>
    );
}

export default PersonalInfoInputs;
