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
        createUser : (state, action) => {
            [...state, action.payload]
        }
    },
})

export const {getUsers, createUser } = userSlice.actions
export default userSlice.reducer