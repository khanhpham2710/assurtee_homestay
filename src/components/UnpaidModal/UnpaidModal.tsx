import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { SxProps, Typography } from '@mui/material';
import { Theme } from '@emotion/react';

const style: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 312,
    height: 212,
    backgroundColor: '#fff',
    boxShadow: '24px',
    borderRadius: 8,
    overflow: 'hidden',
};

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

type ModalType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UnpaidModal({ open, setOpen }: ModalType) {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Open modal</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
                role="dialog"
            >
                <Fade in={open}>
                    <div
                        style={style}
                        className="dflex_spacebetween flexColumn_item"
                    >
                        <div
                            className="dflex_center flexColumn_item"
                            style={{
                                width: '100%',
                                height: 'calc(100% - 50px)',
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
                                <a href="tel:1533-1291">1533-1291</a>로 <br />
                                문의 주시기 바랍니다.
                            </Typography>
                        </div>
                        <button
                            onClick={handleClose}
                            style={{
                                height: 50,
                                backgroundColor: '#333647',
                                width: '100%',
                                fontSize: 16,
                                fontFamily: 'AppleSDGothicNeoH',
                                cursor: 'pointer',
                                lineHeight: 1.75,
                                color: '#fff',
                            }}
                        >
                            확인
                        </button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
