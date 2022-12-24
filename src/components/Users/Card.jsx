import { Link, useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { deleteUser } from "../../api/users"
import { fetcher } from "../../api/fetcher"
import { useDispatch } from "react-redux"
import { getUsers } from "../../features/users/userSlice"
import { getTasks } from "../../features/tasks/taskSlice"

export const Card = ({user}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const picUser = 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'



    const handleDelete = async (id) => {
       
        const resp = await deleteUser(id)
        if (resp.status !== 200) {
            return
        }
        const users = await fetcher('users')
        const tasks = await fetcher('tasks')
        dispatch(getUsers(users))
        dispatch(getTasks(tasks))
        navigate('/users')
    }
    
    return (
        <div className="bg-slate-700 p-5 rounded-lg text-white ">
            <div className="flex  flex-col items-center">
                <img src={picUser} className="h-24 w-28" alt="profile"/>
                <h1 className="text-xl font-bold">{user.first_name}</h1>
                <p>{user.email}</p>
                <p>{user.role}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                <Button
                    name={"Delete"}
                    type="button"
                    handleClick={() => {
                        handleDelete(user.id)
                    }}
                    className="bg-red-400 px-3 py-1 rounded-md " />
                
                <Link to={`/users/edit/${user.id}`} className="bg-slate-400  text-center px-3 py-1 rounded-md">
                    Edit
                </Link>
            </div>
        </div>
    )
}