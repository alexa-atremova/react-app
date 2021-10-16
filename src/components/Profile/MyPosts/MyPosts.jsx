import React from 'react';
import './MyPosts.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {



  let postElements = props.state.map(p => <Posts post={p.post} like={p.like} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (

    <div className='posts'>

      <div>my posts
        <div>
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost} type="submit">Send</button>
        </div>

        {postElements}

      </div>

    </div>

  )
}

export default MyPosts;