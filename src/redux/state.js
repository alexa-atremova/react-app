let store ={
  _state:{
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
      newPostText:''
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
  getState(){
    return this._state;
  },
  addPost(){
    let newPost = {
  
      post: this._state.profilePage.newPostText,
      like: 5
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this.rerenderTree(this._state); 
  },

  updatePostText (newText) {

    this._state.profilePage.newPostText = newText;
    this.rerenderTree(this._state);
  },


  rerenderTree(){},

  subscribe(observer){
    this.rerenderTree = observer;
    }
}


export default store;
window.store = store;

