import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import images from '../../assets/images';

type Props<T> = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    window?: () => Window;
    items: string[];
    handleChange: (key: keyof T, value: string) => void;
    variable: keyof T;
};

function MyDrawer<T>({
    open,
    setOpen,
    window,
    items,
    handleChange,
    variable,
}: Props<T>) {
    const container =
        window !== undefined ? () => window().document.body : undefined;

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
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

    const handleClick = (value: string) => {
        handleChange(variable, value);
        setOpen(false);
    };

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
                    onClick={toggleDrawer}
                    alt="Close"
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <div
                style={{ height: 133, padding: '24px 14px 24px 23px' }}
                className="dflex-column"
            >
                {items.map((item, index) => (
                    <button
                        key={index}
                        style={{
                            height: '50%',
                            fontFamily: 'AppleSDGothicNeoM',
                            fontSize: '16px',
                            textAlign: 'left',
                            color: '#000',
                            backgroundColor: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <SwipeableDrawer
            container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
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
    );
}

export default MyDrawer;
