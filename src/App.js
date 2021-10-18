import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {


  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Navbar />
      <div>
      <Route path = '/profile' render = {
        ()=><Profile 
          profilePage = {props.state.profilePage} 
          addPost = {props.addPost}
          updatePostText = {props.updatePostText}/>}/>
          
      <Route path = '/dialogs' render = {()=><Dialogs state = {props.state.messagePage}/>}/>
      <Route path = '/news' render = {()=><News />}/>
      <Route path = '/settings' render = {()=><Settings />}/>
      </div>
    
 
    </div>
    </BrowserRouter>
  );
}

export default App;
