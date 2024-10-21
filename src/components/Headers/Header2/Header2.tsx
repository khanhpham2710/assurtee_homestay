import React from 'react';
import { Box, Typography } from '@mui/material';
import cheroLeft from "/Image/charon_left.png"
export default function Header2() {
    return (
        <Box className = "header0 " sx = {{position : "relative"}}>
            <div className="back_icon_header">
                <img src={cheroLeft} alt="" />
            </div>
            <Typography className="header2 titleSmall">
            주택 정보 입력
            </Typography>
        </Box>
    );
}
