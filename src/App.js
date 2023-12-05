/**
 * Author : Himanshu Tripathi
 * description: entry point for the react WebApp
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/LandingPage/LandingPage';
import HomePage from './components/User/User';
import SelectTypeSignup from './components/Signup/SelectType';
// import { Provider as StoreProvider } from "react-redux";
import Home from './components/Home/home';


const App = () => {
  return (
    // <StoreProvider store={store}>
    <Router>
      <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/SelectTypeSignup" element={<SelectTypeSignup />} />
        <Route path="/HomePage" element={<HomePage />}>
        </Route>
      </Routes>
    </Router>
    // </StoreProvider>

  );
};

export default App;
