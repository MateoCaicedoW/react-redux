import { Link } from "react-router-dom"

export const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-gray-600">No tasks found</h1>
            <p className="text-gray-500">
                <Link to="/add" className="text-blue-500">
                    Create a new task
                </Link> to get started.</p>
        </div>
    )
}