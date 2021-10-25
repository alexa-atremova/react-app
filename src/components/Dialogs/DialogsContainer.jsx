import { addMessageAction, updateMessageAction } from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';



let mapState = (state) => {
  return {
    messagePage: state.messagePage
  }

}

let mapDispatch = (dispatch) => {
  return {
    updateMessage: (textMessage) => {
      dispatch(updateMessageAction(textMessage))
    },
    addMessage: () => {
      dispatch(addMessageAction())
    }
  }
}
const DialogsContainer = connect(mapState, mapDispatch)(Dialogs);

export default DialogsContainer;




