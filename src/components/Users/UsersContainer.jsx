import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setIsFetching, toggleProgress } from "../../redux/users-reducer";
import * as axios from 'axios';
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/usersAPI";



class UsersComtainer extends React.Component {

    componentDidMount() {

        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);

        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);


        });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleProgress ={this.props.toggleProgress}
                followingInProgress= {this.props.followingInProgress}




            />
        </>
    }
}

let mapState = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapState, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    toggleProgress
})(UsersComtainer);
