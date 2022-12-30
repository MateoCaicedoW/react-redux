import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setForm } from "../../features/form"
import { EmptyState } from "../EmptyState"
import { Header } from "../Header"
import { Card } from "./Card"


export const UserList = () => {

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    if (users.length === 0) {
        return <EmptyState description="Create a new user" link="/users/add" title="There's any user" />
        
    }

    return(
        <Header>
            <Link to="/users/add" onClick={() =>{
                dispatch(setForm({task: false , user: true}))
            }} className="bg-green-500 text-white px-4 py-2 rounded-md" >
                Add User
            </Link>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                {users.map((user) => {
                    return <Card key={user.id} user={user} />
                })}
            </div>
        </Header>
    )

}