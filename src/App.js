import React from "react";
import Navbar from "./components/navbar/navbar";
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
        <div style={{display:"flex"}}>
           <Navbar />
           <Router/>
        </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
