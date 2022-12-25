import { Button } from "../Button"
import { useDispatch } from "react-redux"
// import { deleteTask, completeTask } from '../features/tasks/taskSlice.js'
import { Link } from "react-router-dom"
import { setForm } from "../../features/form"
function Card({ task }) {

    const classStatus = task.status === true ? "text-green-500" : "text-red-500"

    const dispatch = useDispatch()

    // const handleDelete = (id) => {
    //     dispatch(deleteTask(id))
    // }

    // const handleComplete = (id) => {
    //     dispatch(completeTask(id))
    // }

    return (
        <div className="bg-slate-700 p-5 rounded-lg text-white">
            <div className="pb-3">
                <h1 className="text-xl font-bold">{task.title}</h1>
                <p>{task.description}</p>
                <p className={classStatus}>{
                        task.status === true ? "Completed" : "Pending"
                }</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 ">
                <Button
                    name={"Delete"}
                    type="button"
                    handleClick={() => {
                        // handleDelete(task.id)
                    }}
                    className="bg-red-400 px-5 py-1 rounded-md " />
                <Button
                    name={"Complete"}
                    type="button"
                    handleClick={() => {
                        // handleComplete(task.id)-
                    }}
                    className="bg-green-500  px-2 py-1 rounded-md" />
                
                <Link to={`edit/${task.id}`} onClick={()=>{
                    dispatch(setForm({task: true, user: false}))
                }} className="bg-slate-400  text-center px-3 py-1 rounded-md">
                    Edit
                </Link>
            </div>
        </div>
    )
}

export default Card
