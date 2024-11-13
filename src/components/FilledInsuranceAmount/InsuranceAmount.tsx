// import { CustomInput, InputSection } from '../Input/CustomInput';
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
            <h2 className="sect-title mt40">
                영업배상 책임보험 가입면적을 선택해 주세요.
            </h2>
            <div className="form-wrap">
                <div className="form-list">
                    <strong className="form-title">주택 유형</strong>
                    <OptionInput<InsuranceAmountType>
                        variable="housingType"
                        value={form.housingType}
                        handleChange={handleChange}
                        items={[
                            '주택 유형1',
                            '주택 유형2',
                            '주택 유형3',
                            '주택 유형4',
                        ]}
                        title="주택 유형"
                    />
                </div>
                <div className="form-list">
                    <strong className="form-title">
                        공급면적(전용면적이 아님)
                    </strong>
                    <div className="form-cont">
                        <div className="form-item fx-holder">
                            <input
                                type="text"
                                placeholder="공급면적을 입력해 주세요."
                                className="txt-input"
                                onChange={(e) =>
                                    handleChange('area', numberOnly(e))
                                }
                                value={form.area}
                            />
                            <span className="side fc-gray">m²</span>
                        </div>
                    </div>
                    <p className="form-text">
                        행정안전부에서 제공받은 주택 연면적이 다동으로 입력되어
                        있습니다. 정상적인 보상을 위해 사업신고시 기입한 주택
                        연면적과 맞는지 반드시 확인 필요!
                    </p>
                </div>
            </div>
        </>
    );
}

export default InsuranceAmount;
