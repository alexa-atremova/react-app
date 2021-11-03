import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC,setCurrentPageAC,setTotalUsersCountAC  } from "../../redux/users-reducer";
import * as axios from 'axios';

class UsersAPi extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);

        });
    }
    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {

                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            });


    }

    render() {

        return <Users
            onPageChanged={this.onPageChanged}
            pageSize={ this.props.pageSize}
            totalUsersCount={ this.props.pageSize}
            currentPage={this.props.currentPage}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow ={this.props.unfollow}



        />

    }
}

let mapState = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))

        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))

        }
    }
}

export default connect(mapState, mapDispatch)(UsersAPi);
