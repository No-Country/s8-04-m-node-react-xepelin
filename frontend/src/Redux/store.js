import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/es/storage'
import authSlice from './auth/authSlice'
import companySlice from './auth/companySlice'
console.log(authSlice, 'authSlice')
export const rootReducer = combineReducers({
    //reducer
    user: authSlice,
    company: companySlice
});
console.log(rootReducer, "rootReducer")
const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
console.log(persistedReducer, "persistentReducer")
export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);