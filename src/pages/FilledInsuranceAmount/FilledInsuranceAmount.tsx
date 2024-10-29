import { useEffect, useState } from 'react';
import Question from '../../components/Questions/Question';
import InsuranceAmount from '../../components/FilledInsuranceAmount/InsuranceAmount';
import Terms from '../../components/FilledInsuranceAmount/Terms';
import { InsuranceAmountType, updateInfo } from '../../utils/redux/infoSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/store';

function FilledInsuranceAmount() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items: Array<'1억' | '3억' | '5억'> = ['1억', '3억', '5억'];
    const [item, setItem] = useState<'1억' | '3억' | '5억'>(items[0]);

    const info = useSelector((state: RootState) => state.info);

    const [form, setForm] = useState<InsuranceAmountType>(info);

    const handleChange = (
        key: keyof InsuranceAmountType,
        value: string | number
    ) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const [checkAll, setCheckAll] = useState<boolean>(true);

    function validateFields(): boolean {
        const {
            fireInsurance,
            construction,
            facilities,
            inventory,
            housingType,
            area,
        } = form;

        if (
            !fireInsurance ||
            !construction ||
            !facilities ||
            !inventory ||
            !housingType ||
            !area
        ) {
            return false;
        }

        return true;
    }

    const buttonActive: boolean = checkAll && validateFields();

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
        <div style={{ padding: '8px 24px 0' }}>
            <section className="dflex-column" style={{ marginBottom: '17px' }}>
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
            <section style={{ marginTop: '40px' }}>
                <InsuranceAmount form={form} handleChange={handleChange} />
            </section>
            <section style={{ marginTop: '40px' }}>
                <Terms checkAll={checkAll} setCheckAll={setCheckAll} />
            </section>
            <section className="dflex_center" style={{ marginTop: '40px' }}>
                <Link to="/personal-infor" className="button-back dflex_center">
                    이전
                </Link>
                <button
                    className={
                        buttonActive
                            ? 'button-calculate active'
                            : 'button-calculate'
                    }
                    disabled={!buttonActive}
                    onClick={handleSubmit}
                >
                    보험료 계산
                </button>
            </section>
        </div>
    );
}

export default FilledInsuranceAmount;
