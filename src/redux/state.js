import {
  rerenderTree
} from '../render';


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

export let addPost = (postMessage) => {
  let newPost = {

    post: postMessage,
    like: 5
  }
  state.profilePage.posts.push(newPost);
  rerenderTree(state);
}


export default state;