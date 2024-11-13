import { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);
    const { setGlobal } = useGlobalContext();

    const handleClick = (itemValue: string) => {
        handleChange(variable, itemValue);
        setIsOpen(false);
        setGlobal(false);
    };

    return (
        <div className="form-cont">
            <div className={isOpen ? 'selbox-wrap open' : 'selbox-wrap'}>
                <div className="openSelect able">
                    <button
                        type="button"
                        className="btn-sel"
                        onClick={() => {
                            setIsOpen(true);
                            setGlobal(true);
                        }}
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
                {isOpen && (
                    <div className={`layer ${variable as string}-layer`}>
                        <div className="layer-header">
                            <strong className="title">{title}</strong>
                            <button
                                type="button"
                                className="layer-close"
                                aria-label="닫기"
                                onClick={() => {
                                    setIsOpen(false);
                                    setGlobal(false);
                                }}
                            ></button>
                        </div>
                        <div className="layer-content">
                            <div className="scroll">
                                <div className="scroller">
                                    <ul>
                                        {items.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    handleClick(item)
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name={`option-${variable as string}`}
                                                    value={item}
                                                />
                                                <label
                                                    htmlFor={`com3_${index}`}
                                                >
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
                )}
            </div>
        </div>
    );
}

export default OptionInput;
