
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import styles from './profileInfo.module.css';

const BackAva = 'https://get.pxhere.com/photo/sky-cloud-daytime-pink-blue-afterglow-purple-violet-atmosphere-evening-morning-calm-horizon-dusk-sunset-meteorological-phenomenon-sunrise-dawn-cumulus-magenta-1561859.jpg'


const ProfileInfo = (props) => {

  if (!props.profile.photos) {
    return <Preloader />
  }

  return (
    <div >
      <img className={styles.backAva} src={BackAva}></img>
      <div className={styles.aboutMe}>
        {/* <img className={styles.ava} src='./user.jpg'></img> */};
        <img className={styles.ava} src={props.profile.photos.large}></img>
        <div className={styles.description}>
          <div className={styles.userName}>{props.profile.fullName}</div>
          <div className={styles.userDate}>День рождение: 07.07.2007</div>
          <div className={styles.userTown}>Город: Одесса</div>
          <div className={styles.userHobby}>О себе: {props.profile.aboutMe}</div>
        </div>

      </div>
    </div>
  )
}
export default ProfileInfo;