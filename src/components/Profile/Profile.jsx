import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './../Profile/ProfileInfo'
import styles from './profile.module.css';
import { profileAPI } from '../../api/usersAPI';

const Profile = (props) => {
  return (
    <div className={styles.content}>

      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}  status = {props.status} updateUserStatus = {props.updateUserStatus}/>
      <MyPostsContainer  profile={props.profile}/>

    </div>

  )
}
export default Profile;