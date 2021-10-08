import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Navbar />
      <div>
      <Route path = '/dialogs' component = {Dialogs}/>
      <Route path = '/profile' component = {Profile}/>
      <Route path = '/news' component = {News}/>
      <Route path = '/settings' component = {Settings}/>
      </div>
    
 
    </div>
    </BrowserRouter>
  );
}

export default App;
