import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateNewClaim } from "./components/createNewClaim";
import { MainWrapper } from "./pages/mainWrapper";
import { IncomingClaims } from "./pages/incoming-claims";
import { LoginRegister } from "./pages/loginRegister";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="registration" element={<LoginRegister />} />
          <Route path="home" element={<MainWrapper />}>
            <Route path="create-claim" element={<CreateNewClaim />} />
            <Route path="incoming-claim" element={<IncomingClaims />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
