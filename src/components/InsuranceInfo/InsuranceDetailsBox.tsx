import React from 'react';
import { Divider } from '@mui/material';
import MyToolTip from '../MyTooltip/MyToolTip';

export type InfoProps = {
    title: string;
    info: string;
    tooltip?: string[];
};

function InsuranceDetailsBox({ title, info, tooltip }: InfoProps) {
    const fontStyle: React.CSSProperties = {
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
                <h5
                    style={{
                        ...fontStyle,
                        fontFamily: 'AppleSDGothicNeoM',
                        fontSize: '14px',
                        color: '#646464',
                        lineHeight: '1.21',
                        textAlign: 'left',
                    }}
                >
                    {title}
                </h5>
                <div className="dflex_center" style={{ gap: '8px' }}>
                    <h4
                        style={{
                            ...fontStyle,
                            fontFamily: 'AppleSDGothicNeoSB',
                            fontSize: '16px',
                            color: '#000',
                            lineHeight: '1.75',
                            textAlign: 'right',
                        }}
                    >
                        {info}
                    </h4>
                    <MyToolTip text={tooltip} align="left" />
                </div>
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

export default InsuranceDetailsBox;
