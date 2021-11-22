import React from 'react';
import './Posts.css';
import pic from '../../../../assets/pixel.png'
import UserAva from '../../../../assets/userPhoto.png'
import Preloader from '../../../common/Preloader/Preloader';

const Posts = (props) => {
   
    if (!props.profile.photos) {
        return <Preloader/>
      }
      
      let smallAva = props.profile.photos.small; 
      if(smallAva === null){
        smallAva = UserAva;
      }
   
    return (
     


        <div className='postContent'>
            <img  src = {smallAva}/>
            <div className='textPost'>
                {props.post}
            </div>
            <div className='likeCount'>
            <img src={pic}/>
                {props.like}
            </div>



        </div>


    )
}

export default Posts;