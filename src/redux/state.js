let rerenderTree = () =>{

}


let state = {

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
}

export let addPost = () => {
  let newPost = {

    post: state.profilePage.newPostText,
    like: 5
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state); 
} 

export const updatePostText = (newText) => {

  state.profilePage.newPostText = newText;
  rerenderTree(state);
}

export const subscribe = (observer)=>{
rerenderTree = observer;
}


export default state;