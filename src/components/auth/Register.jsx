import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./auth.scss";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductImage from "./register/ProductImage";
import RegisterForm from "./register/RegisterForm";
import VerifyOTP from "./register/verifyOTP/VerifyOTP";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      console.log("Registration successful");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12 bg-primary">
          <ProductImage />
        </div>
        <div className="col-lg-12 container">
          {/* <RegisterForm /> */}
          <VerifyOTP />
        </div>
      </div>
    </>
  );
};

export default Register;
