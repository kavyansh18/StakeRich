import React, { useState, useEffect, Suspense } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaExchangeAlt, FaShoppingCart, FaMoneyBillWave, FaWallet, FaBars, FaMoon, FaSun } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import styles from './Navbar.module.css';
import WalletConnectModal from './WalletConnectModal';
import Sonic from '../../models/Sonic';
import { Canvas } from '@react-three/fiber';

const colorSpread = keyframes`
  0% {
    clip-path: circle(0% at var(--clip-x) var(--clip-y));
  }
  100% {
    clip-path: circle(150% at var(--clip-x) var(--clip-y));
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

const ColorOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ef99b1; /* Adjust the color as needed */
  z-index: 9999; /* Ensure it covers all other elements */
  clip-path: circle(0% at var(--clip-x) var(--clip-y));
  animation: ${colorSpread} 2s forwards, ${fadeOut} 1s forwards 2s; /* Trigger fade-out after spread animation */
  transition: opacity 1s;
  opacity: ${({ fade }) => (fade ? '0' : '1')};
`;

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [navbarClass, setNavbarClass] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const pageClasses = {
      '/home': styles.home,
      '/trade': styles.trade,
      '/buy': styles.buy,
      '/blog':styles.blog
      // Add more mappings as needed
    };

    // Determine the class based on the current path
    const currentClass = Object.keys(pageClasses).find(route => path.includes(route));
    setNavbarClass(currentClass ? pageClasses[currentClass] : '');
  }, [location.pathname]);
  
  useEffect(() => {
    if (!isMenuOpen) {
      const links = document.querySelectorAll(`.${styles.navLinks} a`);
      links.forEach((link) => {
        link.setAttribute('data-text', link.textContent);
      });
    }
  }, [isMenuOpen]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    const eyes = document.querySelectorAll(`.${styles.eye}`);
    const updateEyesPosition = (e) => {
      eyes.forEach(eye => {
        const { left, top, width, height } = eye.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY), width / 3);
        const pupil = eye.querySelector(`.${styles.pupil}`);
        pupil.style.transform = `translate(-50%, -50%) translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;
      });
    };

    document.addEventListener('mousemove', updateEyesPosition);
    return () => {
      document.removeEventListener('mousemove', updateEyesPosition);
    };
  }, []);

  const renderLogo = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className={styles.char}>{char}</span>
    ));
  };

  const handleLogoClick = (e) => {
    // Check if the current path is not the home path
    if (location.pathname !== '/home') {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      document.documentElement.style.setProperty('--clip-x', `${x}px`);
      document.documentElement.style.setProperty('--clip-y', `${y}px`);

      setIsClicked(true);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          navigate('/home');
        }, 50); 
      }, 2000); 
    }
  };

  
  return (
    <>
      {isClicked && <ColorOverlay fade={fadeOut} />}
      <div className={`${styles.navbar} ${navbarClass} ${darkMode ? styles.darkMode : ''}`}>
        <div className={styles.logoLink} onClick={handleLogoClick}>
          <div className={styles.logo}>{renderLogo('StakeRich')}</div>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
          <FaBars />
        </div>
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''} ${isMenuOpen ? styles.noTyping : ''}`}>
          <Link to="/trade" className={styles.connectWallet} onClick={handleOpenModal}><FaExchangeAlt /> Swap</Link>
          <Link to="/buy"  className={styles.connectWallet} onClick={handleOpenModal}><FaShoppingCart /> Buy</Link>
          <Link to="/gambling"  className={styles.connectWallet}><FaShoppingCart /> GoTrade</Link>
          <Link to="#" className={styles.connectWallet} onClick={handleOpenModal}>
            <FaWallet /> Connect Wallet
          </Link>
          <Link className={styles.test} to="/test"><FaMoneyBillWave />Test</Link>
        </div>
        <WalletConnectModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div className={styles.toggleEyesContainer}>
          <div className={styles.eye}>
            <div className={styles.pupil}></div>
          </div>
          <div className={styles.eye}>
            <div className={styles.pupil}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;