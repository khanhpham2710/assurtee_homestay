import React, { CSSProperties, Dispatch } from 'react';
import images from '../../assets/images';

interface MultiButtonProps<T = string> {
    title: string;
    items: T[];
    item: T;
    setItem: Dispatch<React.SetStateAction<T>>;
    style?: CSSProperties;
}

function Question<T = string>({
    title,
    item,
    items,
    setItem,
    style,
}: MultiButtonProps<T>) {
    const handleClick = (item: T) => {
        setItem(item);
    };

    return (
        <div className="dflex_center flexColumn_item" style={style}>
            <p
                className="titleH-22"
                style={{ marginBottom: '30px', textAlign: 'left' }}
            >
                {title}
            </p>
            <div
                className="dflex_item_inline"
                data-items={items.length}
                style={{
                    width: '100%',
                }}
            >
                {items.map((item1, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(item1)}
                        className={
                            item1 === item
                                ? 'buttonQuestion active dflex_center'
                                : 'buttonQuestion dflex_center'
                        }
                    >
                        <img
                            src={
                                item1 === item
                                    ? images.chosedButton
                                    : images.blankButton
                            }
                            style={{
                                marginRight: '6px',
                                width: '20px',
                                height: '20px',
                            }}
                            alt={item1 as string}
                        />
                        {item1 as string}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;
