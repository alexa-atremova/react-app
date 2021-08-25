import React from 'react';
import './MyPosts.css';
import Posts  from './Posts';

const MyPosts = (prors) => {
  return (

    <div className='posts'>

      <div>my posts
        <div>
          <input type="text" placeholder="Your News..." />
          <button type="submit"> Send</button>
        </div>
       <Posts message = 'Ямете кудасай'/>
       <Posts message = 'Канничива'/>
       
      </div>

    </div>

  )
}

export default MyPosts;