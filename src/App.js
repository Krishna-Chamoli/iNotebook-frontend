import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import AlertState from './context/alert/AlertState';

import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <AlertState>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
            <Route exact path='/about' element={< About />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </AlertState>
  );
}

export default App;
