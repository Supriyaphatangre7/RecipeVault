import React, { useState, useEffect,  } from 'react';
import { useAuth } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import anim from "../Animation/a4.json"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLs } = useAuth(); 
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const responseData = await response.json();

      if (response.ok) {
        
        storeTokenInLs(responseData.token);
        toast.success('Login successful!');
        setUser({email:"",password:""});
        navigate("/"); 
      }
      else{
        toast.error(responseData.extraDetails?responseData.extraDetails.join(" ,"):responseData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <div className="main-content">
   <div className="container text-center register-container" style={{ marginTop: "35px" }}>
      <div className="row align-items-center">
        {/* Left side with Lottie animation */}
        <div className="col-lg-6">
        <Lottie animationData={anim} loop={true} style={{ maxHeight: "500px", width: "100%", margin: "auto" }}/>
        </div>

        {/* Right side with Login form */}
        <div className="col-lg-6">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8" style={{marginTop:"50px"}}>
                <div className="card shadow-lg" >
                  <div className="card-body">
                    <h2 className="card-title text-center mb-4">Login Here</h2>
                    <form onSubmit={handleSubmit} >
                      {/* Email input field */}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={user.email}
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          onChange={handleInput}
                        />
                      </div>

                      {/* Password input field */}
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={user.password}
                          name="password"
                          id="password"
                          placeholder="Enter your password"
                          onChange={handleInput}
                        />
                      </div>

                      {/* Login button */}
                      <div className="d-grid" style={{ marginTop: "30px" }}>
                        <button type="submit" className="btn btn-dark">
                          Login
                        </button>
                      </div>

                      {/* Don't have an account? text */}
                      <div className="mt-3">
                        <p>
                          <span>Don't have an account?</span>
                          <a href="/register" className="ms-2">Register Here</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
