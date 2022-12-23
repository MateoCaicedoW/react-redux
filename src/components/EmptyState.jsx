export const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-gray-600">No tasks found</h1>
            <p className="text-gray-500">Add a new task to get started.</p>
        </div>
    )
}