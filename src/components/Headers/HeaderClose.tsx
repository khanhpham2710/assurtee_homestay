import { useNavigate } from 'react-router-dom';

function HeaderClose({ title, backTo }: { title: string; backTo: string }) {
    const navigate = useNavigate();
    return (
        <header id="header" className="header">
            <div className="header-inner">
                <h1 className="header-title">{title}</h1>
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
