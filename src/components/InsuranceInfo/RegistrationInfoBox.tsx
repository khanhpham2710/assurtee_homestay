import React from 'react';
import { Divider } from '@mui/material';

export type InfoProps = {
    title: string;
    info: string;
};

function RegistrationInfoBox({ title, info }: InfoProps) {
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
                    {title}
                </label>
                <h5
                    style={{
                        ...fontStyle,
                        fontFamily: 'AppleSDGothicNeoM',
                        color: '#000',
                        textAlign: 'right',
                    }}
                >
                    {info}
                </h5>
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

export default RegistrationInfoBox;
