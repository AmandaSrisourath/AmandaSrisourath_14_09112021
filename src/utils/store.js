import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/createEmployee/employeeSlice';

const reducers = combineReducers({
    employee: userReducer,
});

export const store = configureStore({
    reducer: reducers,
});