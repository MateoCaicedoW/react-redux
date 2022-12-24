import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Card } from "./Card"


export const UserList = () => {

    const users = useSelector((state) => state.users)

    return(
        <div>
            <Link to="/users/add" className="bg-green-500 text-white px-4 py-2 rounded-md" >
                Add User
            </Link>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                {users.map((user) => {
                    return <Card key={user.id} user={user} />
                })}
            </div>
        </div>
    )

}