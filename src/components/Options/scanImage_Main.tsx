import React from 'react';
import { ModalType } from '../MyModals/FullPageModal';
import ScanImage_Process from './scanImage_Process';

type Props = {
    setModal: React.Dispatch<React.SetStateAction<ModalType>>;
};

export default function ScanImage_Main({ setModal }: Props) {
    return (
        <>
            <div className="container container-page" id="container">
                <section className="section">
                    <h2 className="title size-large mt30 only-mobile">
                        촬영을 위해 <br />
                        사업자등록증을 준비해 주세요.
                    </h2>

                    <h2 className="title size-large mt30 only-pc">
                        촬영한 사업자등록증을 <br />
                        준비해 주세요.
                    </h2>

                    <p className="title-desc">
                        기본 정보 입력을 위해 <br />
                        고객님의 사업자등록증이 필요해요.
                    </p>

                    <div className="camera-ready">
                        <span className="default-img">
                            <img
                                src="images/camera_scan.svg"
                                alt="사업자등록증 촬영"
                            />
                        </span>
                    </div>
                </section>
            </div>

            <div className="btm-btns">
                <div className="btn-wrap">
                    <button
                        type="button"
                        className="btn only-mobile-ifx"
                        onClick={() => {
                            setModal({
                                title: '사업자등록증 촬영',
                                appBarColor: '#000',
                                component: <ScanImage_Process />,
                            });
                        }}
                    >
                        사업자등록증 촬영하기
                    </button>

                    <button
                        type="button"
                        className="btn only-pc-ifx"
                        onClick={() => {
                            setModal({
                                title: '사업자등록증 촬영',
                                appBarColor: '#000',
                                component: <ScanImage_Process />,
                            });
                        }}
                    >
                        사업자등록증 올리기
                    </button>
                </div>
            </div>
        </>
    );
}
