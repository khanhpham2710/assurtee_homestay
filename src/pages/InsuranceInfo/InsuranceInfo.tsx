import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import images from '../../assets/images';
import FeeAccordion from '../../components/FeeAccordion/FeeAccordion';
import RegistrationInfo from '../../components/InsuranceInfo/RegistrationInfo';
import InsuranceDetails from '../../components/InsuranceInfo/InsuranceDetails';
import Download from '../../components/InsuranceInfo/Download';
import WarningAccordion from '../../components/InsuranceInfo/WarningAccordion';
import ConfirmCheckbox from '../../components/InsuranceInfo/ConfirmCheckbox';

function InsuranceInfo() {
    return (
        <Box className="dflex-column">
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
            <RegistrationInfo />
            <InsuranceDetails />
            <section
                className="dflex_center"
                style={{
                    margin: '20px 0',
                    gap: '12px',
                }}
            >
                <Download text="상품설명서(PDF)" />
                <Download text="보험약관(PDF)" />
            </section>
            <section style={{ padding: '0 24px' }}>
                <WarningAccordion />
            </section>
            <Typography
                sx={{
                    fontFamily: 'AppleSDGothicNeoM',
                    fontSize: '12px',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: 'normal',
                    textAlign: 'left',
                    color: '#646464',
                    margin: '34px auto 47px',
                }}
            >
                준법감시확인필 제202325412호 2024.5.25~2025.5.25
            </Typography>
            <ConfirmCheckbox />
            <section>
                <Button disabled={true} className="button3">
                    가입하기
                </Button>
            </section>
        </Box>
    );
}

export default InsuranceInfo;
