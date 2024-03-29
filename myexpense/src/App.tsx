import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from './pages/sidebar/Sidebar';
// import Appbar from './pages/appbar/Appbar';
import Login from './pages/login/Login';
// import Addexpense from './component/expenselist/Expenselist';
// import Searchexpense from './component/searchexpense/Checkmoney';
import Checkmoney from './pages/checkmoney/Checkmoney';
// import Expenselist from './component/expenselist/Expenselist';
import Addexpense from './pages/addexpense/Addexpense';
import Register from './pages/register/Register';
// import Layout from './pages/layout/Layout';
import Layout from './pages/Layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import EditExpenseForm from './pages/aditexpense/EditExpenseForm';


     
function App() {
  return (
    < >
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='/aditexpense' element={<EditExpenseForm/>}/>
          {/* <Route path='addexpense' element={<Addexpense />} /> */}
          <Route path='checkmoney' element={<Checkmoney />} />
          {/* <Route path='/expenselist' element={<Expenselist/>}/> */}
          <Route path='addexpensein' element={<Addexpense />} />
         
          {/* <Route path='Dashboard' element={<Sidebar/>}/> */}
        </Route>

      </Routes >
    </>
  )
}

export default App;
