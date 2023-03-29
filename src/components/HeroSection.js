import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       <video src='https://player.vimeo.com/external/415290650.sd.mp4?s=56094c4ce89f0e45ca25115a7c9310f9bb485571&profile_id=164&oauth2_token_id=57447761' autoPlay loop muted />

      <h1>Start your journey Now!!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;