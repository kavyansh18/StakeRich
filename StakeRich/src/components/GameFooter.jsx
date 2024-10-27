import React, { useEffect } from 'react';

const GameFooter = () => {
  useEffect(() => {
    // Helper function to load a script and return a promise
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
          console.log(`Loaded script: ${src}`);
          resolve();
        };
        script.onerror = (err) => {
          console.error(`Failed to load script: ${src}`, err);
          reject(err);
        };
        document.body.appendChild(script);
      });
    };

    // List of script sources
    const scriptSrcs = [
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js",
      "./game/js/utils.js",
      "./game/js/data/collisions.js",
      "./game/js/classes/CollisionBlock.js",
      "./game/js/classes/Sprite.js",
      "./game/js/classes/Player.js",
      "./game/js/eventListeners.js",
      "./game/index.js"
    ];

    // Load scripts in sequence to ensure correct order
    const loadScriptsSequentially = async () => {
      try {
        for (const src of scriptSrcs) {
          await loadScript(src);
        }
        console.log('All game scripts loaded successfully');
      } catch (err) {
        console.error('Script loading failed', err);
      }
    };

    loadScriptsSequentially();

    // Cleanup scripts when component unmounts
    return () => {
      scriptSrcs.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div>
      <style>{`
        body {
          background: black;
        }
      `}</style>
      <div id="game-container"></div>
    </div>
  );
};

export default GameFooter;
