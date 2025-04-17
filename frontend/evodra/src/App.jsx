import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import DashboardLayout from './components/layout/DashboardLayout';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Authenticated Routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
