import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { CreateCompany } from "./page/CreateCompany";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={CreateCompany} path="/create-company" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
