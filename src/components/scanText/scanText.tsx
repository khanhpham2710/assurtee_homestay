import React from 'react';
import images from '../../assets/images';
import { useState } from 'react';
import { CustomInput, InputSection } from '../Input/CustomInput';

export default function ScanText() {
    return (
        <section>
            <div
                className="dflex_center flexColumn_item fullWidth_item"
                style={{ marginTop: '30px' }}
            >
                <p
                    className="titleLarge"
                    style={{ marginBottom: '17px', lineHeight: '28px' }}
                >
                    사업자 등록번호 10자리를 <br /> 입력해 주세요.
                </p>

                <InputSection>
                    <CustomInput
                        id="contractor"
                        type="text"
                        // value={form.contractor}
                        // onChange={(e) =>
                        //     handleChange('contractor', e.target.value)
                        // }
                        autoComplete="off"
                        // width={100%}
                        style={{ textAlign: 'center', width: '100%' }}
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
