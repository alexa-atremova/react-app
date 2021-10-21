import React from 'react';
import {addMessageAction,updateMessageAction} from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

  let state = props.store.getState().messagePage;

  const addMessage = () =>{
  props.store.dispatch(addMessageAction())
  }
  
  let onMessageChange = (textMessage) =>{
    props.store.dispatch(updateMessageAction(textMessage));
  }


  return (
    <Dialogs
     addMessage ={addMessage}  
     updateMessage = {onMessageChange} 
     messagePage = {state}
     />
  )
}
export default DialogsContainer;