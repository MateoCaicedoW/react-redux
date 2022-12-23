import {createSlice} from "@reduxjs/toolkit";
import {tasks} from './../../db/data.js'
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: tasks,
    reducers: {
        addTask: (state, action) => {
            return [...state, action.payload]
        },

        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                 state.splice(state.indexOf(taskFound), 1)
            }
        },
        editTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload.id)
            if (taskFound) {
                taskFound.title = action.payload.title
                taskFound.description = action.payload.description
                taskFound.completed = action.payload.completed
            }
        },
        
        completeTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                taskFound.completed = !taskFound.completed
            }
        }
    }
})

export const {addTask, deleteTask, completeTask,editTask} = taskSlice.actions

export default taskSlice.reducer