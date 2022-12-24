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