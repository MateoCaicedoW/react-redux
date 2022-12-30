const baseUrl = 'https://todo-server-production-7d9c.up.railway.app/';
import axios from 'axios';

export async function fetcher(endPoint) {
    try {
        const response = await axios.get(`${baseUrl}${endPoint}`)
        if (response.status === 200) {
            const data = response.data.data;
            
            return data;
        }
        return response.data;
    }catch (error){
        if (error.response) {
            console.log(error);
        }
    }

}