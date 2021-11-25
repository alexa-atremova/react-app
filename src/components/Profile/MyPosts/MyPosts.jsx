import React from 'react';
import './MyPosts.css';
import Posts from './Posts/Posts';
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {


  let postElements = props.posts.map(p => <Posts post={p.post} like={p.like} profile={props.profile} />)


  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);


  }

  return (

    <div className='posts'>

      <div>my posts

        <AddNewPostsReduxForm onSubmit={onAddPost} />

        {postElements}

      </div>

    </div>

  )
}



const AddNewPostsForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder="Enter your text..." name={"newPostText"} component={"input"} />
      <button type="submit">Send</button>
    </div>
  </form>
}

const AddNewPostsReduxForm = reduxForm({
  form: 'ProfileAddNewPostsForm'
})(AddNewPostsForm)


export default MyPosts;