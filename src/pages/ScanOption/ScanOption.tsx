import React, { useEffect, useState } from 'react';
import Question from '../../components/Questions/Question';
import Divider from '@mui/material/Divider';
import images from '../../assets/images';
import ScanImage_Main from '../../components/scanImage/scanImage_Main';
import ScanText from '../../components/scanText/scanText';
import MyModal, { ModalType } from '../../components/MyModal/MyModal';
import ScanImage_Process from '../../components/scanImage/scanImage_Process';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/store';

const ScanOption: React.FC = () => {
    const { sameAddress } = useSelector((state: RootState) => state.info);
    const items = ['예', '아니오'];
    const [item, setItem] = useState<string>(sameAddress ? '예' : '아니오');
    const [open, setOpen] = useState<boolean>(false);
    const [modal, setModal] = useState<ModalType>({
        title: '',
        appBarColor: '#fff',
        component: null,
    });

    useEffect(() => {
        const temp = sessionStorage.getItem('sameAddress');
        if (temp) {
            setItem(temp);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('sameAddress', item);
    }, [item]);

    const handleModalOpen = (component: React.ReactNode) => {
        setModal({
            title: '사업자등록번호 입력',
            appBarColor: '#fff',
            component,
        });
        setOpen(true);
    };

    return (
        <div
            className="fullWidth_item"
            style={{
                padding: '0 24px',
                marginTop: '16px',
                backgroundColor: '#f6f7f9',
            }}
        >
            <Question<string>
                title="사업자등록 주소지와 보험 가입 대상 민박업 운영 주소지가 동일하나요?"
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
                    onClick={() => handleModalOpen(<ScanText />)}
                >
                    <img src={images.ScanText} alt="사업자등록번호 직접입력" />
                    <p
                        className="titleMini"
                        style={{
                            backgroundColor: 'transparent',
                            lineHeight: '22px',
                        }}
                    >
                        <span>
                            사업자등록번호 <br /> 직접입력
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
                    onClick={() => handleModalOpen(<ScanImage_Main />)}
                >
                    <img
                        src={images.ScanImage}
                        alt="사업자등록번호 촬영(스캔)입력"
                    />
                    <p
                        className="titleMini"
                        style={{
                            backgroundColor: 'transparent',
                            lineHeight: '22px',
                        }}
                    >
                        <span>
                            사업자등록증 <br /> 촬영(스캔)입력
                        </span>
                    </p>
                </div>
            </section>

            <MyModal
                open={open}
                setOpen={setOpen}
                title={modal.title}
                component={modal.component}
                appBarColor={modal.appBarColor}
            />

            <section style={{ marginTop: '50px' }}>
                <ScanImage_Process />
            </section>
        </div>
    );
};

export default ScanOption;
