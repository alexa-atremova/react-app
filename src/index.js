import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import {addPost,updatePostText,subscribe} from './redux/state'


 let rerenderTree = (state) =>{


  ReactDOM.render(
    <React.StrictMode>
      <App state = {state}  addPost = {addPost} updatePostText ={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  ); 
  
  
};



rerenderTree(state);
subscribe(rerenderTree);