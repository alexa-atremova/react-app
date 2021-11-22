import React from 'react';
import Profile from './../Profile/Profile'
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer'
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 20456;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />

    }
}


let mapState = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})



export default compose(connect(mapState, { getUserProfile, getUserStatus,updateUserStatus }),
    withRouter,
    withAuthRedirect)(ProfileContainer);



    
