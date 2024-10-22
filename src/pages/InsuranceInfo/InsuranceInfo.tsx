import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import images from '../../assets/images';
import FeeAccordion from '../../components/FeeAccordion/FeeAccordion';

function InsuranceInfo() {
    return (
        <>
            <Avatar
                src={images.InsuranceLogo}
                alt=""
                sx={{
                    margin: '16px 206px 0px 24px',
                    objectFit: 'contain',
                }}
            />
            <h2
                className="titleMedium"
                style={{ margin: '12px 24px 52px', textAlign: 'left' }}
            >
                현대해상화재보험 외국인관광도시민박보험
            </h2>
            <FeeAccordion />
            <section style={{
                margin: "40px 0 16px 24px"
            }}>
                <Typography sx={{
                    'fontFamily': 'AppleSDGothicNeoM',
                    'fontSize': '12px',
                    'fontStretch': 'normal',
                    'fontStyle': 'normal',
                    'lineHeight': '1',
                    'letterSpacing': 'normal',
                    'textAlign': 'left',
                    'color': '#000'
                }}>
                가입정보
                </Typography>

            </section>
        </>
    );
}

export default InsuranceInfo;
