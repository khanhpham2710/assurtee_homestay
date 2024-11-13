import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { IconButton, SxProps, Theme } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export type ModalType = {
    title: string;
    appBarColor?: '#fff' | '#000';
    component: React.ReactNode;
    style?: SxProps<Theme>;
};

export type MyModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & ModalType;

export default function FullPageModal({
    open,
    setOpen,
    title,
    appBarColor = '#fff',
    component,
    style,
}: MyModalProps) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            sx={{
                ...style,
                width: '100%',
                maxWidth: 'calc(var(--webContainerWidth) + 3px)',
                margin: '0 auto',
                boxShadow: 'none',
                transform: {
                    sx: 'translateX(0)',
                    md: 'translateX(-8px)',
                },
            }}
            slotProps={{
                backdrop: {
                    style: {
                        backgroundColor: 'transparent',
                    },
                },
            }}
            PaperProps={{
                sx: {
                    boxShadow: 'none',
                },
            }}
        >
            <AppBar
                sx={{
                    position: 'relative',
                    boxShadow: 'none',
                }}
            >
                <header id="header" className="header">
                    <div
                        className="header-inner"
                        style={{ backgroundColor: appBarColor }}
                    >
                        <h1
                            className="header-title"
                            style={{
                                color: appBarColor === '#fff' ? '#000' : '#fff',
                            }}
                        >
                            {title}
                        </h1>
                        <IconButton
                            onClick={handleClose}
                            aria-label="close"
                            sx={{
                                position: 'absolute',
                                right: '10px',
                            }}
                            className={
                                appBarColor === '#fff'
                                    ? ''
                                    : 'wrap-camera bg-none'
                            }
                        >
                            <button
                                type="button"
                                className="header-button-close"
                                aria-label="닫기"
                            ></button>
                        </IconButton>
                    </div>
                </header>
            </AppBar>
            {component}
        </Dialog>
    );
}
