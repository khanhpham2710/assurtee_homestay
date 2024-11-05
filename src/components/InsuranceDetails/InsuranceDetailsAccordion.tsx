import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import BasicInfo from './BasicInfo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InsuranceInfo from './InsuranceInfo';
import PaymentInfo from './PaymentInfo';
import CoverageInfos from './CoverageInfos';
import fees from '../../utils/models/Fee';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

type PanelType = {
    title: string;
    content: React.ReactNode;
    span?: string;
};

const panels: PanelType[] = [
    {
        title: '기본 정보',
        content: <BasicInfo />,
    },
    {
        title: '피보험자 정보',
        content: <InsuranceInfo />,
    },
    {
        title: '보장내용 및 유의사항',
        content: <CoverageInfos />,
    },
    {
        title: '결제 정보',
        span: `(${fees.total.toLocaleString()}원)`,
        content: <PaymentInfo />,
    },
];

export default function InsuranceDetailsAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <>
            {panels.map((panel, index) => (
                <MuiAccordion
                    disableGutters
                    elevation={0}
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                        '& .MuiDivider-root': {
                            backgroundColor: '#fff',
                        },
                    }}
                >
                    <MuiAccordionSummary
                        aria-controls={`panel${index}d-content`}
                        id={`panel${index}d-header`}
                        sx={{
                            height: '74px',
                            p: '24px 24px 0',
                            backgroundColor: '#f6f7f9',
                        }}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'AppleSDGothicNeoM',
                                fontSize: 16,
                                lineHeight: 1.25,
                                textAlign: 'left',
                                color: '#000',
                                '& span': {
                                    color: '#646464',
                                    ml: '8px',
                                },
                            }}
                        >
                            {panel.title}
                            <span>{panel.span}</span>
                        </Typography>
                    </MuiAccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: '#fff',
                            padding: '16px 24px 0',
                            marginBottom: '48px',
                        }}
                    >
                        {panel.content}
                    </AccordionDetails>
                </MuiAccordion>
            ))}
        </>
    );
}
