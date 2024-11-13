import { useNavigate } from 'react-router-dom';

function HeaderClose({ backTo }: { backTo: string }) {
    const navigate = useNavigate();
    return (
        <header id="header" className="header">
            <div className="header-inner">
                <h1 className="header-title">가입 내용 수정</h1>
                <button
                    type="button"
                    className="header-button-close"
                    aria-label="닫기"
                    onClick={() => navigate(backTo)}
                ></button>
            </div>
        </header>
    );
}

export default HeaderClose;
