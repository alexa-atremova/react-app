import React from 'react';
import { addPostAction, updatePostAction } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostAction());


  }

  let onPostChange = (text) => {
    let action = updatePostAction(text);
    props.store.dispatch(action);
  }

  return (<MyPosts
    updateNewPost={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts}
    newPostText = {state.profilePage.newPostText}

  />

  )
}
export default MyPostsContainer;