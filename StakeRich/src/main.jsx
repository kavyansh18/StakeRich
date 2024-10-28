import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AppKitProvider } from '../src/config/Web3ModalProvider'; 
import { CharacterAnimationsProvider } from '../src/models/Contexts/CharcaterAnimation.jsx'; 
import CustomCursor from './components/CustomCursor.jsx'; 
import { HashRouter } from 'react-router-dom'; 

import { Buffer } from 'buffer';
window.Buffer = Buffer;

import process from 'process';
window.process = process;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppKitProvider>
      <CharacterAnimationsProvider>
        <CustomCursor />
        <HashRouter> 
          <App />
        </HashRouter>
      </CharacterAnimationsProvider>
    </AppKitProvider>
  </React.StrictMode>
);
