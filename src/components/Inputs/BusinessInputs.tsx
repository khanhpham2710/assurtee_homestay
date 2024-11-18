import CustomInput from '../Input/CustomInput';
import OptionInput from '../Input/OptionInput';
import { handleBusinessNumber } from '../../utils/validation/number';
import { BusinessType } from '../../utils/models/InfoType';
import { PostCode } from '../SearchPopUp/SearchPopUp';
import React, { CSSProperties, useEffect, useState } from 'react';
import CustomTextField from '../Input/TextFiled';

type InputsProps = {
    form: BusinessType;
    handleChange: (key: keyof BusinessType, value: string) => void;
    style?: CSSProperties;
};

function BusinessInputs({ form, handleChange }: InputsProps) {
    const [address, setAddress] = useState<string>(form.address);
    useEffect(() => {
        handleChange('address', address);
    }, [address]);

    return (
        <>
            <div className="form-list">
                <strong className="form-title">구분</strong>
                <OptionInput<BusinessType>
                    variable="company"
                    value={form.company}
                    placeholder="개인/법인을 선택해 주세요."
                    handleChange={handleChange}
                    items={['개인', '법인']}
                    title="개인/법인을 선택해 주세요."
                />
            </div>
            <div className="form-list">
                <strong className="form-title">등록번호</strong>
                <div className="form-cont">
                    <div className="form-item">
                        <input
                            type="text"
                            className="txt-input"
                            placeholder="사업자등록번호를 입력해 주세요."
                            maxLength={12}
                            value={form.businessNumber}
                            onChange={(e) =>
                                handleChange(
                                    'businessNumber',
                                    handleBusinessNumber(e, form.businessNumber)
                                )
                            }
                        />
                    </div>
                </div>
            </div>
            <CustomInput<BusinessType>
                value={form.businessName}
                placeholder="상호명 또는 법인명을 입력해 주세요."
                title="상호(법인)명"
                handleChange={handleChange}
                variable="businessName"
            />
            <div className="form-list">
                <strong className="form-title">사업장 소재지</strong>
                <div className="form-item">
                    <div className="form-cont">
                        <CustomTextField
                            id="address"
                            placeholder="주소를 입력해 주세요."
                            onChange={(e) =>
                                handleChange('address', e.target.value)
                            }
                            value={form.address}
                        />
                        <PostCode setAddress={setAddress} />
                    </div>
                    <div className="form-cont">
                        <div className="form-item">
                            <CustomTextField
                                placeholder="추가 주소를 입력해 주세요."
                                onChange={(e) =>
                                    handleChange('extra', e.target.value)
                                }
                                value={form.extra}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-list">
                <strong className="form-title">한옥 여부</strong>
                <OptionInput<BusinessType>
                    variable="building"
                    placeholder="해당 건물이 한옥인가요?"
                    value={form.building}
                    handleChange={handleChange}
                    title="예/아니요 선택해 주세요."
                    items={['예', '아니요']}
                />
            </div>
            <div className="form-list">
                <strong className="form-title">스프링클러 설치 여부</strong>
                <OptionInput<BusinessType>
                    variable="equip"
                    value={form.equip}
                    placeholder="스프링클러 설치 유무를 선택해 주세요."
                    handleChange={handleChange}
                    items={['설치되어 있습니다.', '설치되어 있지 않습니다.']}
                    title="스프링클러 유무를 선택해 주세요."
                />
            </div>
        </>
    );
}

export default BusinessInputs;
