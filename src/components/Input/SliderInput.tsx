import Slider from '@mui/material/Slider';

type SliderType<T> = {
    variable: keyof T;
    value: number;
    handleChange: (key: keyof T, value: number) => void;
    label: string;
    min?: number;
    max?: number;
    step?: number;
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
                <button
                    type="button"
                    className="btn-minus"
                    onClick={() => {
                        const temp = value - step;
                        if (temp >= min) {
                            handleChange(variable, temp);
                        }
                    }}
                >
                    <i className="hidden">빼기</i>
                </button>
                <button
                    type="button"
                    className="btn-plus"
                    onClick={() => {
                        const temp = value + step;
                        if (temp <= max) {
                            handleChange(variable, temp);
                        }
                    }}
                >
                    <i className="hidden">더하기</i>
                </button>
                <span className="range-text">{value}천만원</span>
                <Slider
                    step={step}
                    min={min}
                    max={max}
                    value={value}
                    className="range-bar"
                    onChange={handleSlider}
                    sx={{
                        color: '#ea3062',
                        boxShadow: 'none',
                        '& .MuiSlider-thumb': {
                            height: 18,
                            width: 18,
                            backgroundColor: '#ea3062',
                            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible':
                                {
                                    boxShadow: 'none',
                                    outline: 'none',
                                    '@media (hover: none)': {
                                        boxShadow: 'none',
                                    },
                                },
                            '&:before': {
                                display: 'none',
                            },
                        },
                        '& .MuiSlider-track': {
                            border: 'none',
                            height: 4,
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.5,
                            backgroundColor: '#e0e0e0',
                        },
                    }}
                />
            </div>
            <p
                className="desc"
                style={{
                    marginTop: 20,
                }}
            >
                최대 5천만원까지 선택할 수 있어요.
            </p>
        </div>
    );
}

export default SliderInput;
