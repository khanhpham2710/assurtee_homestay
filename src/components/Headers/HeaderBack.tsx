import { Link } from 'react-router-dom';

export default function Header2({
    title,
    backTo,
}: {
    title: string;
    backTo: string;
}) {
    return (
        <header id="header" className="header">
            <div className="header-inner">
                <Link
                    to={backTo}
                    className="header-button-prev"
                    aria-label="이전"
                ></Link>
                <h1 className="header-title">{title}</h1>
            </div>
        </header>
    );
}
