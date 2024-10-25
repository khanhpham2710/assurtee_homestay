import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

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
};

export type MyModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & ModalType;

export default function MyModal({
    open,
    setOpen,
    title,
    appBarColor = '#fff',
    component,
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
        >
            <AppBar
                className="dflex_center"
                sx={{
                    position: 'relative',
                    boxShadow: 'none',
                    backgroundColor: appBarColor,
                    height: '68px',
                    padding: '0px !important',
                }}
            >
                <h2 id="modal-title" className="titleSmall">
                    {title}
                </h2>
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