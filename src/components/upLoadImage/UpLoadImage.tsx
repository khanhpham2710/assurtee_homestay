import React, { CSSProperties, useEffect, useState } from 'react';
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

    return (
        <div style={{ marginTop: '0px' }}>
            {image === null ? (
                <div className="equip-photo">
                    <button
                        type="button"
                        className="equip-photo-btn"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        설치되어 있는 <br />
                        스프링쿨러 사진을 추가해 주세요.
                    </button>
                </div>
            ) : (
                <div
                    className="equip-photo-btn"
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

            <div className="equip-photo">
                <ul className="equip-photo-list">
                    <li>
                        <label className="rdo-box">
                            <input
                                type="checkbox"
                                className="rdo-input"
                                name="chk-group"
                            />
                            <span className="label img">
                                <img src="images/thumb_temp.png" alt="" />
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="rdo-box">
                            <input
                                type="checkbox"
                                className="rdo-input"
                                name="chk-group"
                            />
                            <span className="label img">
                                <img src="images/thumb_temp_wide.png" alt="" />
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="rdo-box">
                            <input
                                type="checkbox"
                                className="rdo-input"
                                name="chk-group"
                            />
                            <span className="label img">
                                <img src="images/thumb_temp.png" alt="" />
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="rdo-box">
                            <input
                                type="checkbox"
                                className="rdo-input"
                                name="chk-group"
                            />
                            <span className="label img">
                                <img src="images/thumb_temp.png" alt="" />
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="rdo-box">
                            <input
                                type="checkbox"
                                className="rdo-input"
                                name="chk-group"
                            />
                            <span className="label img">
                                <img src="images/thumb_temp.png" alt="" />
                            </span>
                        </label>
                    </li>
                </ul>
            </div>

            {/*list button*/}
            <div className="btn-wrap type-col">
                <button
                    className="btn btn--round"
                    onClick={() => setOpen(true)}
                >
                    사진추가
                </button>
                <button
                    className="btn btn--round"
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
