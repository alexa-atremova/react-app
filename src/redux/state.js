const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [{
          post: "Привет!",
          like: "3"
        },
        {
          post: "Эй?",
          like: "1"
        },
        {
          post: ":(",
          like: "6"
        }
      ],
      newPostText: ''
    },
    messagePage: {

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
  },
  getState() {
    return this._state;
  },
  rerenderTree() {},
  subscribe(observer) {
    this.rerenderTree = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {

        post: this._state.profilePage.newPostText,
        like: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this.rerenderTree(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText;
      this.rerenderTree(this._state);


    } else if (action.type === SEND_MESSAGE) {
      let messageText =  this._state.messagePage.newMessageText;
      this._state.messagePage.messages.push({message: messageText});
      this._state.messagePage.newMessageText = '';
      this.rerenderTree(this._state);


    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {

      this._state.messagePage.newMessageText = action.newMessage;
      this.rerenderTree(this._state);
    }

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

export const addPostAction = () => {
  return {
    type: ADD_POST
  }
}

export const updatePostAction = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}


export default store;
window.store = store;