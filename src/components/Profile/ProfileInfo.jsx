
import React, { useState } from 'react';
import Preloader from '../common/Preloader/Preloader';
import styles from './profileInfo.module.css';
import ProfileStatusHooks from './ProfileIStatusWithHooks';
import UserAva from '../../assets/userPhoto.png'
import { createField, Input, Textarea } from '../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import { saveProfile } from '../../redux/profile-reducer';



const BackAva = 'https://get.pxhere.com/photo/sky-cloud-daytime-pink-blue-afterglow-purple-violet-atmosphere-evening-morning-calm-horizon-dusk-sunset-meteorological-phenomenon-sunrise-dawn-cumulus-magenta-1561859.jpg'


const ProfileInfo = (props) => {

  const [isPhotoClick, setIsPhotoClick] = useState(false);
  let [editMode, setEditMode] = useState(false);

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


  const handleClickChosePhoto = () => {
    if (isPhotoClick) {
      setIsPhotoClick(false)
    }
    else setIsPhotoClick(true)

  }
  const onSubmit =(formData) =>{
    props.saveProfile(formData)
}

  return (
    <div >
      <img className={styles.backAva} src={BackAva}></img>
      <div className={styles.aboutMe}>
        <img className={styles.ava} src={ava} onClick={() => { handleClickChosePhoto() }} />
        {isPhotoClick ? props.isOwner && <input className={styles.ChooseAva} type="file" onChange={onPhotoSelected} /> : null}


        {editMode
          ? <ProfileDataReduxForm props={props} goToEditeMode={() => { setEditMode(false)}} onSubmit={onSubmit} />
          : <ProfileData props={props} goToEditeMode={() => { setEditMode(true) }} />}



      </div>
    </div>
  )
}

const ProfileData = ({ props, goToEditeMode }) => {

  const [isContactsClick, setIsContactsClick] = useState(false);

  const handleClickContacts = () => {
    if (isContactsClick) {
      setIsContactsClick(false)
    }
    else setIsContactsClick(true)

  }

  return <div className={styles.description}>
    <div className={styles.setting}><button onClick={goToEditeMode}> setting</button></div>
    <div className={styles.userName}>{props.profile.fullName}</div>
    <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus} />
    <div >В поиске работы: {props.profile.lookingForAJob ? "да" : "нет"}</div>
    <div >Мои навыки: {props.profile.lookingForAJobDescription}</div>
    <div >О себе: {props.profile.aboutMe}</div>


    <div className={styles.userContacts}>

      <div onClick={() => { handleClickContacts() }}>Мои контакты: {isContactsClick ? Object.keys(props.profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
      }) : null} </div>

    </div>

  </div>
}
const ProfileDataForm = ({ props, goToEditeMode,handleSubmit }) => {
  return <form onSubmit = {handleSubmit}>
    <div className={styles.description}>
      <div className={styles.setting}><button > save</button></div>
      <div className={styles.userName}>Full Name: {createField("Full name", "fullName", [], Input)}</div>
      <div>Ищу работу: {props.profile.lookingForAJob ? "да" : "нет"}</div>
      {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      <div >Мои навыки: {props.profile.lookingForAJobDescription}</div>
      {createField("Skills", "lookingForAJobDescription", [], Textarea)}
      <div >О себе: {props.profile.aboutMe}</div>
      {createField("About Me", "aboutMe", [], Textarea)}
      <div className={styles.userContacts}>Мои контакты: {Object.keys(props.profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
      })} </div>

    </div>
  </form>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div>{contactTitle} : {contactValue}</div>
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileInfo;