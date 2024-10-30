import React, { useEffect } from 'react';

const GameWrapper = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/game/js/index.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="game-container">
      <canvas id="gameCanvas"></canvas>
    </div>
  );
};

export default GameWrapper;
