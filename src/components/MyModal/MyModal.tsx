import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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

export type MyModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    appBarColor?: '#fff' | '#000';
    component: React.ReactNode;
};

export default function MyModal({
    open,
    setOpen,
    title,
    appBarColor = '#fff',
    component,
}: MyModalProps) {
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <AppBar
                    sx={{
                        position: 'relative',
                        boxShadow: 'none',
                    }}
                >
                    <Toolbar
                        className="dflex_center"
                        sx={{
                            height: '68px',
                            backgroundColor: appBarColor,
                            boxShadow: 'none',
                            position: 'relative',
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
                    </Toolbar>
                </AppBar>
                {component}
            </Dialog>
        </React.Fragment>
    );
}
