import styled from 'styled-components';
import images from '../../assets/images';

const Container = styled.div`
    width: 312px;
    height: 68px;
    margin: 0 auto;
    padding: 18px;
    border-radius: 8px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.12);
    position: relative;
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

type Props = {
    checked: boolean;
    handleCheck: () => void;
};

function ConfirmCheckbox({ checked, handleCheck }: Props) {
    return (
        <Container
            onClick={handleCheck}
            className="dflex_center"
            style={{
                backgroundColor: checked ? '#fff0f3' : '#f0f2f7',
            }}
        >
            <img
                src={checked ? images.CheckBoxBlack : images.UnCheckBoxGrey}
                style={{ cursor: 'pointer' }}
            />
            <p className="orange-font">
                가입하는 보험의 보장내용/상품설명서, 보험약관, 주요내용을 모두
                확인하였습니다.
            </p>
        </Container>
    );
}

export default ConfirmCheckbox;
