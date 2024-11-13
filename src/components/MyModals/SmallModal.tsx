import * as React from 'react';
import { useGlobalContext } from '../../App';

type DialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    description: React.ReactNode;
    textButton: string;
    handleClick: () => void;
};

export default function SmallModal({
    open,
    setOpen,
    title,
    textButton,
    handleClick,
    description,
}: DialogProps) {
    const { setGlobal } = useGlobalContext();

    React.useEffect(() => {
        setGlobal(open);
    }, []);

    return (
        <div
            className={open ? 'popup-wrap is-active' : 'popup-wrap'}
            data-popup-type="layer"
        >
            <div className="popup-inner">
                <div className="popup-content">
                    <h1 className="popup-title">{title}</h1>
                    <div className="popup-text">{description}</div>
                </div>
                <div className="popup-btn-wrap">
                    <a
                        href="#"
                        className="btn"
                        data-role="layer-close"
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                            setOpen(false);
                            setGlobal(false);
                        }}
                    >
                        {textButton}
                    </a>
                </div>
            </div>
        </div>
    );
}
