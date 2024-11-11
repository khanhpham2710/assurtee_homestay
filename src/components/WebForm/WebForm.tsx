import React, { CSSProperties } from 'react';
import images from '../../assets/images';

export default function WebForm({
    children,
    style,
}: {
    children: React.ReactNode;
    style?: CSSProperties;
}) {
    return (
        <div style={style}>
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
            <div
                style={{
                    marginTop: 'var(--header-height)',
                }}
            >
                {children}
            </div>
        </div>
    );
}
