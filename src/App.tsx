import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import { useLocation } from 'react-router-dom';
function App() {
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
                backgroundColor: getBackgroundColor(location.pathname),
                minHeight: '100vh',
            }}
        >
            <Routes>
                {routes.map((route) => {
                    const Page = route.component;
                    const Header = route.header;

                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <>
                                    {Header}
                                    <Page />
                                </>
                            }
                        />
                    );
                })}
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
