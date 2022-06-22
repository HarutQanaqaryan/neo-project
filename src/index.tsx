import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginRegister } from "./pages/LoginRegister";
import { MainWrapper } from "./pages/MainWrapper";
import { CreateEditClaim } from "./components/CreateEditNewClaim";
import { NotFound } from "./components/NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </Provider>
);
