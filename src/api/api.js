import * as axios from 'axios';


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "57d85f47-be3d-4710-93e5-6750342b83dd"
    }
})

