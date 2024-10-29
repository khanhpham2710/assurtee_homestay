import React, { useState } from 'react';
import { CustomInput, InputSection } from '../Input/CustomInput';

export default function ScanText() {
    const [text, setText] = useState<string>('');

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key == 'Backspace') {
            const newText = text.slice(0, -1);
            setText(newText);
        } else if (text.length === 3 || text.length === 6) {
            const newText = text + '-' + e.key;
            setText(newText);
            // } else if (){
            //     setText(text + e.key);
            // }
        }
    }

    return (
        <section>
            <div
                className="dflex_center flexColumn_item fullWidth_item"
                style={{ marginTop: '30px' }}
            >
                <p
                    className="titleLarge"
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
                        onKeyDown={handleKeyDown}
                        maxLength={12}
                        value={text}
                    />
                </InputSection>

                <button
                    className="button1 active"
                    style={{ position: 'absolute', bottom: '30px' }}
                >
                    확인
                </button>
            </div>
        </section>
    );
}
