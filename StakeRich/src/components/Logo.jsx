// src/components/Logo.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImage from '../assets/logo.png'; // Make sure to replace with the correct path

// Keyframes for the color spread effect
const colorSpread = keyframes`
  0% {
    clip-path: circle(0% at 90% 90%);
  }
  100% {
    clip-path: circle(150% at 90% 90%);
  }
`;

// Keyframes for the fade-out effect
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Overlay that covers the screen and spreads
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

// Container for the logo
const LogoContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000; /* Ensure it is on top of other elements */
`;

// Styled image element
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

// Floating keyframes for a subtle depth effect
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
  const navigate = useNavigate(); // Correct hook for navigation

  const handleClick = () => {
    setIsClicked(true);
    setFadeOut(false);

    // Simulate content loading (e.g., API calls, resource loading)
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          navigate('/blog'); // Use navigate to change route
        }, 50); // Duration of the fade-out transition
      }, 50); // Duration before starting the fazde-out animation
    }, 2000); // Duration of the spread animation
  };


  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setIsClicked(false);
        setLoading(true);
      }, 500); // Match the duration of the fade-out transition
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
