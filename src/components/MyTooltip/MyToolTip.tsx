import React from 'react';

interface MyToolTipProps {
    text?: string[];
    align?: 'left' | 'center' | 'right';
    color?: 'grey' | 'black';
}

const MyToolTip: React.FC<MyToolTipProps> = ({
    text,
    align = 'right',
    color = 'grey',
}) => {
    return (
        <div id="tooltip">
            <p
                className={`tooltip-icon`}
                style={{
                    backgroundColor: color == 'black' ? color : '#aeb0b3',
                }}
            >
                !
            </p>
            {text && (
                <p className="tooltiptext" style={{ textAlign: align }}>
                    {text?.map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < text.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            )}
        </div>
    );
};

export default MyToolTip;
