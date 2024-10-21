import { Box, Typography } from '@mui/material';
import images from '../../assets/images/images';

function LoadingPage() {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                backgroundColor: '#f6f7f9',
                zIndex: '1',
                position: 'absolute',
                top: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                src={images.Loading}
                style={{ width: '64px', height: '64px' }}
            />
            <Typography
                sx={{
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
                결제가 진행 중입니다.
            </Typography>
        </Box>
    );
}

export default LoadingPage;
