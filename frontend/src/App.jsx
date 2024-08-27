import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CustomerProfile from './components/CustomerProfile';
import FeedbackAndQueries from './components/FeedbackAndQueries';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer/:id" element={<CustomerProfile />} />
        <Route path="/feedback" element={<FeedbackAndQueries />} />
      </Routes>
    </Router>
  );
};

export default App;
