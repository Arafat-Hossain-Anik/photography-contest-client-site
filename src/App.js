import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import MakeContest from './components/AdminDashboard/MakeContest/MakeContest';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contest" element={<MakeContest />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
