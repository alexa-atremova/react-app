import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';


const Profile = (props) => {
  return (
    <div className="content">
      <img className="backAva" src='./bg.gif'></img>
      <div className="aboutMe">
        <img className="ava" src='./user.jpg'></img>
        <div className="description">
          <div className="userName">Имя Фамилия</div>
          <div className="userDate">День рождение: 07.07.2007</div>
          <div className="userTown">Город: Одесса</div>
          <div className="userHobby">Хобби: кушать</div>
        </div>

      </div>
      <div className="profilePost">
        <MyPosts posts={props.profilePage.posts}
          addPost={props.addPost}
          newPostText = {props.profilePage.newPostText}
          dispatch={props.dispatch}
        />
      </div>

    </div>
  )
}
export default Profile;