import images from '../../assets/images/images';
import { Box } from '@mui/material';

function Header1() {
    return (
        <Box
            sx={{ height: '68px', width: '100%', px: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
            <img src={images.HomeIcon} />
            <img src={images.InfoIncon} />
        </Box>
    );
}

export default Header1;
