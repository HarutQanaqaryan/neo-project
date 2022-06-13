import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainWrapper } from "./pages/mainWrapper";
import { LoginRegister } from "./pages/loginRegister";
import { CreateEditClaim } from "./components/createEditNewClaim";

function App() {
  return (
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
  );
}

export default App;
