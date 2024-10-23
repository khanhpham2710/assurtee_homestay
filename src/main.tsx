import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './scss/main.scss';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './utils/redux/store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    </StrictMode>
);
