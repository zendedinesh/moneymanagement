import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';
import Appbar from './component/appbar/Appbar';
import Login from './component/login/Login';
import Addexpense from './component/addexpense/Addexpense';
import Searchexpense from './component/searchexpense/Searchexpense';

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Sidebar />} />
        <Route path='/appbar' element={<Appbar />} />
        <Route path='/login' element={<Login />} />
        <Route path='addexpense' element={<Addexpense />} />
        <Route path='/searchexpense' element={<Searchexpense/>}/>
      </Routes>
    </>
  )
}

export default App;
