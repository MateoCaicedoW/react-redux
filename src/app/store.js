import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "../features/tasks/taskSlice.js";
import usersReducer from "../features/users/userSlice.js";
import errorReducer from "../features/errors.js";
export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        users: usersReducer,
        errors: errorReducer,
    },
})