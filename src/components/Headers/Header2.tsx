import images from '../../assets/images';
import { useNavigate } from 'react-router-dom';

export default function Header2({ title }: { title: string }) {
    const navigate = useNavigate();

    return (
        <div className="header0 dflex_center">
            <div className="back_icon_header" onClick={() => navigate(-1)}>
                <img src={images.cheroLeft} alt="" />
            </div>
            <h2 className="titleSmall">{title}</h2>
        </div>
    );
}
