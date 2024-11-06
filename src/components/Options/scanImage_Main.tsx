import React from 'react';
import images from '../../assets/images';
import { ModalType } from '../MyModals/FullPageModal';
import ScanImage_Process from './scanImage_Process';

type Props = {
    setModal: React.Dispatch<React.SetStateAction<ModalType>>;
};

export default function ScanImage_Main({ setModal }: Props) {
    return (
        <div
            className="dflex_center flexColumn_item "
            style={{ marginTop: '30px' }}
        >
            <p
                className="title-24"
                style={{ marginBottom: '17px', lineHeight: '28px' }}
            >
                촬영을 위해 사업자등록증을 <br /> 준비해 주세요.
            </p>
            <p
                className="title_description"
                style={{
                    wordBreak: 'break-word',
                    maxWidth: '320px',
                    lineHeight: '22px',
                }}
            >
                기본 정보 입력을 위해 <br /> 고객님의 사업자등록증이 필요해요.
            </p>

            <div className="" style={{ marginTop: '50px' }}>
                <img src={images.ScanDoc} alt="" />
            </div>
            <div className="option-button">
                <button
                    className="button1 active"
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
            </div>
        </div>
    );
}
