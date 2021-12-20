import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import NewUser from './pages/NewUser';
import User from './pages/User';
import UserList from './pages/UserList';
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newuser" element={<NewUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
