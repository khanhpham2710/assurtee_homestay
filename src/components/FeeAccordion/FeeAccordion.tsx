import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
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

    const fontStyle = {
        fontFamily: 'AppleSDGothicNeoM',
        fontSize: '16px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.75',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#000',
        backgroundColor: '#fff0f3',
    };

    return (
        <Accordion
            sx={{
                boxShadow: 'none',
            }}
        >
            <AccordionSummary
                sx={{
                    height: '70px',
                    backgroundColor: '#fff0f3',
                    borderBottom: '#e0e0e0 solid 1px',
                    boxShadow: 'none',
                    padding: '0 24px',
                }}
                className="dflex_spacebetween"
                expandIcon={
                    <ExpandMoreIcon
                        sx={{
                            color: '#fb5601',
                            backgroundColor: '#fff0f3',
                        }}
                    />
                }
            >
                <Box
                    sx={{
                        backgroundColor: '#fff0f3',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        sx={{
                            ...fontStyle,
                            fontFamily: 'AppleSDGothicNeoH',
                        }}
                    >
                        총 보험료
                    </Typography>
                    <Typography
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
                    </Typography>
                </Box>
            </AccordionSummary>
            {fees.map((item, index) => (
                <AccordionDetails
                    key={index}
                    sx={{
                        borderBottom: '#e0e0e0 solid 1px',
                        height: '50px',
                        backgroundColor: '#fff0f3',
                        padding: 0,
                    }}
                >
                    <Box
                        className="dflex_spacebetween"
                        sx={{
                            width: '100%',
                            height: '100%',
                            padding: '0 24px',
                            backgroundColor: '#fff0f3',
                        }}
                    >
                        <Typography
                            sx={{
                                ...fontStyle,
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    display: 'inline-block',
                                    width: '9px',
                                    height: '9px',
                                    margin: '0 8px 4px 6px',
                                    backgroundImage: `url(${images.Bullet})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                },
                            }}
                        >
                            {item.name}
                        </Typography>
                        <Typography sx={fontStyle}>
                            {item.fee.toLocaleString()}원
                        </Typography>
                    </Box>
                </AccordionDetails>
            ))}
        </Accordion>
    );
}

export default FeeAccordion;
