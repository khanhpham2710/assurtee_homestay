import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './infoSlice';
import  { saveToSessionStorageMiddleware } from "./infoSlice";

const store = configureStore({
    reducer: {
        info: infoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(saveToSessionStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface StatusRedux {
    error: unknown;
    status: string;
    success?: boolean;
}

export default store;
