import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
