import React from 'react'
import Lottie from "lottie-react";
import anime from "../Animation/a1.json"

const About = () => {
  return (
    <>
    <div className="main-content">
    <div className="about-us">
  <div className="about-us-container">
    <div className="about-text">
      <h2>About Us</h2>
      <p>
        Welcome to RECIPEVAULT! We are passionate about providing delicious and easy-to-follow recipes for food lovers of all kinds. Whether you're a beginner or an expert in the kitchen, we have something for everyone. Our goal is to inspire you to create memorable meals that bring joy to your home.
      </p>
      <p>
        From spicy wings to fresh salads, our collection of recipes is designed to suit every taste. Explore our site to discover new dishes, find cooking tips, and get inspired by our mouth-watering photos.
      </p>
    </div>
    <div className="about-image">
      {/* <img src="images/b1.jpg" alt="About Us" /> */}
      <Lottie animationData={anime} loop={true} style={{height:"450px"}}/>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default About
