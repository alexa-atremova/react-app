
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
    },

}


export const authAPI = {
me(){
    return instance.get(`auth/me`)
}
}


export const profileAPI = {
    getProfile (userId)  {
        return instance.get(`profile/${userId}`)
    },

    getStatus (userId)  {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus (status)  {
        return instance.put(`profile/status`, { status: status })
    }
    }