import { usersAPI } from './../api/usersAPI';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

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
    newPostText: '',
    profile: 2

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                post: state.newPostText,
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
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state
            };

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_PROFILE: {

            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }

}
export const addPostAction = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostAction = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    }
}


export const getUserProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(response => {

            dispatch(setProfile(response.data));

        });
    }


export default profileReducer;