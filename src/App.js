import React from "react";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Router from "./Router";
import "./style.css"


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
