export const Field =  ({ name, label, type, value, handleChange, disabled }) => {
    return (
        <div className="flex flex-col mb-3">
            <label className="text-white" htmlFor={name}>{label}</label>
            <input
                type={type}
                className="rounded-md p-2"
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                required
                disabled={disabled}
                autoFocus
            />
        </div>
    );
}