import React from 'react';
import './Posts.css';

const Posts = (prors) => {
    return (


        <div className='postContent'>
            <img src='./user.jpg' />
            <div className='textPost'>
            {prors.message}
            </div>



        </div>


    )
}

export default Posts;