import React, { Dispatch } from 'react';
import images from '../../assets/images';
interface MultiButtonProps {
    title: string;
    items: string[];
    item: string;
    setItem: Dispatch<React.SetStateAction<string>>;
}

export default function Question({
    title,
    item,
    items,
    setItem,
}: MultiButtonProps) {
    const handleClick = (item: string) => {
        setItem(item);
    };
    return (
        <div className="dflex_center flexColumn_item">
            <h2
                className="titleMedium"
                style={{ marginBottom: '30px', textAlign: 'left' }}
            >
                {title}
            </h2>
            <div className="dflex_item_inline" data-items={items.length}>
                {items.map((item1, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(item1)}
                        className={
                            item1 == item
                                ? 'buttonQuestion active dflex_center '
                                : 'buttonQuestion dflex_center'
                        }
                    >
                        <img
                            src={
                                item1 == item
                                    ? images.chosedButton
                                    : images.blankButton
                            }
                            style={{
                                marginRight: '6px',
                                width: '20px',
                                height: '20px',
                            }}
                        />

                        {item1}
                    </button>
                ))}
            </div>
        </div>
    );
}
