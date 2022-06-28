import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import MakeContest from './components/AdminDashboard/MakeContest/MakeContest';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Register/Register';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContestDetails from './Pages/Details/ContestDetails';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contest" element={<MakeContest />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path='/contest/:id' element={
              <PrivateRoute>
                <ContestDetails />
              </PrivateRoute>
            }>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
