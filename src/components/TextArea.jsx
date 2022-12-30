import { useSelector } from "react-redux"

export const TextArea = ({name, label, value, handleChange, className, rows}) =>{
const errors = useSelector((state) => state.errors)
const error = errors[name]

let err = ""
if (error != undefined) {
    err = error[0]
}

const size = err != ""

    return(
        <div className='flex flex-col mb-3'>
        <label className='text-white' htmlFor={name}>{label}</label>
        <textarea 
            name={name} 
            value={value} 
            className={className}
            rows={rows} 
            onChange={handleChange} 
            id={name}

        />
         {
            size == true ? (  
                <span className="text-red-500 text-sm">{errors[name]}</span>
            ) : null
        }

    </div>
    )
}