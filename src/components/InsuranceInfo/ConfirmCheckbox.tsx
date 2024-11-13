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
        <div className={checked ? 'btm-fixed' : 'btm-fixed is-active'}>
            <div className="tooltip-layer">
                <div className="tooltip is-show">
                    <div className="tooltip-content">
                        <label className="chk-box type-bg">
                            <input
                                type="checkbox"
                                className="chk-input"
                                name="chk-group"
                                onClick={handleCheck}
                            />
                            <span className="label">
                                <em>
                                    가입하는 보험의 보장내용/상품설명서,
                                    보험약관, <br />
                                    주요내용을 모두 확인하였습니다.
                                </em>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="btn-wrap">
                <button
                    type="button"
                    className="btn"
                    disabled={checked || !allFilled}
                    onClick={handleSubmit}
                >
                    가입하기
                </button>
            </div>
        </div>
    );
}

export default ConfirmCheckbox;
