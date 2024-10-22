import { Box, Typography } from '@mui/material';
import images from '../../assets/images';

function Download({ text }: { text: string }) {
    return (
        <Box
            className="dflex_center"
            sx={{
                width: '150px',
                height: '50px',
                backgroundColor: '#e7ecf3',
                borderRadius: '50px',
                gap: '8px',
                cursor: 'pointer',
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'AppleSDGothicNeoB',
                    fontSize: '14px',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    color: '#333647',
                }}
            >
                {text}
            </Typography>
            <img src={images.Download} />
        </Box>
    );
}

export default Download;
