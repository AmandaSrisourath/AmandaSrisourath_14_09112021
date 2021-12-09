import { createSlice } from "@reduxjs/toolkit";
import { data, columns } from "../employeeList/data";

const initialState = {
    list: data,
    columnsList: columns
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.list = [
                ...state.list,
                action.payload,
            ];
        }
    },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;