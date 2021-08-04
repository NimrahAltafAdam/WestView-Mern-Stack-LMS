import React from 'react';
import "../App.css";
import {Button} from "./Button";
import "./HeroSection.css";
import video from "../videos/video-1.mp4";


function HeroSection() {
  return (
    <div className = "hero-container">
      <video src={video} autoPlay loop muted />
      <h1 >Welcome To Westview Junior School</h1>
      <p>What are you waiting for?</p>
      <div className = "hero-butns">
        <Button 
        className = "butns"
        buttonStyle = "butn--outline"
        buttonSize = "butn--large"
        >
          GET STARTED
        </Button>

        <Button 
        className = "butns"
        buttonStyle = "butn--primary"
        buttonSize = "butn--large"
        >
          ABOUT US
          <i className = "far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection

