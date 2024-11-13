import { useRef } from 'react';
import { useGlobalContext } from '../../App';

type InputProps<T> = {
    variable: keyof T;
    value: string | null;
    placeholder?: string;
    handleChange: (key: keyof T, value: string) => void;
    items: string[];
    title: string;
};

function OptionInput<T>({
    variable,
    value,
    placeholder,
    handleChange,
    items,
    title,
}: InputProps<T>) {
    const selboxWrapRef = useRef<HTMLDivElement | null>(null);
    const { setGlobal } = useGlobalContext();

    const handleClick = (itemValue: string) => {
        handleChange(variable, itemValue);
    };

    const handleOpen = () => {
        if (selboxWrapRef.current) {
            selboxWrapRef.current.classList.add('open');
        }
        setGlobal(true);
    };

    const handleClose = () => {
        if (selboxWrapRef.current) {
            selboxWrapRef.current.classList.remove('open');
        }
        setGlobal(false);
    };

    return (
        <div className="form-cont">
            <div ref={selboxWrapRef} className="selbox-wrap">
                <div className="openSelect able">
                    <button
                        type="button"
                        className="btn-sel"
                        onClick={handleOpen}
                    >
                        <span
                            className={value ? 'sel-val selected' : 'sel-val'}
                        >
                            {value || placeholder}
                        </span>
                    </button>
                    <input
                        type="text"
                        readOnly
                        placeholder={placeholder}
                        className="base-input"
                    />
                </div>
                <div className={`layer ${variable as string}-layer`}>
                    <div className="layer-header">
                        <strong className="title">{title}</strong>
                        <button
                            type="button"
                            className="layer-close"
                            aria-label="닫기"
                            onClick={handleClose}
                        ></button>
                    </div>
                    <div className="layer-content">
                        <div className="scroll">
                            <div className="scroller">
                                <ul>
                                    {items.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleClick(item)}
                                        >
                                            <input
                                                type="radio"
                                                name={`option-${variable as string}`}
                                                value={item}
                                            />
                                            <label htmlFor={`com3_${index}`}>
                                                <span className="sel-txt">
                                                    {item}
                                                </span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OptionInput;
