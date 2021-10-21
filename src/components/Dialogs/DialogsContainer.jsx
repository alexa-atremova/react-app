import React from 'react';
import { addMessageAction, updateMessageAction } from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import StoreContext from './../../StoreContext'



const DialogsContainer = () => {


  return (
  <StoreContext.Consumer>
    {
    (store) => {
      let state = store.getState().messagePage;

      const addMessage = () => {
        store.dispatch(addMessageAction())
      }

      let onMessageChange = (textMessage) => {
      let action = updateMessageAction(textMessage);
        store.dispatch(action);
      }
      return <Dialogs
        addMessage={addMessage}
        updateMessage={onMessageChange}
        messagePage={state}
      />
    }
  }
  </StoreContext.Consumer>
  )
}
  
export default DialogsContainer; 


