const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: ''

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:

            let newPost = {
                post: state.newPostText,
                like: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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
export default profileReducer;