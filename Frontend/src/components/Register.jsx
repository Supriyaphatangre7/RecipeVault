import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import anim from "../Animation/a3.json"

const Register = () => {
  const [user, setUser] = useState({
    username: "",
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
  
    if (!user.username || !user.email || !user.password) {
      toast.error("All fields are required.");
      return;
    }
  
    console.log(user);
  
    try {
      const response = await fetch(`http://localhost:3000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const responseData = await response.json();
      if (response.ok) {
        storeTokenInLs(responseData.token);
        toast.success("Registration successful! Please log in.");
        setUser({ username: "", email: "", password: "" });
        navigate("/login");
      } else {
        console.log("Response Error:", responseData);
        toast.error(responseData.message || "Registration failed.");
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Something went wrong, please try again.");
    }
  };
  

  return (
    <div className="main-content">
    <div className="container text-center register-container"style={{ marginTop: "80px" }} >
    <div className="row align-items-center">
      <div className="col-lg-6">
      <Lottie animationData={anim} loop={true} style={{ height: "500px", width: "100%" }} />
      </div>

      <div className="col-lg-6">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h2 className="card-title text-center mb-4">Register Here</h2>
                  <form onSubmit={handleSubmit}>

                    {/* Username Field */}
                    <div className="mb-3" style={{ marginTop: "40px" }}>
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        value={user.username}
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        onChange={handleInput}/>
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={user.email}
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={handleInput}/>
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={user.password}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={handleInput}/>
                    </div>

                    
                    <div className="d-grid" style={{marginTop:"40px"}}>
                      <button type="submit" className="btn btn-dark">
                        Register
                      </button>
                    </div>

                    {/* <div className="my-4">
                      <p>OR</p>
                    </div>

                    <div className="mb-3">
                      <button className="btn btn-outline-dark w-100">
                        Continue with Google
                      </button>
                    </div>

                    <div className="mb-3">
                      <button className="btn btn-outline-primary w-100">
                        Continue with Facebook
                      </button>
                    </div> */}

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
  
  );
};

export default Register;
