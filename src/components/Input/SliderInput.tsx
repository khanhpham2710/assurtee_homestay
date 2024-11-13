import Slider from '@mui/material/Slider';
import { CSSProperties } from 'react';

type SliderType<T> = {
    variable: keyof T;
    value: number;
    handleChange: (key: keyof T, value: number) => void;
    label: string;
    min?: number;
    max?: number;
    step?: number;
};

const buttonStyle: CSSProperties = {
    color: '#ffffff',
    backgroundColor: '#090909',
    padding: '0px',
    height: '24px',
    width: '24px',
    lineHeight: '24px',
    fontSize: '20px',
    borderRadius: '50px',
    cursor: 'pointer',
};

function SliderInput<T>({
    variable,
    value,
    handleChange,
    label,
    min = 1,
    max = 5,
    step = 1,
}: SliderType<T>) {
    const handleSlider = (
        event: Event,
        value: number | number[],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        activeThumb: number
    ): void => {
        if (typeof value === 'number') {
            handleChange(variable, value);
        }
    };

    return (
        <div className="range-section">
            <p className="title-s">{label}</p>
            <div className="range-box">
                <button type="button" className="btn-minus">
                    <i className="hidden">빼기</i>
                </button>
                <button type="button" className="btn-plus">
                    <i className="hidden">더하기</i>
                </button>
                <span className="range-text">3천만원</span>
                <div
                    className="range-bar ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    id="slider-range3"
                ></div>
            </div>
            <p className="desc">최대 5천만원까지 선택할 수 있어요.</p>
        </div>
    );
}

export default SliderInput;
