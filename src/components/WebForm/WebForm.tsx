import React from 'react';
import images from '../../assets/images';

export default function WebForm({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: 620,
                margin: '0 auto',
                backgroundColor: '#f6f7f9',
                minHeight: '100vh',
            }}
        >
            <img
                src={images.FormBackground}
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
