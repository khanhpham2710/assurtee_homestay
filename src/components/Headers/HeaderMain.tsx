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
            <div className="header_item_right">
                <Link
                    to="/personal-infor"
                    className="dflex_center mainLogo_2"
                    style={{ textDecoration: 'none', gap: '3px' }}
                >
                    <p className="titleMicro">가입확인</p>
                    <img src={images.backArrow} alt="" />
                </Link>
            </div>
        </Box>
    );
}

export default HeaderMain;
