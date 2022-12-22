import { useSelector } from "react-redux";
import Card from "./Card";
import { Link } from  "react-router-dom";

function TaskList() {
    //useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.
    const tasks = useSelector((state) => state.tasks);
    return (
        <div>  
            <Link to="/add" className="bg-green-500 text-white px-4 py-2 rounded-md" >
                Add Task
            </Link>

            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                {tasks.map((task) => {
                    return <Card task={task} key={task.id}/>
                })}
            </div>
        </div>
    )
}

export default TaskList
