import { useSelector } from "react-redux"
import { NIL } from "uuid"
export const SelectInput = ({name,label,value , className, handleChange, options}) => {
    const errors = useSelector((state) => state.errors)
    const error = errors[name]
    
    let err = ""
    if (error != undefined) {
        err = error[0]
    }

    const size = err != ""

    return (
        <div className='flex flex-col mb-6'>
            <label htmlFor={name} className="text-white">{label}</label>
            <select name={name} className={className} value={value} onChange={handleChange}>
                <option value={NIL}>Select {label}</option>
                {
                    options.map((option) => {
                        return <option value={option.id} key={option.id}>{option.first_name}</option>
                    })
                }
            </select>

        {
            size == true ? (  
                <span className="text-red-500 text-sm">{errors[name]}</span>
            ) : null
        }
        </div>
    )
}