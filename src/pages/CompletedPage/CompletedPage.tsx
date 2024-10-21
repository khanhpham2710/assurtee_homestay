import React from 'react';
import images from '../../assets/images';
import LoadingPage from '../../components/Loading/Loading';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CompletedPage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    // return <LoadingPage />

    return (
        <Box
            sx={{
                width: '100%',
                height: 'calc(100vh - 100px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img src={images.Success} />
            <Typography
                sx={{
                    mt: '38px',
                    mb: '12px',
                    fontFamily: 'AppleSDGothicNeoH',
                    fontSize: '22px',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '1.27',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    color: '#000',
                }}
            >
                보험 가입이 완료 되었습니다.
            </Typography>

            <Typography
                sx={{
                    fontFamily: 'AppleSDGothicNeoM',
                    fontSize: '16px',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '1.27',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    color: '#000',
                }}
            >
                가입확인서는 입력하신 <br />
                핸드폰 번호 카카오톡으로 보내드렸습니다.
            </Typography>

            <button className="button2" style={{ marginTop: '32px' }}>
                가입내역 확인
            </button>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '40px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Typography onClick={handleClick}>홈으로</Typography>
            </Box>
        </Box>
    );
}

export default CompletedPage;
