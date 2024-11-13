import NewCustomInput from '../Input/CustomInput';
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

function TextArea({
    value,
    key,
    handleChange,
    placeholder,
}: {
    value: string;
    key: keyof BusinessType;
    handleChange: (key: keyof BusinessType, value: string) => void;
    placeholder?: string;
}) {
    return (
        <TextField
            multiline
            fullWidth
            placeholder={placeholder}
            onChange={(e) => handleChange(key, e.target.value)}
            variant="standard"
            value={value}
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
    );
}

function BusinessInputs({ form, handleChange, style }: InputsProps) {
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
            <NewCustomInput<BusinessType>
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
                        <TextArea
                            value={form.address}
                            key="address"
                            handleChange={handleChange}
                            placeholder="주소를 입력해 주세요."
                        />
                        <PostCode handleChange={handleChange} />
                    </div>
                    <div className="form-cont">
                        <div className="form-item">
                            <TextArea
                                value={form.extra}
                                key="extra"
                                handleChange={handleChange}
                                placeholder="상세주소 입력(건물명, 동/호수, 단독주택 등)"
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
        </form>
    );
}

export default BusinessInputs;
