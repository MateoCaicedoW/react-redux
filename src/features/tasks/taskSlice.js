import { createSlice} from "@reduxjs/toolkit";
import {tasks} from './../../db/data.js'
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: tasks,
    reducers: {
        addTask: (state, action) => {
            return [...state, action.payload]
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        completeTask: (state, action) => {
            state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
            // return state.map(task => {
            //     if (task.id === action.payload) {
            //         return {
            //             ...task,
            //             completed: !task.completed
            //         }
            //     }
            //     return task
            // })
        }
    }
})

export const {addTask, deleteTask, completeTask} = taskSlice.actions

export default taskSlice.reducer