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

const buttonStyle = {
    color: '#ffffff',
    backgroundColor: '#090909',
    padding: '0px',
    height: '24px',
    width: '24px',
    lineHeight: '24px',
    fontSize: '20px',
    borderRadius: '50px',
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
    const handleSlider = (event: Event, value: number): void => {
        handleChange(variable, value);
    };

    return (
        <section
            style={{
                marginBottom: '33px',
            }}
        >
            <label className="title_label-2">{label}</label>
            <div
                className="dflex_spacebetween"
                style={{
                    marginTop: '21.5px',
                }}
            >
                <button
                    style={buttonStyle}
                    className="dflex_center"
                    onClick={() => {
                        const temp = value - step;
                        if (temp >= min) {
                            handleChange(variable, temp);
                        }
                    }}
                >
                    <span
                        style={{
                            transform: 'translateY(-10.5px)',
                        }}
                    >
                        _
                    </span>
                </button>
                <p className="title-amount">{value}천만원</p>
                <button
                    style={buttonStyle}
                    className="dflex_center"
                    onClick={() => {
                        const temp = value + step;
                        if (temp <= max) {
                            handleChange(variable, temp);
                        }
                    }}
                >
                    +
                </button>
            </div>
            <Slider
                step={step}
                min={min}
                max={max}
                value={value}
                onChange={handleSlider}
                sx={{
                    color: '#ea3062',
                    boxShadow: 'none',
                    '& .MuiSlider-thumb': {
                        height: 18,
                        width: 18,
                        backgroundColor: '#ea3062',
                        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
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
            <p className="subtitle">최대 5천만원까지 선택할 수 있어요.</p>
        </section>
    );
}

export default SliderInput;
