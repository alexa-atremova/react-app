import React from 'react';
import './MyPosts.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {



  let postElements = props.posts.map(p => <Posts post={p.post} like={p.like} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
 
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updatePostText(text);
  }

  return (

    <div className='posts'>

      <div>my posts
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value ={props.newPostText}/>
          <button onClick={addPost} type="submit">Send</button>
        </div>

        {postElements}

      </div>

    </div>

  )
}

export default MyPosts;