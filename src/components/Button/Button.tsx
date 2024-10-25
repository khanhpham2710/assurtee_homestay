import { Link } from 'react-router-dom';

export default function Button() {
    return (
        <div>
            <Link to="/scan-option">
                <button className="button_main">
                    <p>보험료 계산하기</p>
                </button>
            </Link>
        </div>
    );
}
