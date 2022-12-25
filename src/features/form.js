import { createSlice } from '@reduxjs/toolkit';

export const empty = {
    task: false,
    user: false
}
export const formSlice = createSlice({
    name: 'forms',
    initialState: empty,
    reducers: {
        setForm: (state, action) => {
            state = action.payload;
            return state;
        }, 
 
    }
})

export default formSlice.reducer;
export const {setForm } = formSlice.actions