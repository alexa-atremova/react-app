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
      ]
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
    if (action.type === 'ADD-POST') {
      let newPost = {

        post: this._state.profilePage.newPostText,
        like: 5
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this.rerenderTree(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

      this._state.profilePage.newPostText = action.newText;
      this.rerenderTree(this._state);
    }

  }
}


export default store;
window.store = store;