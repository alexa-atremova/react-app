const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {

    dialogs: [{
            id: 1,
            name: 'Димон'
        },
        {
            id: 2,
            name: 'Саня'
        },
        {
            id: 3,
            name: 'Катюха'
        },


    ],
    messages: [{
            message: 'хай'
        },
        {
            message: 'че как ты'
        },
        {
            message: 'шо?'
        },

    ],
    newMessageText: ''

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:

            let messageText = {
                message: state.newMessageText
            }
            state.messages.push(messageText);
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