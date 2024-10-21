import { Box, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images';

function Header1() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <Box className="header1">
            <img src={images.HomeIcon} onClick={handleClick} />
            <img src={images.InfoIncon} />
        </Box>
    );
}

export default Header1;
