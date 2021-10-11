import React from 'react';
import './MyPosts.css';
import Posts from './Posts/Posts';

const MyPosts = (prors) => {


  let postItem = [
    { post: "Привет!", like: "3" },
    { post: "Эй?'", like: "1" },
    { post: ":(", like: "6" }
  ]

  let postElements = postItem.map(p => <Posts message={p.post} like = {p.like} />)


  return (

    <div className='posts'>

      <div>my posts
        <div>
          <input type="text" placeholder="Your News..." />
          <button type="submit">Send</button>
        </div>

        {postElements}

      </div>

    </div>

  )
}

export default MyPosts;