import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MAIN from "./Pages/MAIN";
import Login from "./NavPages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MAIN />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
