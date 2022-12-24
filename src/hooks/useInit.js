import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetcher } from '../api/fetcher';
import {getTasks} from '../features/tasks/taskSlice'
import {getUsers} from '../features/users/userSlice'

export const useInit = () => {
    const dispatch = useDispatch();
    async function initState() {
        const tasks = await fetcher('tasks');
        const users = await fetcher('users');
        dispatch(getUsers(users));
        dispatch(getTasks(tasks));
    }
    
    useEffect(() => {
        initState();
    }, []);

}