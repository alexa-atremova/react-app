import {
    authAPI
} from './../api/usersAPI';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {

    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false


}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;
    }

}
export const setUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
export const getUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {
                    userId,
                    login,
                    email
                } = response.data.data;
                dispatch(setUserData(userId, email, login, true));
            }


        });
} 

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData());
            }


        });
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }


        });
}


export default authReducer;