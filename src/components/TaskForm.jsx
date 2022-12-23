import { useState, useEffect } from 'react'
import {Field } from './Field'
import { Button } from './Button'
import { useDispatch, useSelector } from 'react-redux'
// import { addTask,editTask } from '../features/tasks/taskSlice.js'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams, Link } from 'react-router-dom'


function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: '',
        completed: false
    })
    

    //useDispatch is a hook that returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()


    const tasks = useSelector((state) => state.tasks);

    useEffect(() => {
        if (params.id) {
            const task = tasks.find((task) => task.id == params.id)
            setTask(task)
        }
    }, [params.id, tasks])


    const submitForm = (e) => {
        e.preventDefault()

        if (params.id) {
            dispatch(editTask(task))
            navigate('/')
            return
        }

        let newTask = {
            id: uuidv4(),
            title: task.title,
            description: task.description,
            completed: false,
        }
        //dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
        dispatch(addTask(newTask))
        setTask({
            title: '',
            description: ''
        })
        navigate('/')
    }



    return (
        <div className='max-w-md m-auto'>
            <form onSubmit={submitForm} className="bg-slate-700 rounded-lg p-10 mb-5">
                <h1 className="text-white text-2xl font-bold mb-3">Add Task</h1>
                <Field name="title" label="Title" value={task.title} handleChange={
                    (e) => {
                        setTask({
                            ...task,
                            title: e.target.value
                        })

                    }
                } />
                <div className='flex flex-col mb-6'>
                    <label className='text-white' htmlFor="description ">Description</label>
                    <textarea name="description" value={task.description}  className='rounded-md px-2 resize-none' rows="5"  onChange={
                        (e) => {
                            setTask({
                                ...task,
                                description: e.target.value
                            }) 
                        }
                    } />
                </div>
                <div className='flex gap-3'>
                    <Button name="Send" type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md" />
                    <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</Link>
                </div>
                
            </form>
        </div>
    )
}

export default TaskForm
