import axios from 'axios';
const baseURL = 'http://localhost:3000/tasks';

export async function createTasks(task){
    try {
        const response = await axios.post(baseURL, {
            title: task.title,
            description: task.description,
            status: task.status,
            user_id: 'a0563453-6cff-4993-b559-0b290cc39804'
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