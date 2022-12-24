const baseUrl = 'http://localhost:3000/';
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