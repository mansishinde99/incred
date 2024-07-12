import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Pages/Main";
import Login from "./NavPages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
