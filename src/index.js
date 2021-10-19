import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state'



 let rerenderTree = () =>{


  ReactDOM.render(
    <React.StrictMode>
      <App state = {store.getState()}  
          addPost = {store.addPost.bind(store)}
          updatePostText ={store.updatePostText.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  ); 
  
  
};



rerenderTree(store.getState());
store.subscribe(rerenderTree);