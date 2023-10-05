import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import FollowSuggestion from './components/followSuggestions/FollowSuggestion';


function App() {
  const {user} = useContext(AuthContext)

  return (
    <div className='app'>
      <Router>
      <TopBar/>
        <Routes>
          <Route path='/' element={user ? <Home/> : <Register/>}/>
          <Route path='/profile/:username' element={!user ? <Navigate to={"/register"}/> : <Profile/>}/>
          <Route path='/login' element={user ? <Navigate to={'/'}/> :  <Login/>}/>
          <Route path='/register' element={!user ? <Register/> : <Navigate to={'/follow'}/> }/>
          <Route path='/follow' element={user ? <FollowSuggestion/> : <Register/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
