import React from 'react';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
      <BrowserRouter>
        <Redirect to="/login"/>
        <Route component={Login} path="/login"/>
        <Route component={Dashboard} path="/dashboard"/>
      </BrowserRouter>
  );
}

export default App;
