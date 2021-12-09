import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './../Profile/ProfileInfo'
import styles from './profile.module.css';


const Profile = (props) => {
  return (
    <div className={styles.content}>

      <ProfileInfo  savePhoto={props.savePhoto} 
                    saveProfile = {props.saveProfile}
                    isOwner={props.isOwner} 
                    profile={props.profile}  
                    status = {props.status} 
                    updateUserStatus = {props.updateUserStatus}/>
      <MyPostsContainer  profile={props.profile}/>

    </div>

  )
}
export default Profile;