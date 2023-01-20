import React from "react";
import { Routes, Route} from "react-router-dom";
import Data from "./pages/Data/Data";
const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Data />} />
    </Routes>
  );
};

export default Router;
