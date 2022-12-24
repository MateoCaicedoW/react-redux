import { createSlice } from "@reduxjs/toolkit";

export const emptyErrors = {
    title: [],
    description: [],
    user_id: [],
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
