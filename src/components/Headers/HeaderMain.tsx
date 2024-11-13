import images from '../../assets/images';
import { Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

function HeaderMain() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <div
            style={{
                background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
                position: 'fixed',
                width: '100%',
                zIndex: '1',
                height: '68px',
            }}
        >
            <Box
                className="header1"
                sx={{
                    backgroundColor: 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'fixed',
                    top: '0',
                    zIndex: '1',
                    maxWidth: '100%',
                }}
            >
                <img
                    className="mainLogo"
                    src={images.AssurLogo}
                    onClick={handleClick}
                />

                <Link
                    to="/personal-infor"
                    className="dflex_center mainLogo_2 header_item_right"
                    style={{ textDecoration: 'none', gap: '5px' }}
                >
                    <p className="titleH-14" style={{ color: 'black' }}>
                        가입확인
                    </p>
                    <img src={images.ArrowIconRight} alt="" />
                </Link>
            </Box>
        </div>
    );
}

export default HeaderMain;
