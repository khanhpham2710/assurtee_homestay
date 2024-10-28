import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import images from '../../assets/images';

type Fee = {
    name: string;
    fee: number;
};

function FeeAccordion() {
    const fees: Fee[] = [
        {
            name: '화재보장 부문',
            fee: 9300,
        },
        {
            name: '영업배상 보장 부문',
            fee: 10000,
        },
    ];

    const totalFee = fees.reduce((sum, item) => sum + item.fee, 0);

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
                        {totalFee.toLocaleString()}원
                    </p>
                </div>
            </AccordionSummary>
            {fees.map((item, index) => (
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
                                style={{
                                    display: 'inline-block',
                                    width: '9px',
                                    height: '9px',
                                    margin: '0 8px 4px 6px',
                                    backgroundImage: `url(${images.blackL})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
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
