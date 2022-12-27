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

export async function getTask(id){
    try {
        const response = await axios.get(`${baseURL}/${id}`);
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

export async function deleteTask(id){
    try {
        const response = await axios.delete(`${baseURL}/${id}`);
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

export async function updateTask(task){
    try {
        const response = await axios.put(`${baseURL}/${task.task_id}`, {
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

export async function completeTask(task){
    try {
        const response = await axios.put(`${baseURL}/${task.id}/complete`, {
            status: task.status,
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