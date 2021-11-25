const SEND_MESSAGE = 'SEND-MESSAGE';



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


}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:{

            let body = action.newMessageText;
            return{
                ...state,
                messages:[...state.messages,{id:2, message: body}]
            }
        
        }
    
        default:
            return state;
    }

}
export const addMessageAction = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
}

export default dialogsReducer;