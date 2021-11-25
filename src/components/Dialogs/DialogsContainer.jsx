import { addMessageAction } from './../../redux/dialogs-reducer'
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
    addMessage: (newMessageText) => {
      dispatch(addMessageAction(newMessageText))
    }
  }
}


export default compose(connect(mapState, mapDispatch), withAuthRedirect)(Dialogs);





