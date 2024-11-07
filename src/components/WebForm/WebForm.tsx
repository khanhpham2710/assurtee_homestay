import React from 'react';
import { useLocation } from 'react-router-dom';
import images from '../../assets/images';

export default function WebForm({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const getBackgroundColor = (pathname: string) => {
        switch (pathname) {
            case '/':
                return '#ffffff';
            default:
                return '#f6f7f9';
        }
    };

    return (
        <div
            style={{
                width: '100%',
                maxWidth: 620,
                margin: '0 auto',
                backgroundColor: getBackgroundColor(location.pathname),
                minHeight: '100vh',
            }}
        >
            <img
                src={images.BackGroundBanner1}
                alt=""
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    width: '100vw',
                    zIndex: -1000,
                    objectFit: 'cover',
                }}
            />
            {children}
        </div>
    );
}
