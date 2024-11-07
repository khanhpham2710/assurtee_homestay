import React, { useEffect, useState, useCallback } from 'react';
import Divider from '@mui/material/Divider';
import Question from '../../components/Questions/Question';
import images from '../../assets/images';
import ScanImage_Main from '../../components/Options/scanImage_Main';
import FillOption from '../../components/Options/FillOption';
import FullPageModal, {
    ModalType,
} from '../../components/MyModals/FullPageModal';
import { useAppSelector } from '../../utils/hooks/reduxHooks';

const ScanOption: React.FC = () => {
    const { sameAddress } = useAppSelector((state) => state.info);

    const [item, setItem] = useState<string>(sameAddress ? '예' : '아니오');
    const [open, setOpen] = useState<boolean>(false);
    const [modal, setModal] = useState<ModalType>({
        title: '',
        appBarColor: '#fff',
        component: null,
    });

    useEffect(() => {
        const temp = sessionStorage.getItem('sameAddress');
        if (temp) setItem(temp);
    }, []);

    useEffect(() => {
        sessionStorage.setItem('sameAddress', item);
    }, [item]);

    const openModal = useCallback(
        (component: React.ReactNode, title: string) => {
            setModal({
                title,
                appBarColor: '#fff',
                component,
            });
            setOpen(true);
        },
        []
    );

    const items = ['예', '아니오'];

    return (
        <div
            className="fullWidth_item"
            style={{ padding: '0 24px', marginTop: '16px' }}
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
                <ItemDetailBox
                    imgSrc={images.FillOption}
                    title="사업자등록번호 직접입력"
                    onClick={() =>
                        openModal(<FillOption />, '사업자등록번호 입력')
                    }
                />

                <ItemDetailBox
                    imgSrc={images.ScanOption}
                    title="사업자등증 촬영(스캔)입력"
                    onClick={() =>
                        openModal(
                            <ScanImage_Main setModal={setModal} />,
                            '사업자등록번호 입력'
                        )
                    }
                />
            </section>

            <FullPageModal
                open={open}
                setOpen={setOpen}
                title={modal.title}
                component={modal.component}
                appBarColor={modal.appBarColor}
            />
        </div>
    );
};

interface ItemDetailBoxProps {
    imgSrc: string;
    title: string;
    onClick: () => void;
}

function ItemDetailBox({ imgSrc, title, onClick }: ItemDetailBoxProps) {
    return (
        <div
            className="item-detail-box"
            style={{
                width: '151px',
                height: '151px',
                backgroundColor: '#e7ecf3',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <img src={imgSrc} alt={title} />
            <p
                className="titleH-18"
                style={{ backgroundColor: 'transparent', lineHeight: '22px' }}
            >
                <span>{title}</span>
            </p>
        </div>
    );
}

export default ScanOption;
