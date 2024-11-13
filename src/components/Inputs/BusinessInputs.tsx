import React, { useState } from 'react';
import NewCustomInput, { InputSection } from '../Input/CustomInput';
import OptionInput from '../Input/OptionInput';
import { handleBusinessNumber } from '../../utils/validation/number';
import { BusinessType } from '../../utils/models/InfoType';
import { TextField } from '@mui/material';
import { PostCode } from '../SearchPopUp/SearchPopUp';
import { CSSProperties } from 'react';

type InputsProps = {
    form: BusinessType;
    handleChange: (key: keyof BusinessType, value: string) => void;
    style?: CSSProperties;
};

function BusinessInputs({ form, handleChange, style }: InputsProps) {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleFocus = (fieldName: string) => setFocusedField(fieldName);
    const handleBlur = () => setFocusedField(null);

    return (
        <form className="dflex-column" style={{ ...style, width: '100%' }}>
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
            <NewCustomInput<BusinessType>
                value={form.businessNumber}
                variable="businessNumber"
                placeholder="사업자등록번호를 입력해 주세요."
                handleChange={(e)=>handleBusinessNumber(e, form.businessNumber)}
                title="등록번호"
            />
            <div className="form-list">
                <strong className="form-title">상호(법인)명</strong>
                <div className="form-cont">
                    <div
                        className={`form-item ${focusedField === 'businessName' ? 'is-input' : ''}`}
                    >
                        <input
                            type="text"
                            className="txt-input"
                            placeholder="상호명 또는 법인명을 입력해 주세요."
                            maxLength={11}
                            value={form.businessName}
                            onFocus={() => handleFocus('businessName')}
                            onBlur={handleBlur}
                            onChange={(e) =>
                                handleChange('businessName', e.target.value)
                            }
                        />
                    </div>
                </div>
            </div>

            <InputSection>
                <label className="title_label" htmlFor="address">
                    사업장 소재지
                </label>
                <section
                    className="dflex_center"
                    style={{
                        gap: '19px',
                    }}
                >
                    <TextField
                        id="address"
                        multiline
                        fullWidth
                        placeholder="주소를 입력해 주세요."
                        onFocus={() => handleFocus('address')}
                        onBlur={handleBlur}
                        onChange={(e) =>
                            handleChange('address', e.target.value)
                        }
                        variant="standard"
                        sx={{
                            backgroundColor: 'transparent',
                            outline: 'none',
                            width: '100%',
                            '& .MuiInputBase-input::placeholder': {
                                color: '#cfcfcf',
                                opacity: 1,
                            },
                        }}
                        slotProps={{
                            input: {
                                disableUnderline: true,
                                style: {
                                    fontFamily: 'AppleSDGothicNeoH',
                                    fontSize: '16px',
                                    lineHeight: '1.75',
                                    color: '#000',
                                    padding: 0,
                                },
                            },
                        }}
                        value={form.address}
                    />

                    <div
                        style={{
                            minHeight: '50px',
                            textDecoration: 'none',
                        }}
                        className="dflex_center"
                    >
                        <PostCode handleChange={handleChange} />
                    </div>
                </section>
            </InputSection>
            <div className="form-cont">
                <TextField
                    id="extra"
                    multiline
                    placeholder="상세주소 입력(건물명, 동/호수, 단독주택 등)"
                    value={form.extra}
                    onFocus={() => handleFocus('extra')}
                    onBlur={handleBlur}
                    onChange={(e) => handleChange('extra', e.target.value)}
                    autoComplete="off"
                    variant="standard"
                    sx={{
                        backgroundColor: 'transparent',
                        outline: 'none',
                        width: '100%',
                        '& .MuiInputBase-input::placeholder': {
                            color: '#cfcfcf',
                            opacity: 1,
                        },
                    }}
                    slotProps={{
                        input: {
                            disableUnderline: true,
                            style: {
                                fontFamily: 'AppleSDGothicNeoH',
                                fontSize: '16px',
                                lineHeight: '1.75',
                                color: '#000',
                                padding: 0,
                            },
                        },
                    }}
                />
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
        </form>
    );
}

export default BusinessInputs;
