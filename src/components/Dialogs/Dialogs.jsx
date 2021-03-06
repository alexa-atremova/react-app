import React from 'react';
import './Dialogs.css';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Field, reduxForm } from "redux-form";
import AddMessageForm from './AddMessageForm';

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div className="Contacts"><NavLink to={path} >{props.name}</NavLink> </div>
}

const MessageItem = (props) => { return <div className="dialog"><span>{props.message}</span></div> }




const Dialogs = (props) => {

  let state = props.messagePage;
  let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />)
  let messageElements = state.messages.map(m => <MessageItem message={m.message} key={m.id}/>);

  let newMessageText = state.newMessageText;

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  }


  if (props.isAuth == false) {
    return <Redirect to={"/login"} />
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
      <AddMessageForm onSubmit ={addNewMessage} />

    </div>
  )
}





export default Dialogs;