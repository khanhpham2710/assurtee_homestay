import { BusinessType } from '../../utils/redux/infoSlice';
import {
    CustomInput,
    InputSection,
    numberAndLineOnly,
} from '../../utils/styled-components/inputs';
import { Link } from 'react-router-dom';
import OptionInput from './OptionInput';

type InputsProps = {
    form: BusinessType;
    handleChange: (key: keyof BusinessType, value: string) => void;
};

function BusinessInputs({ form, handleChange }: InputsProps) {
    return (
        <form className="dflex-column">
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
                        handleChange('businessNumber', numberAndLineOnly(e))
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
                <section className="dflex_center">
                    <CustomInput
                        id="address"
                        placeholder="주소를 입력해 주세요."
                        value={form.address}
                        onChange={(e) =>
                            handleChange('address', e.target.value)
                        }
                        autoComplete="off"
                    />
                    <Link to="/search-address">
                        <button className="address-button">주소검색</button>
                    </Link>
                </section>
            </InputSection>
            <InputSection>
                <CustomInput
                    id="extra"
                    placeholder="상세주소 입력(건물명, 동/호수, 단독주택 등)"
                    maxLength={11}
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
                    items={['예', '아니요']}
                />
            </InputSection>
        </form>
    );
}

export default BusinessInputs;
