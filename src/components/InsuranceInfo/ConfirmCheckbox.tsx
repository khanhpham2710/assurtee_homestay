import styled from 'styled-components';
import { useCallback, useState } from 'react';
import images from '../../assets/images';
import { Typography } from '@mui/material';

const Container = styled.div`
    width: 312px;
    height: 68px;
    margin: 0 auto;
    padding: 18px;
    border-radius: 8px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.12);
    background-color: #fff0f3;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #fff0f3 transparent transparent transparent;
        z-index: 1;
    }
`;

function ConfirmCheckbox() {
    const [checked, setChecked] = useState(true);

    const handleCheck = useCallback((event : React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(event.target.checked);
    },[])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Container>
            <img src={checked ? images.CheckBox : images.UnCheckBox} />
            <Typography
                sx={{
                    fontFamily: 'SFProText',
                    fontSize: '12px',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '1.33',
                    letterSpacing: '-0.41px',
                    textAlign: 'left',
                    color: '#ff5400',
                }}
            >
                가입하는 보험의 보장내용/상품설명서, 보험약관, 주요내용을 모두
                확인하였습니다.
            </Typography>
        </Container>
    );
}

export default ConfirmCheckbox;
