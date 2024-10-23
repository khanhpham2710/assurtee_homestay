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
        <Box className="header1">
            <img src={images.AssurLogo} onClick={handleClick} style={{width:"130px"}} />
            <div className="header_item_right dflex_item gapMini ">
                <p className='titleMicro'>가입확인</p>
                <img src={images.backArrow} alt="" />
            </div>
        </Box>
    );
}

export default HeaderMain;
