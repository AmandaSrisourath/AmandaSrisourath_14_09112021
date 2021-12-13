import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import userReducer from '../pages/createEmployee/employeeSlice';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    employee: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore( {
    reducer: persistedReducer,
})

export const persistor = persistStore(store);