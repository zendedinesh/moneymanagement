import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';
import Appbar from './component/appbar/Appbar';
import Login from './component/login/Login';
// import Addexpense from './component/expenselist/Expenselist';
// import Searchexpense from './component/searchexpense/Checkmoney';
import Checkmoney from './component/checkmoney/Checkmoney';
import Expenselist from './component/expenselist/Expenselist';
import Addexpense from './component/addexpense/Addexpense';
import Aditexpense from './component/aditexpense/Aditexpense';

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Sidebar />} />
        <Route path='/appbar' element={<Appbar />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='addexpense' element={<Addexpense />} /> */}
        <Route path='/checkmoney' element={<Checkmoney/>}/>
        <Route path='/expenselist' element={<Expenselist/>}/>
        <Route path='/addexpensein' element={<Addexpense/>}/>
        <Route path ='/aditexpense' element={<Aditexpense/>}/>

      </Routes>
    </>
  )
}

export default App;
