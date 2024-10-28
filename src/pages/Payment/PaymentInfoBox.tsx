import React from 'react';
import { Divider } from '@mui/material';
import images from '../../assets/images';

export type InfoProps = {
    title: string;
    info: string;
};

function PaymentInfoBox({ title, info }: InfoProps) {
    const fontStyle: React.CSSProperties = {
        fontSize: '16px',
        lineHeight: '1.75',
        flex: '1 1 auto',
        minWidth: '0',
    };

    return (
        <>
            <div
                className="dflex_spacebetween"
                style={{
                    minHeight: '50px',
                    padding: '11px 0',
                }}
            >
                <label
                    style={{
                        ...fontStyle,
                        fontFamily: 'AppleSDGothicNeoH',
                        color: '#b7c2d6',
                        textAlign: 'left',
                    }}
                >
                    <span
                        style={{
                            display: 'inline-block',
                            width: '9px',
                            height: '9px',
                            margin: '0 8px 4px 6px',
                            backgroundImage: `url(${images.greyL})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    />
                    {title}
                </label>
                <p
                    style={{
                        ...fontStyle,
                        fontFamily: 'AppleSDGothicNeoM',
                        color: '#000',
                        textAlign: 'right',
                    }}
                >
                    {info}
                </p>
            </div>
            <Divider
                sx={{
                    mb: '8px',
                    backgroundColor: '#e0e0e0',
                }}
            />
        </>
    );
}

export default PaymentInfoBox;
