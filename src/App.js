import React from "react";
import Navbar from "./components/navbar/navbar";
import Futter from "./components/futer";
import PastNavbar from "./components/pastNavbar";
import Ortga from "./components/Orqaga";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Router from "./Router";
import "./style.css"
import { Box } from '@mui/material';
import './App.css'
import Checkout from "./Checkout/Checkout";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <div style={{ display: "flex" }}>
            <Navbar />
            <Router />
          </div>
          <Futter />
          <PastNavbar />
          <Ortga />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
