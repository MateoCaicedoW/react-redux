import axios from 'axios';
const baseURL = 'http://localhost:3000/users';

export const createUser  = async (user) => {
    try{
        const res = await axios.post(baseURL, user)
        if (res.status == 200) {
            const data = res.data;
            return data;
        }
        return res.data
        
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
    }
}

export const getUser = async (id) => {
    try {
        const res = await axios.get(`${baseURL}/${id}`)
        if (res.status == 200) {
            const data = res.data;
            return data;
        }
        return res.data
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
    }
}

export const updateUser = async (user) => {
    try {
        const res = await axios.put(`${baseURL}/${user.id}`, user)
        if (res.status == 200) {
            const data = res.data;
            return data;
        }
        return res.data
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
    }
}

export const deleteUser = async (id) => {
    try {
        const res = await axios.delete(`${baseURL}/${id}`)
        if (res.status == 200) {
            const data = res.data;
            return data;
        }
        return res.data
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
    }
}