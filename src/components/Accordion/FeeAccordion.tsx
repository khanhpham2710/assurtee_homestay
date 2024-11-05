import React, { CSSProperties } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import images from '../../assets/images';
import fees from '../../utils/models/Fee';

function FeeAccordion({ style }: { style?: CSSProperties }) {
    const fontStyle: React.CSSProperties = {
        fontFamily: 'AppleSDGothicNeoM',
        fontSize: '16px',
        lineHeight: '1.75',
        color: '#000',
        backgroundColor: '#fff0f3',
    };

    return (
        <Accordion
            id="fee_accordion"
            disableGutters
            elevation={0}
            sx={{
                ...style,
                boxShadow: 'none',
                '&::before': {
                    display: 'none',
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#fb5601' }} />}
                sx={{
                    height: '70px',
                    backgroundColor: '#fff0f3',
                    borderBottom: '1px solid #e0e0e0',
                    padding: '0 24px',
                }}
            >
                <div className="dflex_spacebetween" style={{ width: '100%' }}>
                    <p
                        style={{
                            ...fontStyle,
                            fontFamily: 'AppleSDGothicNeoH',
                        }}
                    >
                        총 보험료
                    </p>
                    <p
                        style={{
                            ...fontStyle,
                            fontFamily: 'AppleSDGothicNeoH',
                            fontSize: '22px',
                            lineHeight: '1.27',
                            textAlign: 'right',
                            color: '#fb5601',
                        }}
                    >
                        {fees.total.toLocaleString()}원
                    </p>
                </div>
            </AccordionSummary>
            {fees.fees.map((item, index) => (
                <AccordionDetails
                    key={index}
                    sx={{
                        borderBottom: '1px solid #e0e0e0',
                        height: '50px',
                        backgroundColor: '#fff0f3',
                        padding: 0,
                    }}
                >
                    <div
                        className="dflex_spacebetween"
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '0 24px',
                        }}
                    >
                        <p style={fontStyle}>
                            <span
                                className="bullet-L"
                                style={{
                                    backgroundImage: `url(${images.blackL})`,
                                }}
                            />
                            {item.name}
                        </p>
                        <p style={fontStyle}>{item.fee.toLocaleString()}원</p>
                    </div>
                </AccordionDetails>
            ))}
        </Accordion>
    );
}

export default FeeAccordion;
