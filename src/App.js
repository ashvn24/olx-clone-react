import React from 'react';
import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';  

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/'><Home/></Route>
      <Route path='/signup'><Signup/></Route>
      <Route path='/login'><Login/></Route>
    </BrowserRouter>
  );
}

export default App;
