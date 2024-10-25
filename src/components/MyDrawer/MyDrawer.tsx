import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import images from '../../assets/images';
import { BusinessType } from '../../utils/redux/infoSlice';

export type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    window?: () => Window;
    items: string[];
    handleChange: (key: keyof BusinessType, value: string) => void;
    variable: keyof BusinessType;
};

const buttonStyle: React.CSSProperties = {
    height: '50%',
    fontFamily: 'AppleSDGothicNeoM',
    fontSize: '16px',
    textAlign: 'left',
    color: '#000',
    backgroundColor: '#fff',
};

export default function MyDrawer(props: Props) {
    const { open, setOpen, window, items, handleChange, variable } = props;

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const toggleDrawer =
        () => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen((prev) => !prev);
        };

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const value = e.currentTarget.value;
        handleChange(variable, value);
        setOpen(false);
    }

    const list = () => (
        <div role="presentation">
            <div
                style={{
                    background: '#fff',
                    padding: '23px 30px 19px 24px',
                    borderBottom: '1px solid #ededed',
                }}
                className="dflex_spacebetween"
            >
                <h1 className="title_drawer">개인/법인을 선택해 주세요.</h1>
                <img
                    src={images.CloseButton}
                    onClick={toggleDrawer()}
                    alt="Close"
                />
            </div>
            <div
                style={{
                    height: 133,
                    padding: '24px 14px 24px 23px',
                }}
                className="dflex-column"
            >
                {items.map((temp, index) => (
                    <button
                        style={buttonStyle}
                        key={index}
                        value={temp}
                        onClick={handleClick}
                    >
                        {temp}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <SwipeableDrawer
                    container={container}
                    anchor={'bottom'}
                    open={open}
                    onClose={toggleDrawer()}
                    onOpen={toggleDrawer()}
                    sx={{
                        '& .MuiDrawer-paper': {
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                        },
                        zIndex: 2000,
                    }}
                >
                    {list()}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
