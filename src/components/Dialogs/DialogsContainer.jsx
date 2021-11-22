import { addMessageAction, updateMessageAction } from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import {compose} from 'redux';



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


export default compose(connect(mapState, mapDispatch), withAuthRedirect)(Dialogs);





