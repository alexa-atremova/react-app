import React from 'react';
import { addPostAction, updatePostAction } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapState = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    
  }

}

let mapDispatch = (dispatch) => {
  return {
    updatePost: (text) => {
      dispatch(updatePostAction(text))
    },
    addPost: () => {
      dispatch(addPostAction())
    }
  }
}

const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);
export default MyPostsContainer;