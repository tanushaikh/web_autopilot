// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "../auth.scss";
// import axios from "axios";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import ProductImage from "./ProductImage";
// import RegisterForm from "./registerForm/RegisterForm";
// import VerifyOTP from "./verifyOTP/VerifyOTP";
// import ResetPassword from "./resetPassword/ResetPassword";
// import SetNewPassword from "./setNewPassword/SetNewPassword";
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../../../redux/slices/CounterSlice'
// import { handleAuth } from '../../../redux/slices/AuthSlice'

// const Register = () => {

//   const count = useSelector((state) => state.counter.value)
//   const data = useSelector((state) => state.auth.value)
//   const dispatch = useDispatch()


//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordShow, setPasswordShow] = useState(false);
//   // const [counts, setConts] = useState(0);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/auth/register", {
//         name,
//         email,
//         password,
//       });
//       console.log("Registration successful");
//       navigate("/login");
//     } catch (error) {
//       console.error("Registration error:", error);
//     }
//   };
//   return (
//     <>
//       <h1 >{data}</h1>
//       <button onClick={() => dispatch(handleAuth("Login"))}>Login</button>
//       <button onClick={() => dispatch(handleAuth("Register"))}>Register</button>
//       <button onClick={() => dispatch(handleAuth("Logout"))}>Logout</button>
//       <button onClick={() => dispatch(handleAuth("SendMail"))}>SendMail</button>
//       <div className="row">
//         <div className="col-lg-12 bg-primary">
//           <ProductImage />
//         </div>
//         <div className="col-lg-12 container">
//           <RegisterForm />
//           {/* <VerifyOTP /> */}
//           {/* <ResetPassword /> */}
//           {/* <SetNewPassword /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
