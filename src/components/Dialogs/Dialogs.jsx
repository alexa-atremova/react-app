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

  let dialogsData =[
    {id: 1, name: 'Димон'},
    {id: 2, name: 'Саня'},
    {id: 3, name: 'Катюха'},
  
  ]

  let messageData =[
    {massage: 'хай'},
    {massage: 'че как ты'},
    {massage: 'шо?'},
  
  ]



  return (
    <div className="messagePage">
      <div className="messages">

        <div className="yourContacts">

          <DialogsItem name = {dialogsData[0].name} id= {dialogsData[0].id} />
          <DialogsItem name = {dialogsData[1].name} id= {dialogsData[1].id} />
          <DialogsItem name = {dialogsData[2].name} id= {dialogsData[2].id} />

        </div>

        <div className="yourDialog">
          <MessageItem message={messageData[0].massage} />
          <MessageItem message={messageData[1].massage} />
          <MessageItem message={messageData[2].massage} />
          <div>

          </div>
        </div>

      </div >
    </div>
  )
}
export default Dialogs;