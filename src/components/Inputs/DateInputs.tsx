import { useMemo } from 'react';
import { BlueCustomInput, InputSection } from '../Input/CustomInput';

function DateInputs() {
    const { current, next } = useMemo(() => {
        const date = new Date(Date.now());

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const current = `${year}.${month}.${day}`;
        const next = `${year + 1}.${month}.${day}`;
        return { current, next };
    }, []);

    return (
        <form style={{ width: '100%' }}>
            <InputSection>
                <label className="title_label" htmlFor="start-date">
                    보험 시작일
                </label>
                <BlueCustomInput
                    id="start-date"
                    type="text"
                    value={current}
                    readOnly
                />
            </InputSection>
            <InputSection>
                <label className="title_label" htmlFor="end-date">
                    보험 종료일
                </label>
                <BlueCustomInput
                    id="end-date"
                    type="text"
                    value={next}
                    readOnly
                />
            </InputSection>
        </form>
    );
}

export default DateInputs;
