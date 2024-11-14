import * as React from 'react';
import { useGlobalContext } from '../../App';

type DialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setImage: React.Dispatch<React.SetStateAction<File | null>>;
};

export default function UpLoadModal({ open, setOpen, setImage }: DialogProps) {
    const libraryInputRef = React.useRef<HTMLInputElement | null>(null);
    const cameraInputRef = React.useRef<HTMLInputElement | null>(null);

    const handleLibraryClick = () => {
        libraryInputRef.current?.click();
    };

    const handleCameraClick = () => {
        cameraInputRef.current?.click();
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setImage(files[0]);
            setOpen(false);
        }
    };

    const { setGlobal } = useGlobalContext();

    React.useEffect(() => {
        setGlobal(open);
    }, [open]);

    return (
        <div
            className={open ? 'popup-wrap modal-photo is-active' : 'popup-wrap'}
            data-popup-type="layer"
        >
            <div className="popup-inner">
                <div className="popup-content">
                    <h1 className="popup-title">사진을 추가해 주세요.</h1>
                    <div className="link-list">
                        <button
                            type="button"
                            className="btn btn--round"
                            onClick={handleLibraryClick}
                        >
                            <span className="in-text">
                                <i className="ico-photobox"></i>사진 보관함
                            </span>
                            <i className="ico ico-arrow"></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn--round"
                            onClick={handleCameraClick}
                        >
                            <span className="in-text">
                                <i className="ico-camera"></i>사진 찍기
                            </span>
                            <i className="ico ico-arrow"></i>
                        </button>
                        <input
                            type="file"
                            ref={libraryInputRef}
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleFileSelect}
                        />
                        <input
                            type="file"
                            ref={cameraInputRef}
                            accept="image/*"
                            capture="environment"
                            style={{ display: 'none' }}
                            onChange={handleFileSelect}
                        />
                    </div>
                </div>
                <div className="popup-btn-wrap">
                    <a
                        href="#"
                        className="btn"
                        data-role="layer-close"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            setGlobal(false);
                        }}
                    >
                        닫기
                    </a>
                </div>
            </div>
        </div>
    );
}
