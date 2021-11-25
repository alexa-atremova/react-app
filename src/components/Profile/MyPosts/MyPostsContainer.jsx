import React from 'react';
import { addPostAction } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';





let mapState = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
  }

}

let mapDispatch = (dispatch) => {
  return {
  
    addPost: (newPostText) => {
      dispatch(addPostAction(newPostText))
    }
  }
}


const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);
export default MyPostsContainer;


