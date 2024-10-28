import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MyToolTip from '../MyTooltip/MyToolTip';
import images from '../../assets/images';
export default function FeeLandingPage() {
    return (
        <section
            className="flexColumn_item dflex_center"
            style={{ marginBottom: '16px' }}
        >
            <Box
                sx={{
                    width: '312px',
                    height: 'auto',
                    padding: '32px 14px 55px',
                    backgroundColor: '#2d2d2d',
                    color: 'white',
                    borderRadius: '8px',
                }}
            >
                {/* First Section */}

                <Typography
                    sx={{
                        fontSize: '20px',
                        marginBottom: '19px',
                        fontFamily: 'AppleSDGothicNeoH',
                    }}
                >
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
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontFamily: 'AppleSDGothicNeoEB',
                        }}
                    >
                        보험료
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontFamily: 'AppleSDGothicNeoEB',
                        }}
                    >
                        9,300원
                    </Typography>
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
                    <div className="dflex_center" style={{ gap: '7px' }}>
                        <img
                            src={images.whiteL}
                            alt=""
                            style={{ transform: 'translateY(-5px)' }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontFamily: 'AppleSDGothicNeoM',
                                color: '#ffffff',
                            }}
                        >
                            가입금액
                        </Typography>
                    </div>

                    <div className="dflex_center" style={{ gap: '3px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'AppleSDGothicNeoM',
                            }}
                        >
                            1억원
                        </Typography>
                        <MyToolTip text={[]} align="left" />
                    </div>
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
                    <div className="dflex_center" style={{ gap: '7px' }}>
                        <img
                            src={images.whiteL}
                            alt=""
                            style={{ transform: 'translateY(-5px)' }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontFamily: 'AppleSDGothicNeoM',
                                color: '#ffffff',
                            }}
                        >
                            건물
                        </Typography>
                    </div>

                    <div className="dflex_center" style={{ gap: '3px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'AppleSDGothicNeoM',
                            }}
                        >
                            3,000만원
                        </Typography>
                        <MyToolTip text={[]} align="left" />
                    </div>
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
                    <div className="dflex_center" style={{ gap: '7px' }}>
                        <img
                            src={images.whiteL}
                            alt=""
                            style={{ transform: 'translateY(-5px)' }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontFamily: 'AppleSDGothicNeoM',
                                color: '#ffffff',
                            }}
                        >
                            시설 및 집기
                        </Typography>
                    </div>
                    <div className="dflex_center" style={{ gap: '3px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'AppleSDGothicNeoM',
                            }}
                        >
                            3,000만원
                        </Typography>
                        <MyToolTip text={[]} align="left" />
                    </div>
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
                    <div className="dflex_center" style={{ gap: '7px' }}>
                        <img
                            src={images.whiteL}
                            alt=""
                            style={{ transform: 'translateY(-5px)' }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontFamily: 'AppleSDGothicNeoM',
                                color: '#ffffff',
                            }}
                        >
                            재고자산
                        </Typography>
                    </div>
                    <div className="dflex_center" style={{ gap: '3px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'AppleSDGothicNeoM',
                            }}
                        >
                            3,000만원
                        </Typography>
                        <MyToolTip text={[]} align="left" />
                    </div>
                </Box>

                <Divider
                    sx={{
                        height: '1px',
                        backgroundColor: '#6d6d6d',
                        marginBottom: '42px',
                    }}
                />

                {/* Second Section */}

                <Typography
                    sx={{
                        fontSize: '20px',
                        marginBottom: '19px',
                        fontFamily: 'AppleSDGothicNeoH',
                    }}
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

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '19px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontFamily: 'AppleSDGothicNeoEB',
                        }}
                    >
                        보험료
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontFamily: 'AppleSDGothicNeoEB',
                        }}
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

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '24px',
                    }}
                >
                    <div className="dflex_center" style={{ gap: '7px' }}>
                        <img
                            src={images.whiteL}
                            alt=""
                            style={{ transform: 'translateY(-5px)' }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontFamily: 'AppleSDGothicNeoM',
                                color: '#ffffff',
                            }}
                        >
                            형태
                        </Typography>
                    </div>
                    <div className="dflex_center" style={{ gap: '3px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'AppleSDGothicNeoM',
                            }}
                        >
                            단독
                        </Typography>
                        <MyToolTip text={[]} align="left" />
                    </div>
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
                    <div className="dflex_center" style={{ gap: '7px' }}>
                        <img
                            src={images.whiteL}
                            alt=""
                            style={{ transform: 'translateY(-5px)' }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontFamily: 'AppleSDGothicNeoM',
                                color: '#ffffff',
                            }}
                        >
                            공급면적
                        </Typography>
                    </div>
                    <div className="dflex_center" style={{ gap: '5px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontFamily: 'AppleSDGothicNeoM',
                            }}
                        >
                            79m²
                        </Typography>
                        <MyToolTip text={[]} align="left" />
                    </div>
                </Box>
                <Divider
                    sx={{
                        height: '1px',
                        backgroundColor: '#6d6d6d',
                        marginBottom: '5px',
                    }}
                />
            </Box>
        </section>
    );
}
