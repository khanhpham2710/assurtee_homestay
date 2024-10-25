import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
export default function FeeLandingPage() {
    return (
        <section
            className="flexColumn_item dflex_center"
            style={{ marginBottom: '16px' }}
        >
            <Box
                sx={{
                    width: '312px',
                    padding: '32px 14px 55px',
                    backgroundColor: '#2d2d2d',
                    color: 'white',
                    borderRadius: '8px',
                }}
            >
                {/* First Section */}

                <Typography sx={{ fontWeight: 'bold', marginBottom: '19px' }}>
                    화재보험
                </Typography>
                <Divider
                    sx={{
                        height: '2px',
                        backgroundColor: '#e0e0e0',
                        marginBottom: '30px',
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '19px',
                    }}
                >
                    <Typography>보험료</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>9,300원</Typography>
                </Box>
                <Divider
                    sx={{
                        height: '1px',
                        backgroundColor: '#6d6d6d',
                        marginBottom: '16px',
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '24px',
                    }}
                >
                    <Typography>가입금액</Typography>
                    <Typography>1억원</Typography>
                </Box>
                <Divider
                    sx={{
                        height: '1px',
                        backgroundColor: '#6d6d6d',
                        marginBottom: '30px',
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '24px',
                    }}
                >
                    <Typography>건물</Typography>
                    <Typography>3,000만원</Typography>
                </Box>
                <Divider
                    sx={{
                        height: '1px',
                        backgroundColor: '#6d6d6d',
                        marginBottom: '30px',
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '24px',
                    }}
                >
                    <Typography>시설 및 집기</Typography>
                    <Typography>3,000만원</Typography>
                </Box>
                <Divider
                    sx={{
                        height: '1px',
                        backgroundColor: '#6d6d6d',
                        marginBottom: '30px',
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '24px',
                    }}
                >
                    <Typography>재고자산</Typography>
                    <Typography>3,000만원</Typography>
                </Box>

                <Divider
                    sx={{
                        height: '1px',
                        backgroundColor: '#6d6d6d',
                        marginBottom: '30px',
                    }}
                />

                {/* Second Section */}

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', marginBottom: '19px' }}
                >
                    영업배상책임보험
                </Typography>
                <Divider
                    sx={{
                        height: '2px',
                        backgroundColor: '#e0e0e0',
                        marginBottom: '30px',
                    }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>보험료</Typography>
                    <Typography
                        sx={{ fontWeight: 'bold', marginBottom: '19px' }}
                    >
                        10,000원
                    </Typography>
                </Box>
                <Divider
                    sx={{
                        height: '1px',
                        backgroundColor: '#6d6d6d',
                        marginBottom: '30px',
                    }}
                />
            </Box>
        </section>
    );
}
