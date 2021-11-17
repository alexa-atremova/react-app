import { addMessageAction, updateMessageAction } from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';



let mapState = (state) => {
  return {
    messagePage: state.messagePage,
  
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
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapState, mapDispatch)(AuthRedirectComponent);

export default DialogsContainer;





