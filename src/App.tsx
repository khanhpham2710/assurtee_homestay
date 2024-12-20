import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import HomePage from './pages/HomePage/HomePage';
import './css/jquery-ui.min.css';
import './css/style.css';
import './css/swiper-bundle.min.css';
import { createContext, useContext, useState } from 'react';

export type GlobalContent = {
    global: boolean;
    setGlobal: (c: boolean) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
    global: false,
    setGlobal: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);

function App() {
    const [global, setGlobal] = useState<boolean>(false);

    return (
        <MyGlobalContext.Provider value={{ global, setGlobal }}>
            <Router>
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
                                    <div
                                        className={global ? 'popup-active' : ''}
                                    >
                                        <div
                                            className="wrap"
                                            style={{
                                                height: '100vh',
                                            }}
                                        >
                                            <div
                                                className={
                                                    global
                                                        ? 'scroll-dimmed'
                                                        : ''
                                                }
                                                style={{
                                                    overflowY: global
                                                        ? 'hidden'
                                                        : 'visible',
                                                }}
                                            ></div>
                                            <div className="wrap-inner">
                                                {Header}
                                                <Page />
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </MyGlobalContext.Provider>
    );
}

export default App;
