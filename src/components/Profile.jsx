import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="content">
      <img src='./bg.gif'></img>
      <div className="ava">
        <img src='./user.jpg'></img>
      </div>

      <div className="aboutMe">
        <div className="userName">Юмико Судзэ</div>
        <div className="userDate">День рождение: 07.07.2007</div>
        <div className="userTown">Город: Токио</div>
        <div className="userHobby">Хобби: аниме и покушац</div>
      </div>
      </div>
)
}
export default Profile;