import React, { CSSProperties } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type WarningAccordionType = {
    title: string;
    content: React.JSX.Element;
    style: CSSProperties;
};

function WarningAccordion({ title, content, style }: WarningAccordionType) {
    return (
        <div
            style={{
                ...style,
                border: 'solid 1px #e0e0e0',
                borderRadius: '10px',
                height: 'auto',
                overflow: 'hidden',
            }}
        >
            <Accordion id="warning_accordion" disableGutters elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        height: '50px',
                        backgroundColor: '#fff',
                        padding: '0 24px',
                        borderBottom: '1px solid #e0e0e0',
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'AppleSDGothicNeoB',
                            fontSize: 14,
                            fontStretch: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 1.14,
                            letterSpacing: 'normal',
                            textAlign: 'left',
                            color: '#000',
                        }}
                    >
                        {title}
                    </p>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: '17px 24px',
                        backgroundColor: '#faf9f9',
                    }}
                >
                    {content}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default WarningAccordion;
