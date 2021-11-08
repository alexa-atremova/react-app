import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './../Profile/ProfileInfo'
import styles from './profile.module.css';

const Profile = (props) => {
  return (
    <div className={styles.content}>

      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />

    </div>

  )
}
export default Profile;