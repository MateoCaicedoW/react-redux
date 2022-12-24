import { createSlice } from "@reduxjs/toolkit";

const emptyUsers = [];

export const userSlice = createSlice({
    name: "users",
    initialState: emptyUsers,
    reducers: {
        getUsers: (state, action) => {
            state = action.payload;
            return state;
        },
        createUserState : (state, action) => {
            [...state, action.payload]
        },
        editUserState : (state, action) => {
            state = action.payload;
            return state;
        },
    },
})

export const {getUsers, createUserState, editUserState} = userSlice.actions
export default userSlice.reducer