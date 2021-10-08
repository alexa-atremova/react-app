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


const Dialogs = () => {
  return (
    <div className="messagePage">
      <div className="messages">

        <div className="yourContacts">

          <DialogsItem name="Димон" id="1" />
          <DialogsItem name="Саня" id="2" />
          <DialogsItem name="Катюха" id="3" />

        </div>

        <div className="yourDialog">
          <MessageItem message="Привет!" />
          <MessageItem message="эй" />
          <MessageItem message="шо?" />
          <div>

          </div>
        </div>

      </div >
    </div>
  )
}
export default Dialogs;