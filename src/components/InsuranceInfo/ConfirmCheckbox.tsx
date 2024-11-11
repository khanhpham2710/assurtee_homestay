import images from '../../assets/images';
import { useState } from 'react';

type Props = {
    handleSubmit: () => void;
    allFilled: boolean;
};

function ConfirmCheckbox({ handleSubmit, allFilled }: Props) {
    const [checked, setChecked] = useState<boolean>(true);

    const handleCheck = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div id="insurance-info-button">
            <div
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
                    가입하는 보험의 보장내용/상품설명서, 보험약관, 주요내용을
                    모두 확인하였습니다.
                </p>
            </div>
            <button
                className={`insurance-info-button ${checked && allFilled ? 'active' : ''}`}
                disabled={!checked && !allFilled}
                onClick={handleSubmit}
            >
                가입하기
            </button>
        </div>
    );
}

export default ConfirmCheckbox;
