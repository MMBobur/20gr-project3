import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home/index"
import Shopp from  "./pages/Shopp/index"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopp" element={<Shopp />} />
    </Routes>
  );
};

export default Router;
