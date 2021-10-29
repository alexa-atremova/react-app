import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";

let mapState = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatch = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid))
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapState, mapDispatch)(Users);
// export default connect(mapState, mapDispatch, setUsers)(Users);