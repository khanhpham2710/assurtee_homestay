import { CustomInput, InputSection } from '../Input/CustomInput';
import { Link } from 'react-router-dom';
import OptionInput from '../Input/OptionInput';
import { handleBusinessNumber } from '../../utils/validation/number';
import { BusinessType } from '../../utils/models/InfoType';
import { Box, TextField } from '@mui/material';
import { usePostcodePopup } from '../../components/SearchPopUp/SearchPopUp';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import { RootState } from '../../utils/redux/store';
import { useEffect } from 'react';
type InputsProps = {
    form: BusinessType;
    handleChange: (key: keyof BusinessType, value: string) => void;
};

function BusinessInputs({ form, handleChange }: InputsProps) {
    const { address } = useAppSelector((state: RootState) => state.info);

    const { handleClick } = usePostcodePopup({ handleChange });

    return (
        <form className="dflex-column" style={{ width: '100%' }}>
            <InputSection>
                <label className="title_label" htmlFor="division">
                    구분
                </label>
                <OptionInput<BusinessType>
                    variable="division"
                    value={form.division}
                    placeholder="개인/법인을 선택해 주세요."
                    handleChange={handleChange}
                    items={['개인', '법인']}
                    title="개인/법인을 선택해 주세요."
                />
            </InputSection>
            <InputSection>
                <label className="title_label" htmlFor="businessNumber">
                    등록번호
                </label>
                <CustomInput
                    id="businessNumber"
                    maxLength={12}
                    placeholder="사업자등록번호를 입력해 주세요."
                    value={form.businessNumber}
                    onChange={(e) =>
                        handleChange(
                            'businessNumber',
                            handleBusinessNumber(e, form.businessNumber)
                        )
                    }
                    autoComplete="off"
                />
            </InputSection>
            <InputSection>
                <label className="title_label" htmlFor="businessName">
                    상호(법인)명
                </label>
                <CustomInput
                    id="businessName"
                    placeholder="상호명 또는 법인명을 입력해 주세요."
                    maxLength={11}
                    value={form.businessName}
                    onChange={(e) =>
                        handleChange('businessName', e.target.value)
                    }
                    autoComplete="off"
                />
            </InputSection>
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

                    <Box
                        // to="/search-address"
                        style={{
                            minHeight: '50px',
                            textDecoration: 'none',
                        }}
                        className="dflex_center"
                    >
                        <button
                            onClick={handleClick}
                            className="address-button"
                        >
                            주소검색
                        </button>
                    </Box>
                </section>
            </InputSection>
            <InputSection>
                <CustomInput
                    id="extra"
                    placeholder="상세주소 입력(건물명, 동/호수, 단독주택 등)"
                    value={form.extra}
                    onChange={(e) => handleChange('extra', e.target.value)}
                    autoComplete="off"
                />
            </InputSection>
            <InputSection>
                <label className="title_label" htmlFor="hanok">
                    한옥 여부
                </label>
                <OptionInput<BusinessType>
                    variable="hanok"
                    placeholder="해당 건물이 한옥인가요?"
                    value={form.hanok}
                    handleChange={handleChange}
                    title="예/아니요 선택해 주세요."
                    items={['예', '아니요']}
                />
            </InputSection>
            <InputSection>
                <label className="title_label" htmlFor="hanok">
                    한옥 여부
                </label>
                <OptionInput<BusinessType>
                    variable="sprinkler"
                    value={form.sprinkler}
                    handleChange={handleChange}
                    items={['설치되어 있습니다.', '설치되어 있지 않습니다.']}
                    title="스프링쿨러 유무를 선택해 주세요."
                />
            </InputSection>
        </form>
    );
}

export default BusinessInputs;
