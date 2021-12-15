import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
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
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);