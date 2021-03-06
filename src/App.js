import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import MakeContest from './components/AdminDashboard/MakeContest/MakeContest';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContestDetails from './Pages/Details/ContestDetails';
import DashBoard from './components/AdminDashboard/DashBoard/DashBoard';
import ContestResult from './Pages/ContestResult/ContestResult';
import AllContest from './components/AllContest/AllContest';
import MakeAdmin from './components/AdminDashboard/MakeAdmin/MakeAdmin';
import ManageContest from './components/AdminDashboard/ManageContest/ManageContest';
import DashBoardHome from './components/AdminDashboard/DashBoardHome/DashBoardHome';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/contest" element={<AllContest />}></Route>
            <Route path='/dashboard' element={<PrivateRoute><DashBoard /></PrivateRoute>}>
              <Route path="/dashboard" element={<DashBoardHome />}></Route>
              <Route path="/dashboard/contest" element={<MakeContest />}></Route>
              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />}></Route>
              <Route path="/dashboard/managecontest" element={<ManageContest />}></Route>
            </Route>
            <Route path="/contest/:id" element={<PrivateRoute><ContestDetails /></PrivateRoute>}>
            </Route>
            <Route path="/contest_result/:id" element={<PrivateRoute><ContestResult /></PrivateRoute>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
