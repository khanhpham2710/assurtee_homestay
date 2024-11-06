import React from 'react';
import { useLocation } from 'react-router-dom';

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
            {children}
        </div>
    );
}
