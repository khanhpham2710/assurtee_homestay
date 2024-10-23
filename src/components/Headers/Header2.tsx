import { Box, Typography } from '@mui/material';
import images from '../../assets/images';
import { useNavigate } from 'react-router-dom';

export default function Header2({ title }: { title: string }) {
    const navigate = useNavigate();

    return (
        <Box className="header0 dflex_center">
            <div className="back_icon_header" onClick={() => navigate(-1)}>
                <img src={images.cheroLeft} alt="" />
            </div>
            <Typography className="titleSmall">{title}</Typography>
        </Box>
    );
}
