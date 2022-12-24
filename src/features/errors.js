import { createSlice } from "@reduxjs/toolkit";

export const emptyErrors = {
    email: [],
    first_name: [],
    last_name: [],
    password: [],
};

export const errorSlice = createSlice({
    name: 'error',
    initialState: emptyErrors,
    reducers: {
        setErrors: (state, action) => {
            state = action.payload;
            return state;
        }
    }

})

export default errorSlice.reducer;
export const {setErrors } = errorSlice.actions
