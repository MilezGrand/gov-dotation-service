import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header'
import Blocks from './components/List'
import Admin from './components/Admin'
import Profile from './components/Profile'

function App(props) {
  return (<div className="App">
      <BrowserRouter>
        <Header/>
        <Route path="/list" render={ () => <Blocks/>}/>
        <Route path="/profile" render={ () => <Profile/>}/>

      </BrowserRouter>
  </div>)
}

export default App;
