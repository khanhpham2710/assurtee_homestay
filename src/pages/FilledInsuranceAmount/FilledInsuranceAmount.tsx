import { useEffect, useMemo, useState } from 'react';
import Question from '../../components/Questions/Question';
import InsuranceAmount from '../../components/FilledInsuranceAmount/InsuranceAmount';
import Terms from '../../components/FilledInsuranceAmount/Terms';
import { updateInfo } from '../../utils/redux/infoSlice';
import { useNavigate } from 'react-router-dom';
import { validateAmountField } from '../../utils/validation/validatefields';
import { useAppSelector, useAppDispatch } from '../../utils/hooks/reduxHooks';
import { InsuranceAmountType } from '../../utils/models/InfoType';
import FullPageModal from '../../components/MyModals/FullPageModal';
import TermCondition from '../TermCondition/TermCondition';

function FilledInsuranceAmount() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const items: Array<'1억' | '3억' | '5억'> = ['1억', '3억', '5억'];
    const [item, setItem] = useState<'1억' | '3억' | '5억'>(items[0]);
    const [open, setOpen] = useState<boolean>(false);

    const info = useAppSelector((state) => state.info);

    const [form, setForm] = useState<InsuranceAmountType>(info);

    const handleChange = (
        key: keyof InsuranceAmountType,
        value: string | number
    ) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const [checkAll, setCheckAll] = useState<boolean>(true);

    const buttonActive = useMemo(() => {
        return checkAll && validateAmountField(form);
    }, [checkAll, form]);

    const handleSubmit = async () => {
        if (buttonActive) {
            await dispatch(updateInfo(form));
            navigate('/insurance-infor');
        }
    };

    useEffect(() => {
        setForm((prev) => ({ ...prev, fireInsurance: item }));
    }, [item]);

    return (
        <>
            <div
                className="container container-page container-fx"
                id="container"
            >
                <section className="section">
                    <div className="step-num">
                        <span className="num">
                            <em>2</em>
                        </span>
                        <span className="mid">/</span>
                        <span className="num">2</span>
                    </div>

                    <Question<'1억' | '3억' | '5억'>
                        title="화재보험 가입금액을 선택해 주세요."
                        item={item}
                        items={items}
                        setItem={setItem}
                    />
                    <InsuranceAmount
                        form={form}
                        handleChange={handleChange}
                        style={{ marginTop: '40px' }}
                    />
                    <Terms checkAll={checkAll} setCheckAll={setCheckAll} />
                    <FullPageModal
                        open={open}
                        setOpen={setOpen}
                        title="전자서명 동의 안내"
                        component={<TermCondition />}
                    />
                </section>
            </div>
            <div className="btm-fixed">
                <div className="btn-wrap">
                    <button
                        type="button"
                        className="btn btn-prev"
                        onClick={() => {
                            navigate('/personal-infor');
                        }}
                    >
                        이전
                    </button>
                    <button
                        type="button"
                        className="btn"
                        disabled={!buttonActive}
                        onClick={handleSubmit}
                    >
                        보험료계산
                    </button>
                </div>
            </div>
        </>
    );
}

export default FilledInsuranceAmount;
