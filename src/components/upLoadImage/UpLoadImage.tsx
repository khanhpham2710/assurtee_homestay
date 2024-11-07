import React, { CSSProperties, useEffect, useState } from 'react';
import images from '../../assets/images';
import { useAppSelector, useAppDispatch } from '../../utils/hooks/reduxHooks';
import { updateInfo } from '../../utils/redux/infoSlice';
import UpLoadModal from '../UpLoadModal/UpLoadModal';

export default function UploadImage({ style }: { style?: CSSProperties }) {
    const info = useAppSelector((state) => state.info);
    const dispatch = useAppDispatch();
    const [image, setImage] = useState<File | null>(info.image || null);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        dispatch(updateInfo({ image }));
    }, [image]);

    const fontStyle: React.CSSProperties = {
        fontFamily: 'AppleSDGothicNeoB',
        fontSize: 14,
        lineHeight: 1.29,
        textAlign: 'center',
        color: '#000',
    };

    const buttonStyle: React.CSSProperties = {
        width: 150,
        height: 50,
        borderRadius: 120,
        backgroundColor: '#e7ecf3',
        fontFamily: 'AppleSDGothicNeoB',
        fontSize: 14,
        color: '#333647',
        cursor: 'pointer',
    };

    return (
        <div style={style}>
            {image === null ? (
                <div
                    style={{
                        height: '136px',
                        width: '100%',
                        borderRadius: '8px',
                        border: 'solid 1px #e0e0e0',
                        backgroundColor: '#fff',
                        flexDirection: 'column',
                    }}
                    className="dflex_center"
                >
                    <div>
                        <p style={fontStyle}>설치 되어 있는</p>
                        <p style={fontStyle}>
                            스프링쿨러 사진을 추가해 주세요.
                        </p>
                        <img
                            src={images.ImageIcon}
                            alt=""
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                display: 'block',
                                margin: '8px auto',
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div
                    className="dflex_center"
                    style={{
                        width: '100%',
                        aspectRatio: '20 / 9',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        border: 'solid 1px #e0e0e0',
                    }}
                >
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded"
                        style={{
                            maxWidth: '100%',
                            display: 'block',
                        }}
                    />
                </div>
            )}

            <div
                className="dflex_center"
                style={{
                    gap: '12px',
                    width: '100%',
                    marginTop: 16,
                }}
            >
                <button style={buttonStyle} onClick={() => setOpen(true)}>
                    사진추가
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => {
                        setImage(null);
                        setOpen(false);
                    }}
                >
                    항목제거
                </button>
            </div>
            <UpLoadModal open={open} setOpen={setOpen} setImage={setImage} />
        </div>
    );
}
