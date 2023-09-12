import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import TopBar from './components/topbar/TopBar';
import Login from './login/Login';
import Register from './register/Register';


function App() {
  return (
    <div >
      <Router>
      <TopBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
