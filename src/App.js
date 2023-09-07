import logo from "./logo.svg";
import "./App.css";
import "./common.scss";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./components/auth/Authentication";
import Dashboard from "./pages/shop/Dashboard/Dashboard";
import Inventory from "./pages/shop/inventory/Inventory";
import Masters from "./pages/shop/masters/Masters";
import Reports from "./pages/shop/Reports/Reports";
import Suppliers from "./pages/shop/Suppliers/Suppliers";
import Orders from "./pages/shop/Orders/Orders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/shop/dashboard" element={<Dashboard />} />
          <Route path="/shop/inventory" element={<Inventory />} />
          <Route path="/shop/reports" element={<Reports />} />
          <Route path="/shop/suppliers" element={<Suppliers />} />
          <Route path="/shop/orders" element={<Orders />} />
          <Route path="/shop/masters" element={<Masters />} />
          <Route path="/shop/dashboard" element={<Dashboard />} />
          <Route path="/shop/dashboard" element={<Dashboard />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
