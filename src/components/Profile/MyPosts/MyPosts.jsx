import React from 'react';
import './MyPosts.css';
import Posts  from './Posts/Posts';

const MyPosts = () => {

  return (

    <div className='posts'>

      <div>My posts
        <div>
          <input type="text" placeholder="Your News..." />
          <button type="submit"> Send</button>
        </div>
       <Posts message = 'Привет!' like = '5'/>
       
       <Posts message = 'Охаё!' like = '2'/>
       
      </div>

    </div>

  )
}

export default MyPosts;