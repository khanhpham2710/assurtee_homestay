import images from '../../assets/images';

function Header3({ title }: { title: string }) {
    return (
        <div className="header0 dflex_center">
            <h2 className="titleSmall">{title}</h2>
            <div className="close_icon_header">
                <img src={images.CloseButton} alt="" />
            </div>
        </div>
    );
}

export default Header3;
