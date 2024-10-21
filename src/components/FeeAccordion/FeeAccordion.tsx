import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';

type Fee = {
    name: string;
    fee: string;
};

function FeeAccordion() {
    const fees: Fee[] = [
        {
            name: '화재보장 부문',
            fee: '9,300원',
        },
        {
            name: '영업배상 보장 부문',
            fee: '10,000원',
        },
    ];

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
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
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
                        style={{
                            fontFamily: 'AppleSDGothicNeoH',
                            fontSize: '16px',
                            lineHeight: '1.75',
                            textAlign: 'left',
                            color: '#000',
                            backgroundColor: '#fff0f3',
                        }}
                    >
                        총 보험료
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: 'AppleSDGothicNeoH',
                            fontSize: '22px',
                            fontStretch: 'normal',
                            lineHeight: '1.27',
                            letterSpacing: 'normal',
                            textAlign: 'right',
                            color: '#fb5601',
                            backgroundColor: '#fff0f3',
                        }}
                    >
                        19,300원
                    </Typography>
                </Box>
            </AccordionSummary>
            {fees &&
                fees.map((item, index) => {
                    return (
                        <AccordionDetails
                            key={index}
                            sx={{
                                borderBottom: '#e0e0e0 solid 1px',
                                height: '50px',
                            }}
                        >
                            <Box
                                width={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box>{item.name}</Box>
                                <Box>{item.fee}</Box>
                            </Box>
                        </AccordionDetails>
                    );
                })}
        </Accordion>
    );
}

export default FeeAccordion;
