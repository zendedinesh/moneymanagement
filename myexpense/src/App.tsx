import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './pages/sidebar/Sidebar';
import Appbar from './pages/appbar/Appbar';
import Login from './pages/login/Login';
// import Addexpense from './component/expenselist/Expenselist';
// import Searchexpense from './component/searchexpense/Checkmoney';
import Checkmoney from './pages/checkmoney/Checkmoney';
// import Expenselist from './component/expenselist/Expenselist';
import Addexpense from './pages/addexpense/Addexpense';
import Aditexpense from './pages/aditexpense/Aditexpense';
import Register from './pages/register/Register';

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Sidebar />} />
        <Route path='/appbar' element={<Appbar />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='addexpense' element={<Addexpense />} /> */}
        <Route path='/checkmoney' element={<Checkmoney />} />
        {/* <Route path='/expenselist' element={<Expenselist/>}/> */}
        <Route path='/addexpensein' element={<Addexpense />} />
        <Route path='/aditexpense' element={<Aditexpense />} />
        {/* <Route path='Dashboard' element={<Sidebar/>}/> */}
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App;
