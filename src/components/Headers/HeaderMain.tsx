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
            <Link
                to="/personal-infor"
                className="dflex_center mainLogo_2 header_item_right"
                style={{ textDecoration: 'none', gap: '3px' }}
            >
                <p className="title-14">가입확인</p>
                <img src={images.ArrowIconRight} alt="" />
            </Link>
        </Box>
    );
}

export default HeaderMain;
