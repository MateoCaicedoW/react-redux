import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import { Field } from "../Field"
import { useDispatch } from "react-redux"
export const UserForm = () => {
    
    const [user, setUser] = useState({
        fist_name: '',
        last_name: '',
        role: '',
        password: '',
        email: '',
        password_confirmation: ''
    })


    useEffect(() => {
        user.role = 'user'
    }, [])

    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        dispatch(createUser(user))

        // await createUser(user).then((res) => {
        //     console.log(res)
        // })

        setUser({
            fist_name: '',
            last_name: '',
            role: 'user',
            password: '',
            email: '',
            password_confirmation: ''
        })


        
    }

    return (
        <div className='max-w-2xl m-auto'>
            <form className="bg-slate-700 rounded-lg p-10 mb-5" onSubmit={handleSubmit}>
                <h1 className="text-white text-2xl font-bold mb-3">Add User</h1>
                <div className="grid  md:grid-cols-2 md:gap-5">
                    <Field label="First Name" value={user.fist_name} handleChange={
                        (e) =>{
                            setUser({
                                ...user,
                                fist_name: e.target.value
                            })
                        }
                    }/>
                    <Field label="Last Name"  value={user.last_name} handleChange={
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
                            <option defaultChecked value="user">User</option>
                            <option value="admin">Admin</option>
                            
                        </select>
                    </div>
                    
                    <Field label="Email" value={user.email} handleChange={
                        (e) =>{
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }
                    }/>
                </div>

                <div className="grid  md:grid-cols-2 md:gap-5">
                    <Field label="Password" autoComplete="on" type="password" value={user.password} handleChange={
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