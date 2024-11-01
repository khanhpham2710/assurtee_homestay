import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './infoSlice';

const store = configureStore({
    reducer: {
        info: infoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface StatusRedux {
    error: unknown;
    status: string | number;
}

export default store;
