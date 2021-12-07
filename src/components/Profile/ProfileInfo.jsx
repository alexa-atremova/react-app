
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import styles from './profileInfo.module.css';
import ProfileStatusHooks from './ProfileIStatusWithHooks';
import UserAva from '../../assets/userPhoto.png'
import plus from '../../assets/pixel.png'

const BackAva = 'https://get.pxhere.com/photo/sky-cloud-daytime-pink-blue-afterglow-purple-violet-atmosphere-evening-morning-calm-horizon-dusk-sunset-meteorological-phenomenon-sunrise-dawn-cumulus-magenta-1561859.jpg'


const ProfileInfo = (props) => {

  if (!props.profile.photos) {
    return <Preloader />
  }

  let ava = props.profile.photos.large;
  if (ava === null) {
    ava = UserAva;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
        props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div >
      <img className={styles.backAva} src={BackAva}></img>
      <div className={styles.aboutMe}>

        <img className={styles.ava} src={ava}></img>
        <div className={styles.ChooseAva}>
          {props.isOwner && <input type="file" onChange={onPhotoSelected} />}

        </div>


        <div className={styles.description}>
          <div className={styles.userName}>{props.profile.fullName}</div>
          <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus} />
          <div className={styles.userDate}>День рождения: null</div>
          <div className={styles.userTown}>Город: null</div>
          <div className={styles.userHobby}>О себе: {props.profile.aboutMe}</div>
        </div>

      </div>
    </div>
  )
}
export default ProfileInfo;