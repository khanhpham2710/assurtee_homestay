import { useNavigate, Link } from 'react-router-dom';

function HeaderMain() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <header
            id="header"
            className="header"
            style={{
                background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
        >
            <div className="header-inner">
                <h1 className="logo" onClick={handleClick}>
                    <span className="hidden">assuretee</span>
                </h1>

                <Link
                    to="/personal-infor"
                    className="dflex_center mainLogo_2 header_item_right"
                    style={{ textDecoration: 'none', gap: '5px' }}
                >
                    <p className="header-button">
                        가입확인<i className="ico ico-arrow"></i>
                    </p>
                </Link>
            </div>
        </header>
    );
}

export default HeaderMain;
