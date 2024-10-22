import { Box, Divider, Typography } from '@mui/material';

export type InfoProps = {
    title: string;
    info: string;
};

function RegistrationInfoBox({ title, info }: InfoProps) {
    const style = {
        fontSize: '16px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.75',
        letterSpacing: 'normal',

        flex: '1 1 auto',
        minWidth: '0',
    };

    return (
        <>
            <Box
                className="dflex_spacebetween"
                sx={{
                    mineight: '50px',
                    paddingY: '11px',
                }}
            >
                <Typography
                    sx={{
                        style,
                        fontFamily: 'AppleSDGothicNeoH',
                        color: '#b7c2d6',
                        textAlign: 'left',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        ...style,
                        fontFamily: 'AppleSDGothicNeoM',
                        color: '#000',
                        textAlign: 'right',
                    }}
                >
                    {info}
                </Typography>
            </Box>
            <Divider
                sx={{
                    mb: '8px',
                    backgroundColor: '#e0e0e0',
                }}
            />
        </>
    );
}

export default RegistrationInfoBox;
