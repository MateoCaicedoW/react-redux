import { useState, useEffect } from 'react'
import {Field } from '../Field'
import { Button } from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, getTasks } from '../../features/tasks/taskSlice'
import { createTasks, getTask, updateTask } from '../../api/tasks' 
import { v4 as uuidv4, NIL } from 'uuid'

import { useNavigate, useParams, Link } from 'react-router-dom'
import { fetcher } from '../../api/fetcher'
import { setErrors,emptyErrors } from '../../features/tasks/errorsTasks'
import { TextArea } from '../TextArea'
import { SelectInput } from '../SelectInput'
import { Header } from '../Header'


function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: '',
        status: false,
        user_id: NIL
    })
    

    //useDispatch is a hook that returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const form = useSelector((state) => state.forms)
    const tasks = useSelector((state) => state.tasks);
    const users = useSelector((state) => state.users);

    useEffect(() => {
        if (params.id) {
            const get = async () => {
                const task = await getTask(params.id)
                setTask(task.data)
                return
            }
            get()
        }
    }, [params.id, tasks])


    const  submitForm = async (e) => {
        e.preventDefault()

        if (params.id) {
        
            const res = await updateTask(task)
            if (res.status !== 200) {
                dispatch(setErrors(res.data))
                return
            }
            dispatch(setErrors(emptyErrors))

            const tasks = await fetcher('tasks')
            dispatch(getTasks(tasks))
            navigate('/tasks')
            return
        }


        //dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
        dispatch(addTask(task))

        const res = await createTasks(task)
        if (res.status !== 200) {
            dispatch(setErrors(res.data))
            return
        }
        dispatch(setErrors(emptyErrors))


        setTask({
            title: '',
            description: '',
            status: false,
            user_id: ''
        })

   
        const tasks = await fetcher('tasks')
        dispatch(getTasks(tasks))

        navigate('/tasks')
     
    }



    return (
        <Header>
            <div className='max-w-md m-auto'>
                <form onSubmit={submitForm} className="bg-slate-700 rounded-lg p-10 mb-5">
                    <h1 className="text-white text-2xl font-bold mb-3">{form.task ? 'Edit Task' : 'Add Task'}</h1>
                    <Field name="title" label="Title" value={task.title} handleChange={
                        (e) => {
                            setTask({
                                ...task,
                                title: e.target.value
                            })

                        }
                    } />

                    <TextArea className="rounded-md px-2 resize-none" rows="5" label="Description" name="description" value={task.description}  handleChange={
                        (e) => {
                            setTask({
                                ...task,
                                description: e.target.value
                            }) 
                        }
                    } />

                    <SelectInput name="user_id" className="rounded-md p-2" value={task.user_id} label="User" options={users}  handleChange={(e) => {
                                setTask({
                                    ...task,
                                    user_id: e.target.value
                                })
                            }} />
                
                    <div className='flex gap-3'>
                        <Button name="Send" type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md" />
                        <Link to="/tasks" className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</Link>
                    </div>
                    
                </form>
            </div>
        </Header>
    )
}

export default TaskForm
