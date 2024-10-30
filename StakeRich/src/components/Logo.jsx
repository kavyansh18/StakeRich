// src/components/Logo.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImage from '../assets/logo.png'; 

const colorSpread = keyframes`
  0% {
    clip-path: circle(0% at 90% 90%);
  }
  100% {
    clip-path: circle(150% at 90% 90%);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ColorOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ef99b1; /* Adjust the color as needed */
  z-index: 999; /* Ensure it covers all other elements */
  clip-path: circle(0% at 90% 90%);
  animation: ${colorSpread} 2s forwards;
  opacity: ${({ fade }) => (fade ? '0' : '1')};
  transition: opacity 0.5s;
`;

const LogoContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000; /* Ensure it is on top of other elements */
`;

const LogoImage = styled.img`
  width: 60px; /* Adjust the size as needed */
  height: 60px; /* Keep it square for a round shape */
  border-radius: 50%; /* Make it round */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.2); /* Deeper shadow for more depth */
  transition: transform 0.5s ease, box-shadow 0.3s ease; /* Smooth transition for 3D effects */
  transform: perspective(600px) rotateX(10deg) rotateY(10deg) scale(1); /* 3D effect with perspective */

  &:hover {
    transform: perspective(600px) rotateX(0deg) rotateY(0deg) scale(1.1); /* Scale up and remove tilt on hover */
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 8px 12px rgba(0, 0, 0, 0.3); /* More pronounced shadow on hover */
  }

  /* Optional: Add a subtle animation to simulate depth */
  animation: float 4s ease-in-out infinite;
  margin-right:20px
`;

const float = keyframes`
  0%, 100% {
    transform: perspective(600px) rotateX(10deg) rotateY(10deg) scale(1);
  }
  50% {
    transform: perspective(600px) rotateX(15deg) rotateY(15deg) scale(1.05);
  }
`;

const Logo = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate(); 

  const handleClick = () => {
    setIsClicked(true);
    setFadeOut(false);
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          navigate('/blog'); 
        }, 50); 
      }, 50); 
    }, 2000); 
  };


  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setIsClicked(false);
        setLoading(true);
      }, 500); 
    }
  }, [fadeOut]);

  return (
    <>
      {isClicked && <ColorOverlay fade={fadeOut} />}
      <LogoContainer onClick={handleClick}>
        <LogoImage src={logoImage} alt="Logo" />
      </LogoContainer>
    </>
  );
};

export default Logo;
