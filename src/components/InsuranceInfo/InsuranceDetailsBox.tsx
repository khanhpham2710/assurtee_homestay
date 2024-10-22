import { Box, Divider, Typography } from '@mui/material';
import MyToolTip from '../MyTooltip/MyToolTip';

export type InfoProps = {
    title: string;
    info: string;
    tooltip?: string[];
};

function InsuranceDetailsBox({ title, info, tooltip }: InfoProps) {
    const style = {
        fontStretch: 'normal',
        fontStyle: 'normal',
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
                        fontFamily: 'AppleSDGothicNeoM',
                        fontSize: '14px',
                        color: '#646464',
                        lineHeight: '1.21',
                        textAlign: 'left',
                    }}
                >
                    {title}
                </Typography>
                <Box className="dflex_center" sx={{gap : '8px'}}>
                    <Typography
                        sx={{
                            ...style,
                            fontFamily: 'AppleSDGothicNeoSB',
                            fontSize: '16px',
                            color: '#000',
                            lineHeight: '1.75',
                            textAlign: 'right',
                        }}
                    >
                        {info}
                    </Typography>
                    <MyToolTip text={tooltip} align='left'/>
                </Box>
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

export default InsuranceDetailsBox;
