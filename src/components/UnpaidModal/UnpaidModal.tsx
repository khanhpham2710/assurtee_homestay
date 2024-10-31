import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { SxProps, Typography } from '@mui/material';
import { Theme } from '@mui/system';
import { styled } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';

const fontStyle: SxProps<Theme> = {
    fontFamily: 'AppleSDGothicNeoM',
    fontSize: 16,
    lineHeight: 1.25,
    textAlign: 'center',
    color: '#000',
    '& a': {
        color: '#0068e2',
        textDecoration: 'underline',
    },
};

type DialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs({ open, setOpen }: DialogProps) {
    const handleCheck = () => {
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{
                    padding: 0,
                }}
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
                            결제가 완료되지 않았습니다.
                        </p>
                        <Typography
                            id="transition-modal-description"
                            sx={fontStyle}
                        >
                            계속해서 문제가 발생할 경우 <br />
                            어슈어티 고객센터{' '}
                            <a href="tel:1533-1291">1533-1291</a>
                            로 <br />
                            문의 주시기 바랍니다.
                        </Typography>
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
                        확인
                    </button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
