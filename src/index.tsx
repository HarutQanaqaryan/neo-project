import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import  store  from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginRegister } from "./pages/loginRegister";
import { MainWrapper } from "./pages/mainWrapper";
import { CreateEditClaim } from "./components/createEditNewClaim";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="registration" element={<LoginRegister />} />
          <Route path="home" element={<MainWrapper />}>
            <Route path="create-claim" element={<CreateEditClaim />} />
            <Route path="incoming-claim" element={<CreateEditClaim />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </Provider>
);
