
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
},
login(email,password,rememberMe = false){
    return instance.post(`auth/login`,(email,password,rememberMe = false))
},
logout(){
    return instance.delete(`auth/login`)
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
    },
    savePhoto (photo)  {
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    }
    }