import React from 'react';
import images from '../../assets/images';
import { Balcony } from '@mui/icons-material';

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
        <div className="tooltip">
                <p
                    style={{
                        width: '16px',
                        height: '16px',
                        padding: '2px',
                        borderRadius: '50%',
                        backgroundColor: color == 'black' ? color : '#aeb0b3',
                        color: 'white',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: "12px",
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
