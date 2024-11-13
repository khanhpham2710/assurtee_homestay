import { useNavigate } from 'react-router-dom';

function HomeHeader() {
    const navigate = useNavigate();

    return (
        <header id="header" className="header">
            <div className="header-inner">
                <a
                    href="#"
                    className="header-button-home"
                    aria-label="HOME"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}
                ></a>
                <div className="header-right">
                    <div className="tooltip">
                        <button
                            type="button"
                            className="tooltip-btn"
                            aria-label="비교견적 도움말"
                        ></button>
                        <span className="tooltip-content al-right">
                            본 사이트에서 안내되는 보험료는 보험사의 <br />
                            최종 청약 단계의 보험료와 충분히 다를 수 있습니다.
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeHeader;
