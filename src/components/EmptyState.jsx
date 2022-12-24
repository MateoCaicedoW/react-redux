import { Link } from "react-router-dom"

export const EmptyState = ({title, link, description}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-gray-600">{title}</h1>
            <p className="text-gray-500">
                <Link to={link} className="text-blue-500">
                    {description}
                </Link> to get started.</p>
        </div>
    )
}