import { useNavigate } from 'react-router-dom';

function CompletedPage() {
    const navigate = useNavigate();

    return (
        <div className="container container-page" id="container">
            <div className="msg-box">
                <section className="section">
                    <span className="msg-box-emoji">🎉</span>
                    <div className="msg-box-textbox">
                        <strong className="title">
                            보험 가입이 완료 되었습니다.
                        </strong>
                        <p className="text">
                            가입확인서는 입력하신
                            <br />
                            핸드폰 번호 카카오톡으로 보내드렸습니다.
                        </p>
                    </div>
                    <div className="btn-wrap type-col">
                        <a
                            href="#"
                            className="btn btn--square"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/detail/success');
                            }}
                        >
                            가입내역 확인
                        </a>
                    </div>

                    <div className="btn-wrap type-fx-btm">
                        <a
                            href="#"
                            className="btn btn--underline"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/');
                            }}
                        >
                            홈으로
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CompletedPage;
