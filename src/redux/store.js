import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    this.rerenderTree(this._state);

  }

}



export default store;
window.store = store;