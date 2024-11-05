import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import images from '../../assets/images';

type DialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setImage: React.Dispatch<React.SetStateAction<File | null>>;
};

const buttonStyle: React.CSSProperties = {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 24px',
    padding: '6px 20px',
    borderRadius: 120,
    backgroundColor: '#e7ecf3',
};

const fontStyle: React.CSSProperties = {
    fontFamily: 'AppleSDGothicNeoB',
    fontSize: 16,
    textAlign: 'left',
    color: '#333647',
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: 8,
        margin: 0,
        boxShadow: 'none',
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function UpLoadImageModal({
    open,
    setOpen,
    setImage,
}: DialogProps) {
    const libraryInputRef = React.useRef<HTMLInputElement | null>(null);
    const cameraInputRef = React.useRef<HTMLInputElement | null>(null);

    const handleCheck = () => {
        setOpen(false);
    };

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

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={() => setOpen(false)}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogContent
                    dividers
                    sx={{
                        padding: '0 !important',
                    }}
                >
                    <div
                        className="dflex_center flexColumn_item"
                        style={{
                            minWidth: 312,
                            width: '100%',
                            height: 230,
                            padding: '40px 24px 32px',
                            gap: '12px',
                            textAlign: 'center',
                        }}
                    >
                        <p
                            className="title-22"
                            style={{
                                lineHeight: '1.27',
                            }}
                        >
                            사진을 추가해 주세요.
                        </p>
                        <div style={buttonStyle} onClick={handleLibraryClick}>
                            <div className="dflex_center" style={{ gap: 8 }}>
                                <img src={images.Library} />
                                <p style={fontStyle}>사진 보관함</p>
                            </div>
                            <img src={images.ArrowIconRight} />
                        </div>
                        <div style={buttonStyle} onClick={handleCameraClick}>
                            <div className="dflex_center" style={{ gap: 8 }}>
                                <img src={images.Camera} />
                                <p style={fontStyle}>사진 찍기</p>
                            </div>
                            <img src={images.ArrowIconRight} />
                        </div>
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
                </DialogContent>
                <DialogActions
                    sx={{
                        padding: '0 !important',
                    }}
                >
                    <button
                        onClick={handleCheck}
                        style={{
                            minWidth: 312,
                            height: 50,
                            backgroundColor: '#333647',
                            fontSize: 16,
                            fontFamily: 'AppleSDGothicNeoH',
                            cursor: 'pointer',
                            lineHeight: 1.75,
                            color: '#fff',
                            border: 'none',
                            outline: 'none',
                        }}
                    >
                        닫기
                    </button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
