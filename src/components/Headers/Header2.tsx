import images from '../../assets/images';
import { Link } from 'react-router-dom';

export default function Header2({
    title,
    backTo,
}: {
    title: string;
    backTo: string;
}) {
    return (
        <div className="header0 dflex_center">
            <Link className="back_icon_header" to={backTo}>
                <img src={images.BackButton} alt="" />
            </Link>
            <p className="title-20">{title}</p>
        </div>
    );
}
