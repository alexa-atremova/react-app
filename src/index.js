import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from './StoreContext'


 let rerenderTree = () =>{


  ReactDOM.render(
    <BrowserRouter>
    <Provider store = {store}>
      <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  ); 
  
  
};



rerenderTree(store.getState());
store.subscribe(()=>{
  let state = store.getState();
  rerenderTree(state);
});