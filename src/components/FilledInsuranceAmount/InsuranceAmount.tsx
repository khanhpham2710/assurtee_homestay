import { CustomInput, InputSection } from '../Input/CustomInput';
import { numberOnly } from '../../utils/validation/number';
import OptionInput from '../Input/OptionInput';
import SliderInput from '../Input/SliderInput';
import { InsuranceAmountType } from '../../utils/models/InfoType';
import { CSSProperties } from 'react';

type PropsType = {
    form: InsuranceAmountType;
    handleChange: (
        key: keyof InsuranceAmountType,
        value: string | number
    ) => void;
    style?: CSSProperties;
};

function InsuranceAmount({ form, handleChange }: PropsType) {
    return (
        <>
            <SliderInput<InsuranceAmountType>
                variable="construction"
                value={form.construction}
                handleChange={handleChange}
                label="건물"
                min={1}
                max={5}
                step={1}
            />
            <SliderInput<InsuranceAmountType>
                variable="facilities"
                value={form.facilities}
                handleChange={handleChange}
                label="시설 및 집기 비품"
                min={0.5}
                max={5}
                step={0.5}
            />
            <SliderInput<InsuranceAmountType>
                variable="inventory"
                value={form.inventory}
                handleChange={handleChange}
                label="재고자산"
                min={1}
                max={5}
                step={1}
            />

            {/* <p
                className="titleH-22"
                style={{ textAlign: 'left', margin: '7px 0 8px' }}
            >
                영업배상 책임보험 가입면적을 선택해 주세요.
            </p>
            <InputSection>
                <label className="title_label">주택 유형</label>
                <OptionInput<InsuranceAmountType>
                    items={[
                        '주택 유형1',
                        '주택 유형2',
                        '주택 유형3',
                        '주택 유형4',
                    ]}
                    value={form.housingType}
                    handleChange={handleChange}
                    variable="housingType"
                    title="주택 유형을 선택해 주세요."
                />
            </InputSection>
            <InputSection>
                <label className="title_label">공급면적(전용면적이 아님)</label>
                <div className="dflex_center">
                    <CustomInput
                        maxLength={10}
                        value={form.area.toString()}
                        onChange={(e) => handleChange('area', numberOnly(e))}
                    />
                    <p
                        style={{
                            fontFamily: 'AppleSDGothicNeoH',
                            fontSize: '16px',
                            lineHeight: 1.75,
                            textAlign: 'right',
                            color: '#cfcfcf',
                        }}
                    >
                        m²
                    </p>
                </div>
            </InputSection> */}
        </>
    );
}

export default InsuranceAmount;
