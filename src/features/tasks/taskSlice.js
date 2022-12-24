import {createSlice} from "@reduxjs/toolkit";
const emptyTasks = []
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: emptyTasks,
    reducers: {
        getTasks: (state, action) => {
            state = action.payload;
            return state;
        },
        addTask: (state, action) => {
            [...state, action.payload]
        }
    }
})

export const {getTasks, addTask} = taskSlice.actions

export default taskSlice.reducer