const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {

    users: [{
            id: 1,
            photo:'https://i.pinimg.com/564x/07/f1/2b/07f12bfb3b2b0104fae637771acdd5b7.jpg',
            userName: "Саша",
            status: "чё каво",
            location: {
                city: "Odessa",
                country: "Ukraine"
            },
            followerStatus: true
        },
        {
            id: 2,
            photo:'https://i.pinimg.com/564x/07/f1/2b/07f12bfb3b2b0104fae637771acdd5b7.jpg',
            userName: "Саша",
            status: "чё каво",
            location: {
                city: "Odessa",
                country: "Ukraine"
            },
            followerStatus: false
        },
        {
            id: 3,
            photo:'https://i.pinimg.com/564x/07/f1/2b/07f12bfb3b2b0104fae637771acdd5b7.jpg',
            userName: "Саша",
            status: "чё каво",
            location: {
                city: "Odessa",
                country: "Ukraine"
            },
            followerStatus: false
        }
    ],


}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:{
           return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {
                            ...u,
                            followerStatus: true
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {
                            ...u,
                            followerStatus: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }

}
export const followAC = (userid) => {
    return {
        type: FOLLOW,
        userid
    }
}

export const unfollowAC = (userid) => {
    return {
        type: UNFOLLOW,
        userid


    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users


    }
}

export default usersReducer;