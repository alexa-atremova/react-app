import React from 'react';
import Profile from './../Profile/Profile'
import {setProfile} from './../../redux/profile-reducer'
import * as axios from 'axios';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {

            this.props.setProfile(response.data);

        });
    }

    render() {
       return <Profile {...this.props} profile ={this.props.profile}/>

    }
}


let mapState = (state)=>({
    profile:state.profilePage.profile

})

let UrlData = withRouter(ProfileContainer);
export default connect(mapState,{setProfile})(UrlData);