import logo from "./logo.svg";
import "./App.css";
import "./common.scss";
import "./style.scss";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./components/auth/Authentication";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
