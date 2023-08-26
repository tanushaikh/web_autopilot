import { useState } from "react";
import '../auth.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductImage from "../register/ProductImage";
import LoginForm from "./loginForm/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard")

    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    // <div>
    //   <h1 >Login</h1>
    //   <form
    //     onSubmit={handleSubmit}
    //   >
    //     <input
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       type="email"
    //       placeholder="Email"
    //     />
    //     <br />
    //     <input
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       type="password"
    //       placeholder="Password"
    //     />
    //     <br />
    //     <input type="submit" value="Login" />
    //   </form>
    // </div>
    <div className="row">
      <div className="col-lg-12">
        <ProductImage />
      </div>
      <div className="col-lg-12">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
