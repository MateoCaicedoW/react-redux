import { Button } from "../Button"
import { Field } from "../Field"

export const Login= () => {

    return (
        <div className="flex h-screen ">
            <div className="bg-slate-700 rounded-md m-auto   px-8 py-5">
                <form >
                    <Field  label="Username"/>
                    <Field  label="Password"/>
                    <Button className="bg-green-400 text-white rounded p-3 "  name="Log in" /> 

                </form>
               
            </div>
            
            
        </div>

    )

}