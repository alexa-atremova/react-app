const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let messageText = state.newMessageText;
            state.messages.push({
                message: messageText
            });
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }

}
export const addMessageAction = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateMessageAction = (textMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: textMessage
    }
}
export default dialogsReducer;