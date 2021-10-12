import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postItem = [
  { post: "Привет!", like: "3" },
  { post: "Эй?", like: "1" },
  { post: ":(", like: "6" }
]


let dialogsData = [
  { id: 1, name: 'Димон' },
  { id: 2, name: 'Саня' },
  { id: 3, name: 'Катюха' },
]


let messageData = [
  {message: 'хай' },
  {message: 'че как ты' },
  {message: 'шо?' },
]

ReactDOM.render(
  <React.StrictMode>
    <App profilePosts = {postItem} profileContacts ={dialogsData} profileMessage = {messageData}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
