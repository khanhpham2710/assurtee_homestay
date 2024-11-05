import { useMemo } from 'react';
import { BlueCustomInput, InputSection } from '../Input/CustomInput';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import { formatDate } from '../../utils/validation/startAndEndDate';
import { CSSProperties } from 'styled-components';

type DateInputProps = {
    style?: CSSProperties;
};

function DateInputs({ style }: DateInputProps) {
    const state = useAppSelector((state) => state.info);

    const { formatedStartDate, formatedEndDate } = useMemo(
        () => formatDate(state.startDate),
        [state.startDate, state.endDate]
    );

    return (
        <form style={{ ...style, width: '100%' }}>
            <InputSection>
                <label className="title_label" htmlFor="start-date">
                    보험 시작일
                </label>
                <BlueCustomInput
                    id="start-date"
                    type="text"
                    value={formatedStartDate}
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
                    value={formatedEndDate}
                    readOnly
                />
            </InputSection>
        </form>
    );
}

export default DateInputs;
