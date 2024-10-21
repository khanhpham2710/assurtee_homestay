import images from '../../assets/images/images';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header1() {
    const navigate = useNavigate();

    function handleClick(){
        navigate('/')
    }

    return (
        <Box
            sx={{
                height: '68px',
                width: '100%',
                px: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <img src={images.HomeIcon} onClick={handleClick}/>
            <img src={images.InfoIncon} />
        </Box>
    );
}

export default Header1;
