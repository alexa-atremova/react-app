import {usersAPI} from "./../api/usersAPI";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FETCHING = 'FETCHING';
const PROGRESS = 'PROGRESS';


let initialState = {

    users: [],
    pageSize: 6,
    totalUsersCount: 70,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []


}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }

        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)


            }
        }

        default:
            return state;
    }

}
export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId


    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users


    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage


    }

}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount


    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: FETCHING,
        isFetching


    }
}
export const toggleProgress = (isFetching, userId) => {
    return {
        type: PROGRESS,
        isFetching,
        userId


    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });

    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleProgress(true, userId));
        usersAPI.followUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }

                dispatch(toggleProgress(false, userId));
            });


    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleProgress(true, userId));
        usersAPI.unfollowUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }

                dispatch(toggleProgress(false, userId));
            });


    }
}



export default usersReducer;