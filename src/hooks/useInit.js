import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetcher } from '../api/fetcher';
import {getTasks} from '../features/tasks/taskSlice'

export const useInit = () => {
    const dispatch = useDispatch();
    async function fetchTasks() {
        const tasks = await fetcher('tasks');

        dispatch(getTasks(tasks));
    }
    useEffect(() => {
        fetchTasks();
    }, []);

}