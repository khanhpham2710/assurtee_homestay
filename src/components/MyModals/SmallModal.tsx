import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box, SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';

const fontStyle: SxProps<Theme> = {
    p: {
        fontFamily: 'AppleSDGothicNeoM',
        fontSize: 16,
        lineHeight: 1.25,
        textAlign: 'center',
        color: '#000',
    },
    a: {
        fontFamily: 'AppleSDGothicNeoM',
        fontSize: 16,
        lineHeight: 1.25,
        textAlign: 'center',
        color: '#0068e2',
        textDecoration: 'underline',
    },
};

type DialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    description: React.ReactNode;
    textButton: string;
    handleClick: () => void;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: '8px',
        boxShadow: 'none',
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function SmallModal({
    open,
    setOpen,
    title,
    textButton,
    handleClick,
    description,
}: DialogProps) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
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
                            width: 312,
                            height: 162,
                            padding: '32px 24px 30px',
                            gap: '12px',
                            textAlign: 'center',
                        }}
                    >
                        <p
                            style={{
                                fontFamily: 'AppleSDGothicNeoH',
                                fontSize: 22,
                                lineHeight: '1.27',
                                color: '#000',
                            }}
                        >
                            {title}
                        </p>
                        <Box sx={fontStyle}>{description}</Box>
                    </div>
                </DialogContent>
                <DialogActions
                    sx={{
                        padding: '0 !important',
                    }}
                >
                    <button
                        onClick={() => {
                            setOpen(false);
                            handleClick();
                        }}
                        style={{
                            width: 312,
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
                        {textButton}
                    </button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
