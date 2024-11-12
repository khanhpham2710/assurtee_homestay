import React, { useState, useEffect } from 'react';
import { CustomInput, InputSection } from '../Input/CustomInput';
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
            if (screenWidth <= 620) {
                navigate('/business-infor');
            } else {
                navigate('/personal-infor');
            }
        }
    }

    return (
        <div
            className="dflex_center flexColumn_item fullWidth_item"
            style={{ marginTop: '30px' }}
        >
            <p
                className="titleH-24"
                style={{
                    marginBottom: '17px',
                    lineHeight: '28px',
                    textAlign: 'center',
                }}
            >
                사업자 등록번호 10자리를 <br /> 입력해 주세요.
            </p>

            <InputSection>
                <CustomInput
                    id="contractor"
                    type="text"
                    autoComplete="off"
                    style={{ textAlign: 'center', width: '312px' }}
                    onChange={(e) => {
                        setText(handleBusinessNumber(e, text));
                    }}
                    maxLength={12}
                    value={text}
                />
            </InputSection>
            <div className="option-button">
                <button
                    className={`button1 ${isValid ? 'active' : ''}`}
                    onClick={handleSubmit}
                    disabled={!isValid}
                >
                    확인
                </button>
            </div>
        </div>
    );
}
