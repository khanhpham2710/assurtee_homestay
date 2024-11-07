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
import { Box } from '@mui/material';

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
                    line1="사업자등록번호"
                    line2="직접입력"
                    onClick={() =>
                        openModal(<FillOption />, '사업자등록번호 입력')
                    }
                />

                <ItemDetailBox
                    imgSrc={images.ScanOption}
                    line1="사업자등증"
                    line2="촬영(스캔)입력"
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
    line1: string;
    line2: string;
    onClick: () => void;
}

function ItemDetailBox({ imgSrc, line1, line2, onClick }: ItemDetailBoxProps) {
    return (
        <Box
            className="item-detail-box"
            sx={{
                width: {
                    xs: '151px',
                    sm: '100%',
                },
                height: '151px',
                backgroundColor: '#e7ecf3',
                cursor: 'pointer',
                padding: '0 20px',
            }}
            onClick={onClick}
        >
            <img src={imgSrc} />
            <p
                className="titleH-18"
                style={{ backgroundColor: 'transparent', lineHeight: '22px' }}
            >
                {line1} <br /> {line2}
            </p>
        </Box>
    );
}

export default ScanOption;
