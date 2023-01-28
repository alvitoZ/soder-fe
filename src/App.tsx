import React from "react";
import "./App.css";
import Fetch from "./components/pages/Index";
import HalamanRegister from "./components/pages/HalamanRegister";
import HalamanLogin from "./components/pages/HalamanLogin";
import HalamanPost from "./components/pages/HalamanPost";
import HalamanDetail from "./components/pages/HalamanDetail";
import HalamanUpdate from "./components/pages/HalamanUpdate";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div>
        <Fetch />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/afterDelete" element={<Fetch />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/register" element={<HalamanRegister />} />
          <Route path="/login" element={<HalamanLogin />} />
          <Route path="/HalamanPost" element={<HalamanPost />} />
          <Route path="/HalamanDetail/:id" element={<HalamanDetail />} />
          <Route path="/HalamanUpdate/:id" element={<HalamanUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
