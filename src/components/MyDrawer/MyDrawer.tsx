import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const drawerBleeding = 70;

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    window?: () => Window;
}

const Root = styled('div')(() => ({
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
}));

const buttonStyle: React.CSSProperties = {
    height: '50%',
    fontFamily: 'AppleSDGothicNeoM',
    fontSize: '16px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '3',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000',
    backgroundColor: '#fff',
};

export default function MyDrawer(props: Props) {
    const { open, setOpen, window } = props;

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `133px`,
                        overflow: 'visible',
                        padding: '13px 0 23px 24px',
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        height: drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        background: '#fff',
                        right: 0,
                        left: 0,
                        padding: '23px 30px 19px 24px',
                        borderBottom: '1px solid #ededed',
                    }}
                    className="dflex_spacebetween"
                >
                    <h1 className="title_drawer">개인/법인을 선택해 주세요.</h1>
                    <p>X</p>
                </div>
                <div
                    style={{
                        height: '100%',
                        overflow: 'hidden',
                    }}
                    className="dflex-column"
                >
                    <button style={buttonStyle}>개인</button>
                    <button style={buttonStyle}>법인</button>
                </div>
            </SwipeableDrawer>
        </Root>
    );
}
