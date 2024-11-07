import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { SxProps, Theme } from '@mui/material';

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
                maxWidth: '620px',
                margin: '0 auto',
                boxShadow: 'none',
            }}
            BackdropProps={{
                style: {
                    backgroundColor: 'transparent',
                },
            }}
            PaperProps={{
                sx: {
                    boxShadow: 'none',
                },
            }}
        >
            <AppBar
                className="dflex_center"
                sx={{
                    position: 'relative',
                    boxShadow: 'none',
                    backgroundColor: appBarColor,
                    height: 'var(--header-height)',
                    padding: '0px !important',
                }}
            >
                <p
                    id="modal-title"
                    className="titleH-20"
                    style={{
                        color: appBarColor === '#fff' ? '#000' : '#fff',
                    }}
                >
                    {title}
                </p>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{
                        color: appBarColor === '#fff' ? '#000' : '#fff',
                        position: 'absolute',
                        right: '24px',
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </AppBar>
            {component}
        </Dialog>
    );
}
