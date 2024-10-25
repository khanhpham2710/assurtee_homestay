import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images';
import MyToolTip from '../MyTooltip/MyToolTip';

function Header1() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <Box className="header1">
            <img src={images.HomeIcon} onClick={handleClick} />
            <MyToolTip
                text={[
                    '본 사이트에서 안내되는 보험료는 보험사의',
                    '최종 청약 단계의 보험료와 충분히 다를 수 있습니다.',
                ]}
                color={'black'}
            />
        </Box>
    );
}

export default Header1;
