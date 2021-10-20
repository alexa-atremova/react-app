import React from 'react';
import './Dialogs.css';
import { NavLink } from 'react-router-dom';
import {addMessageAction,updateMessageAction} from './../../redux/state'


const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div className="Contacts"><NavLink to = {path} >{props.name}</NavLink> </div>}

const MessageItem = (props) => { return <div className="dialog"><span>{props.message}</span></div> }




const Dialogs = (props) => {


  let dialogsElements = props.messagePage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
  let messageElements = props.messagePage.messages.map(m => <MessageItem message={m.message} />) ;

  let newMessageText = props.newMessageText;

  const addMessage = () =>{
  props.dispatch(addMessageAction())
  }
  
  let onMessageChange = (event) =>{
    let textMessage = event.target.value;
    props.dispatch(updateMessageAction(textMessage));
  }


  return (
    <div className="messagePage">
      <div className="messages">

        <div className="yourContacts">
          {dialogsElements}

        </div>

        <div className="yourDialog">
          {messageElements}
    
        </div>
        
      </div >
      <div className = 'sendMessage'>
          <input onChange={onMessageChange} value = {newMessageText}/>
          <button onClick={addMessage} type="submit">Send</button>
        </div>
    </div>
  )
}
export default Dialogs;