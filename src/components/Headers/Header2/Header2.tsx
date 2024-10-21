import React from 'react';
import { Box, Typography } from '@mui/material';
import cheroLeft from "/Image/charon_left.png"
export default function Header2() {
    return (
        <Box className = "header0 dflex_center">
            <div className="back_icon_header">
                <img src={cheroLeft} alt="" />
            </div>
            <Typography className="titleSmall">
            주택 정보 입력
            </Typography>
        </Box>
    );
}
