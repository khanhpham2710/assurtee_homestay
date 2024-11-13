import React, { useState, useEffect } from 'react';
import { handleBusinessNumber } from '../../utils/validation/number';
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../utils/redux/infoSlice';
import { useNavigate } from 'react-router-dom';

export default function ScanText() {
    const [text, setText] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setIsValid(/\d{3}-\d{2}-\d{5}/.test(text));
    }, [text]);

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (isValid) {
            await dispatch(
                updateInfo({
                    businessNumber: text,
                })
            );

            const screenWidth = window.innerWidth;
            navigate(
                screenWidth <= 620 ? '/business-infor' : '/personal-infor'
            );
        }
    }

    return (
        <>
            <div className="container container-page" id="container">
                <section className="section">
                    <p className="title size-large">
                        사업자 등록번호 10자리를 <br />
                        입력해 주세요.
                    </p>
                    <div className="form-wrap mt30 mb0">
                        <div className="form-list">
                            <div className="form-cont is-input">
                                <div className="form-item">
                                    <input
                                        type="text"
                                        className="txt-input al-center"
                                        id="inp01_01"
                                        onChange={(e) => {
                                            setText(
                                                handleBusinessNumber(e, text)
                                            );
                                        }}
                                        maxLength={12}
                                        value={text}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="btm-btns">
                <div className="btn-wrap">
                    <button
                        type="button"
                        className="btn"
                        onClick={handleSubmit}
                        disabled={!isValid}
                    >
                        확인
                    </button>
                </div>
            </div>
        </>
    );
}
