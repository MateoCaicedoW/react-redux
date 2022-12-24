import { useSelector } from "react-redux";


export const Field =  ({ name, label, type, value, handleChange, disabled, className, autoComplete}) => {

    const errors = useSelector((state) => state.errors)
    const error = errors[name]
    
    let err = ""
    if (error != undefined) {
        err = error[0]
    }

    const size = err != ""



    return (
        <div className="flex flex-col mb-3">
            <label className="text-white" htmlFor={name}>{label}</label>
            <input
                type={type}
                className={`rounded-md p-2 ${className}` }
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                required
                disabled={disabled}
                autoComplete={autoComplete}
                autoFocus
            />
            {

                size == true ? (  
                    <span className="text-red-500 text-sm">{errors[name]}</span>
                ) : null
            }
           
        </div>
    );
}