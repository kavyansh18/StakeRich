// src/components/GameWrapper.js
import React, { useEffect } from 'react';

const GameWrapper = () => {
  useEffect(() => {
    // Load game scripts
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/game/js/index.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="game-container">
      {/* Ensure this div exists for the game to render in */}
      <canvas id="gameCanvas"></canvas>
    </div>
  );
};

export default GameWrapper;
