import React from 'react';
import { addPostAction, updatePostAction } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from './../../../StoreContext'


const MyPostsContainer = () => {



  return (
    <StoreContext.Consumer>
      {(store) => {


        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostAction());


        }

        let onPostChange = (text) => {
          let action = updatePostAction(text);
          store.dispatch(action);
        }

        return <MyPosts
          updateNewPost={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />
      }

      }
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer;