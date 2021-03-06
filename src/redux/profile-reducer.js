import {profileAPI} from './../api/usersAPI';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'
let initialState = {

    posts: [{
            post: "Привет!",
            like: "3"
        },
        {
            post: "Эй?",
            like: "1"
        },
        {
            post: ":(",
            like: "6"
        }
    ],
    profile: 2,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                post: action.newPostText,
                like: 0
            };
            let stateCopy = {
                ...state
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }


        case SET_PROFILE: {

            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            };
        }
        case SAVE_PHOTO_SUCCESS: {

            return {
                ...state,
                profile:{...state.profile,photos: action.photos}
            }
        }
            case SAVE_PROFILE_SUCCESS: {

                return {
                    ...state,
                    profile:{...state.profile,profile: action.profile}
                };
    
        }
        default:
            return state;
    }

}
export const addPostAction = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const saveProfileSuccess = (profile) => {
    return {
        type: SAVE_PROFILE_SUCCESS,
        profile
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {

        dispatch(setProfile(response.data));

    });
}


export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {

        dispatch(setStatus(response.data));

    });
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {

            dispatch(setStatus(status));
        }
    });
}


export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file).then(response => {
        if (response.data.resultCode === 0) {

            dispatch(savePhotoSuccess(response.data.photos));
        }
    });
}

export const saveProfile = (profile) => (dispatch) => {
    profileAPI.saveProfile(profile).then(response => {
        if (response.data.resultCode === 0) {

            dispatch(savePhotoSuccess(response.data.profile));
        }
    });
}

export default profileReducer;