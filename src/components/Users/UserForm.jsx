import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { Field } from "../Field"
import { useDispatch, useSelector } from "react-redux"
import { getUsers} from "../../features/users/userSlice"
import { createUser, getUser, updateUser } from "../../api/users"
import { setErrors } from "../../features/errors"
import { emptyErrors } from "../../features/errors"
import { fetcher } from "../../api/fetcher"
import { useParams } from "react-router-dom"
export const UserForm = () => {
    
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        role: 'user',
        password: '',
        email: '',
        password_confirmation: ''
    })

    const navigate = useNavigate()
    const params = useParams()


    const users = useSelector((state) => state.users);
    useEffect(() => {
        if (params.id) {
            const get = async () => {
                const user = await getUser(params.id)
                setUser(user.data)
                return
            }
            get()
        }
        user.role = 'user'
    }, [ users])

    const dispatch = useDispatch()
    
    const redirect = async () => {
        const users = await fetcher('users')
        dispatch(getUsers(users))

        navigate('/users')
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (params.id) {
            const resp = await updateUser(user)
            if (resp.status !== 200) {
                dispatch(setErrors(resp.data))
                return 
            }
            dispatch(setErrors(emptyErrors))
            redirect()
            return
        }


        const resp = await createUser(user)
       
        if (resp.status !== 200) {
            dispatch(setErrors(resp.data))
            return 
        }

        dispatch(setErrors(emptyErrors))
        setUser({
            first_name: '',
            last_name: '',
            role: 'user',
            password: '',
            email: '',
            password_confirmation: ''
        })

        redirect()
        
    }

    return (
        <div className='max-w-2xl m-auto'>
            <form className="bg-slate-700 rounded-lg p-10 mb-5" onSubmit={handleSubmit}>
                <h1 className="text-white text-2xl font-bold mb-3">Add User</h1>
                <div className="grid  md:grid-cols-2 md:gap-5">
                    <Field label="FirstName" value={user.first_name} name="first_name" handleChange={
                        (e) =>{
                            setUser({
                                ...user,
                                first_name: e.target.value
                            })
                        }
                    }/>
                    <Field label="LastName"  value={user.last_name} name="last_name"  handleChange={
                        (e) =>{
                            setUser({
                                ...user,
                                last_name: e.target.value
                            })
                        }
                    }/>
                </div>
                <div className="grid  md:grid-cols-2 md:gap-5">
                    <div className="flex flex-col mb-3">
                        <label htmlFor="role" className="text-white">Role</label>
                        <select className="rounded-md p-2" value={user.role}  onChange={
                            (e) =>{
                                setUser({
                                    ...user,
                                    role: e.target.value
                                })
                            }
                        }>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            
                        </select>
                    </div>
                    
                    <Field label="Email" value={user.email} name="email" handleChange={
                        (e) =>{
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }
                    }/>
                </div>

                <div className="grid md:grid-cols-2 md:gap-5">
                    <Field label="Password" autoComplete="on" type="password" name="password" value={user.password} handleChange={
                        (e) =>{
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }
                    }/>
                    <Field label="Confirm Password" autoComplete="on" type="password" value={user.password_confirmation} handleChange={
                        (e) =>{
                            setUser({
                                ...user,
                                password_confirmation: e.target.value
                            })
                        }
                    }/>
                </div>

                <div className='flex md:grid md:grid-cols-6 gap-3 pt-3'>
                    <Button name="Send" type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md" />
                    <Link to="/users" className="bg-gray-500 text-white text-center px-4 py-2 rounded-md">Cancel</Link>
                </div>

                
            </form>

        </div>

    )
}