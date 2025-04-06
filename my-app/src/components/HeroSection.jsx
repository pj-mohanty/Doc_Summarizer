import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';
import {useNavigate} from "react-router-dom";


const HeroSection= () => {
    const navigate = useNavigate();

    const openStreamlitApp = () => {
      window.location.href = "http://localhost:8501";
    };

  return (
    <div className='Hero-container'>
      <video src="/videos/2268807-hd_1920_1080_24fps.mp4" autoPlay loop muted />
      <h1>PaperTalks</h1>
      <p>Understanding the future with technology.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={openStreamlitApp}
        >
          upload documents
        </Button>
      </div>
    </div>
  )
}
export default HeroSection
