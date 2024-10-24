import React from 'react';
import images from '../../assets/images';
import { Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
function HeaderMain() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <Box className="header1" sx={{ backgroundColor: 'transparent' }}>
            <img
                className="mainLogo"
                src={images.AssurLogo}
                onClick={handleClick}
            />
            <div className="header_item_right dflex_item gapMini mainLogo_2">
                <p className="titleMicro">가입확인</p>
                <img src={images.backArrow} alt="" />
            </div>
        </Box>
    );
}

export default HeaderMain;
