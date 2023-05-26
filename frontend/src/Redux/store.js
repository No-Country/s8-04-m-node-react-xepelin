import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/es/storage'
import authSlice from './auth/authSlice'
export const rootReducer = combineReducers({
    //reducer
    user: authSlice,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);