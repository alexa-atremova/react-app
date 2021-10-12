import React from 'react';
import './Dialogs.css';
import { NavLink } from 'react-router-dom';


const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return <div className="Contacts">

    <NavLink to={path} >{props.name}</NavLink>
  </div>
}

const MessageItem = (props) => {

  return <div className="dialog"><span>{props.message}</span></div>

}


const Dialogs = (props) => {


  let dialogsElements = props.myContacts.map(d => <DialogsItem name={d.name} id={d.id} />)
  let messageElements = props.myMessage.map(m => <MessageItem message={m.message} />)

  return (
    <div className="messagePage">
      <div className="messages">

        <div className="yourContacts">
          {dialogsElements}

        </div>

        <div className="yourDialog">
          {messageElements}
          <div>

          </div>
        </div>

      </div >
    </div>
  )
}
export default Dialogs;