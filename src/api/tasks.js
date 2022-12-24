import axios from 'axios';
const baseURL = 'http://localhost:3000/tasks';

export async function createTasks(task){
    try {
        const response = await axios.post(baseURL, {
            title: task.title,
            description: task.description,
            status: task.status,
            user_id: task.user_id
        });
        if (response.status === 200) {
            const data = response.data;
            return data
        }
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
    }
}