import React, { useEffect, useState } from 'react';
import Question from '../../components/Questions/Question';
import ScanImage_Main from '../../components/Options/scanImage_Main';
import FillOption from '../../components/Options/FillOption';
import FullPageModal, {
    ModalType,
} from '../../components/MyModals/FullPageModal';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { updateInfo } from '../../utils/redux/infoSlice';

const ScanOption: React.FC = () => {
    const { sameAddress } = useAppSelector((state) => state.info);
    const dispatch = useAppDispatch();

    const [item, setItem] = useState<string>(sameAddress ? '예' : '아니오');
    const [open, setOpen] = useState<boolean>(false);
    const [modal, setModal] = useState<ModalType>({
        title: '',
        appBarColor: '#fff',
        component: null,
    });

    useEffect(() => {
        dispatch(
            updateInfo({
                sameAddress: item == '예' ? true : false,
            })
        );
    }, [item]);

    function openModal(component: React.ReactNode, title: string) {
        setModal({
            title,
            appBarColor: '#fff',
            component,
        });
        setOpen(true);
        dispatch(
            updateInfo({
                businessNumber: '',
            })
        );
    }

    const items = ['예', '아니오'];

    return (
        <div className="container container-page" id="container">
            <section className="section">
                <Question<string>
                    title="사업자등록 주소지와 보험 가입 대상 민박업 운영 주소지가 동일하나요?"
                    item={item}
                    items={items}
                    setItem={setItem}
                />
                <div className="btn-wrap link-group">
                    <a
                        href="#"
                        className="link btn-doc-register"
                        onClick={(e) => {
                            e.preventDefault();
                            openModal(<FillOption />, '사업자등록번호 입력');
                        }}
                    >
                        사업자등록번호 <br />
                        직접입력
                    </a>

                    <a
                        href="#"
                        className="link btn-doc-scan only-mobile-fx"
                        onClick={(e) => {
                            e.preventDefault();
                            openModal(
                                <ScanImage_Main setModal={setModal} />,
                                '사업자등록번호 입력'
                            );
                        }}
                    >
                        사업자등록증 <br />
                        촬영(스캔)입력
                    </a>

                    <a
                        href="#"
                        className="link btn-doc-scan only-pc-fx"
                        onClick={(e) => {
                            e.preventDefault();
                            openModal(
                                <ScanImage_Main setModal={setModal} />,
                                '사업자등록번호 입력'
                            );
                        }}
                    >
                        촬영한 <br />
                        사업자등록증 등록
                    </a>
                </div>
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

export default ScanOption;
