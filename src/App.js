import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="container">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </BrowserRouter>
        {/* <Footer /> */}
      </AuthProvider>
    </div>
  );
}

export default App;
