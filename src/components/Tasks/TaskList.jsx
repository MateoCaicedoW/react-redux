import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Link } from  "react-router-dom";
import { EmptyState } from "../EmptyState";
import { setForm } from "../../features/form";
import { Header } from "../Header";

function TaskList() {
    //useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch()
    if (tasks.length === 0) {
        return (
            <div>
                 <EmptyState description="Create a new task" link="/add" title="There's any task" />
            </div>
        )
    }

    return (
        
        <Header> 

            <Link to="/tasks/add" onClick={()=>{
                dispatch(setForm({
                    task: false,
                    user: false
                }))
            }} className="bg-green-500 text-white px-4 py-2 rounded-md" >
                Add Task
            </Link>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                {tasks.map((task) => {
                    return <Card task={task} key={task.id}/>
                })}
            </div>
        </Header>
    )
}

export default TaskList
