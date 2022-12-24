
export const Card = ({user}) => {

    return (
        <div className="bg-slate-700 p-5 rounded-lg text-white">
            <div className="pb-3">
                <h1 className="text-xl font-bold">{user.first_name}</h1>
                <p>{user.email}</p>
            </div>
        </div>
    )
}