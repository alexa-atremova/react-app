
import {instance} from './api'

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });

    },

    unfollowUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },

    followUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    }

}
