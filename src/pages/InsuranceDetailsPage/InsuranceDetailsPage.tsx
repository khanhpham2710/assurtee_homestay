import Download from '../../components/Download/Download';
import InsuranceDetailsAccordion from '../../components/InsuranceDetails/InsuranceDetailsAccordion';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SmallModal from '../../components/MyModals/SmallModal';

function InsuranceDetailsPage() {
    // const { success } = useAppSelector((state) => state.info);

    const { isSuccess } = useParams<{ isSuccess: string }>();
    const success: boolean = isSuccess === 'success';
    const navigate = useNavigate();

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className="container container-page" id="container">
                <section className="section">
                    <h2 className="sect-title fc-point">
                        {success ? '보호 중입니다!' : '가입 취소되었습니다.'}
                    </h2>
                    <span
                        className={
                            success
                                ? 'img-protection protection-ing'
                                : 'img-protection protection-cancel'
                        }
                    ></span>
                    <div className="title-box">
                        <div className="title-labels">
                            <span className="ci-img">
                                <img
                                    src="images/ci/logo_hyundai.png"
                                    alt="현대해상"
                                />
                            </span>
                        </div>
                        <p className="title">
                            현대해상화재보험 외국인관광도시민박보험
                        </p>
                        {success && (
                            <div className="btn-wrap type-col">
                                <Download
                                    text="가입확인서"
                                    href=""
                                    fileName=""
                                />
                                <Download
                                    text="가입확인서(영문)"
                                    href=""
                                    fileName=""
                                />
                            </div>
                        )}
                        <InsuranceDetailsAccordion />
                    </div>
                    <SmallModal
                        open={open}
                        setOpen={setOpen}
                        title="가입 취소"
                        description={
                            <>
                                <div className="popup-text">
                                    가입된 보험을 취소하시겠습니까?
                                </div>
                                <div className="popup-text">
                                    <a
                                        href="#"
                                        className="btn--underline btn--blue"
                                    >
                                        취소하기
                                    </a>
                                </div>
                            </>
                        }
                        textButton="유지하기"
                        handleClick={() => navigate('/detail/failed')}
                    />
                    <div className="btn-wrap last type-col">
                        <a
                            href="#"
                            className="btn btn--round btn--yellow w-sm"
                            onClick={() => {}}
                        >
                            1:1 카톡상담<i className="ico ico-arrow"></i>
                        </a>
                        {success && (
                            <a
                                href="javascript:popOpen(document.querySelector('.modal-cancel'))"
                                className="btn btn--round btn--orange w-sm"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                가입 취소
                            </a>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default InsuranceDetailsPage;
