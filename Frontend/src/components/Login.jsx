import React, { useState, useEffect,  } from 'react';
import { useAuth } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import anim from "../Animation/log.json"

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
      <div className="container text-center">
        <div className="row align-items-center">
         
          <div className="col-lg-6">
            {/* <img
              src="images/p1.png"
              alt=""
              className="img-fluid mt-5"
              style={{ height: "500px", width: "600px" }}
            /> */}
            <Lottie animationData={anim} loop={true} style={{height:"450px",marginTop:"120px"}}/>
          </div>

          <div className="col-lg-6">
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card shadow-lg" style={{ marginTop: "90px" }}>
                    <div className="card-body">
                      <h2 className="card-title text-center mb-4">Login Here</h2>
                      <form onSubmit={handleSubmit} style={{ height: "300px" }}>
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

                        <div className="d-grid" style={{ marginTop: "30px" }}>
                          <button type="submit" className="btn btn-dark">
                            Login
                          </button>
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
    </>
  );
};

export default Login;
