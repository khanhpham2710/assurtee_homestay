import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import images from '../../assets/images';

type Props<T> = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    window?: () => Window;
    items: [string, string];
    handleChange: (key: keyof T, value: string) => void;
    variable: keyof T;
    title: string;
};

function MyDrawer<T>({
    open,
    setOpen,
    window,
    items,
    handleChange,
    variable,
    title,
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
                <p className="title_drawer">{title}</p>
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
                    width: '100%',
                    maxWidth: 620,
                    margin: '0 auto',
                },
                zIndex: 2000,
            }}
        >
            {list()}
        </SwipeableDrawer>
    );
}

export default MyDrawer;
