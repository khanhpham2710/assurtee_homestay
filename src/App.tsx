import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import HomePage from './pages/HomePage/HomePage';
import WebForm from './components/WebForm/WebForm';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {routes.map((route) => {
                    const Page = route.component;
                    const Header = route.header;

                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <WebForm>
                                    {Header}
                                    <Page />
                                </WebForm>
                            }
                        />
                    );
                })}
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    );
}

// Define AppWrapper component with theme
function AppWrapper() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 620,
                md: 700,
                lg: 1100,
                xl: 1536,
            },
        },
    });

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Router>
    );
}

export default AppWrapper;
