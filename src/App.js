import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login';

function App(props) {


  return (
    <BrowserRouter>
    <div className="App">
    <HeaderContainer />
    <Navbar />
      <div>
      <Route path = '/profile/:userId?' render = {()=><ProfileContainer />}/>    
      <Route path = '/dialogs' render = {()=><DialogsContainer />}/>
      <Route path = '/news' render = {()=><News />}/>
      <Route path = '/settings' render = {()=><Settings />}/>
      <Route path = '/users' render = {()=><UsersContainer />}/>
      <Route path = '/login' render = {()=><Login />}/>
      </div>
    


    </div>
    </BrowserRouter>
  );
}

export default App;
