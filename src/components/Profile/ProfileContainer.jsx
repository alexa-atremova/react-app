
import React from 'react';
import Profile from './../Profile/Profile'
import { getUserProfile } from './../../redux/profile-reducer'
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../hoc/AuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 20456;
        }
        this.props.getUserProfile(userId);
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} />

    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

AuthRedirectComponent = connect(mapStateRedirect)(AuthRedirectComponent);

let mapState = (state) => ({
    profile: state.profilePage.profile,
  
})

let UrlData = withRouter(AuthRedirectComponent);

export default connect(mapState, { getUserProfile })(UrlData);