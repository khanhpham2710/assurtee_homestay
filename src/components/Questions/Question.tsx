import React, { Dispatch } from 'react';

interface MultiButtonProps<T = string> {
    title: string;
    items: T[];
    item: T;
    setItem: Dispatch<React.SetStateAction<T>>;
}

function Question<T = string>({
    title,
    item,
    items,
    setItem,
}: MultiButtonProps<T>) {
    const handleClick = (item: T) => {
        setItem(item);
    };

    return (
        <>
            <h2 className="title pt16">{title}</h2>
            <div className="check-block mt30">
                {items.map((item1, index) => {
                    return (
                        <label
                            className="rdo-box"
                            key={index}
                            onClick={() => handleClick(item1)}
                        >
                            <input
                                type="radio"
                                className="rdo-input"
                                name="rdo-group01"
                                readOnly
                                checked={item1 == item}
                            />
                            <span className="label">
                                <em>{item1 as string}</em>
                            </span>
                        </label>
                    );
                })}
            </div>
            <hr className="hr-line" />
        </>
    );
}

export default Question;
