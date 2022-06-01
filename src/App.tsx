import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateClaim } from "./pages/create-claim";
import { Home } from "./pages/home";
import { LoginUser } from "./pages/loginPage";
import { Registration } from "./pages/registerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-claim" element={<CreateClaim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
