import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    infos: { id: '', firstName: '', lastName: '', dateOfBirth: '', startDate: '', street: '', city: '', state: '', zipCode: '', department: ''}
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setInfos: (state, action) => {
            state.infos = {
                ...state.infos,
                ...action.payload,
            };
        }
    },
});

export const { setInfos } = employeeSlice.actions;
export default employeeSlice.reducer;