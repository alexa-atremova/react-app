import React from 'react';
import './Posts.css';

const Posts = (props) => {
    return (


        <div className='postContent'>
            <img src='./user.jpg' />
            <div className='textPost'>
                {props.message}
            </div>
            <div className='likeCount'>
            <img src='./pixel.png'/>
                {props.like}
            </div>



        </div>


    )
}

export default Posts;