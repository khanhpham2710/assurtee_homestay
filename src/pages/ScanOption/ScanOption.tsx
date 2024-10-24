import React, { useState } from 'react';
import Question from '../../components/Questions/Question';
import Divider from '@mui/material/Divider';
import images from '../../assets/images';
import ScanImage_Main from '../../components/scanImage/scanImage_Main';
import ScanText from '../../components/scanText/scanText';
import MyModal, { MyModalProps } from '../../components/MyModal/MyModal';

export default function ScanOption() {
    const items = ['예', '아니오'];
    const [item, setItem] = useState<string>(items[0]);
    const [open, setOpen] = useState<boolean>(false);

    const [modal, setModal] = useState<MyModalProps>({
        open: open,
        setOpen,
        title: '',
        appBarColor: '#fff',
        component: null,
    });

    return (
        <div
            className="fullWidth_item"
            style={{
                padding: '0 24px',
                marginTop: '16px',
                backgroundColor: '#f6f7f9 !important',
            }}
        >
            <Question
                title="사업자등록 주소지와 보험 가입 대상 민박업 운영 주소지가 동일하나요?"
                item={item}
                items={items}
                setItem={setItem}
            />

            <Divider className="divider_1" />

            <section
                className="fullWidth_item dflex_center"
                style={{ gap: '10px' }}
            >
                <div
                    className="item-detail-box"
                    style={{
                        width: '151px',
                        height: '151px',
                        backgroundColor: '#e7ecf3',
                    }}
                >
                    <img src={images.ScanText} alt="" />
                    <p
                        className="titleMini"
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <span>
                            사업자등록번호 <br />
                            직접입력
                        </span>
                    </p>
                </div>

                <div
                    className="item-detail-box"
                    style={{
                        width: '151px',
                        height: '151px',
                        backgroundColor: '#e7ecf3',
                    }}
                >
                    <img src={images.ScanImage} alt="" style={{}} />
                    <p
                        className="titleMini"
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <span>
                            사업자등증 <br />
                            촬영(스캔)입력
                        </span>
                    </p>
                </div>
            </section>
        </div>
    );
}
