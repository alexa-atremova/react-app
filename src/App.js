import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
      <Route path = '/profile' render = {()=><Profile />}/>    
      <Route path = '/dialogs' render = {()=><DialogsContainer />}/>
      <Route path = '/news' render = {()=><News />}/>
      <Route path = '/settings' render = {()=><Settings />}/>
      </div>
    
 
    </div>
    </BrowserRouter>
  );
}

export default App;
