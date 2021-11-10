import * as axios from 'axios';
import {instance} from './api'

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });

    },

    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },

    postUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    }

}


// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "57d85f47-be3d-4710-93e5-6750342b83dd"
//     }
// }).then(response => {
//     if (response.data.resultCode === 0) {
//         props.unfollow(u.id);
//     }


// });


// }
// } > Unfollow < /button>

//     : < button onClick = {
//         () => {
//             axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
//                 withCredentials: true,
//                 headers: {
//                     "API-KEY": "57d85f47-be3d-4710-93e5-6750342b83dd"
//                 }
//             }).then(response => {
//                 if (response.data.resultCode === 0) {
//                     props.follow(u.id);
//                 }


//             });