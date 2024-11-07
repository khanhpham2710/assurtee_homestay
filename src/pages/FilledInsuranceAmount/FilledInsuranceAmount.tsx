import { useEffect, useMemo, useState } from 'react';
import Question from '../../components/Questions/Question';
import InsuranceAmount from '../../components/FilledInsuranceAmount/InsuranceAmount';
import Terms from '../../components/FilledInsuranceAmount/Terms';
import { updateInfo } from '../../utils/redux/infoSlice';
import { Link, useNavigate } from 'react-router-dom';
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
            <div style={{ padding: '8px 24px 0' }}>
                <section
                    className="dflex-column"
                    style={{ marginBottom: '17px' }}
                >
                    <p className="titleNumber">
                        <span>2</span> / 2
                    </p>
                </section>
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
                <p className="orange-font">
                    행정안전부에서 제공받은 주택 연면적이 다동으로 입력되어
                    있습니다. 정상적인 보상을 위해 사업신고시 기입한 주택
                    연면적과 맞는지 반드시 확인 필요!
                </p>
                <Terms
                    checkAll={checkAll}
                    setCheckAll={setCheckAll}
                    style={{ marginTop: '40px' }}
                />
            </div>
            <section
                className="insurance-amount-buttons"
                style={{ marginTop: '40px' }}
            >
                <Link to="/personal-infor" className="dflex_center">
                    이전
                </Link>
                <button
                    className={buttonActive ? 'active' : ''}
                    disabled={!buttonActive}
                    onClick={handleSubmit}
                >
                    보험료 계산
                </button>
            </section>
            <FullPageModal
                open={open}
                setOpen={setOpen}
                title="전자서명 동의 안내"
                component={<TermCondition />}
            />
        </>
    );
}

export default FilledInsuranceAmount;
