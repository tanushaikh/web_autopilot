import logo from './logo.svg';
import './App.css';
import './common.scss'
import './style.scss'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<h1>Home page</h1>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
