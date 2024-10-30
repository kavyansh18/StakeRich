import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";

function Dino() {
  const dinoRef = useRef();
  const cactusRef = useRef();
  const [score, setScore] = useState(0);

  const jump = () => {
    if (!!dinoRef.current && dinoRef.current.classList != "jump") {
      dinoRef.current.classList.add("jump");
      setTimeout(function () {
        dinoRef.current.classList.remove("jump");
      }, 300);
    }
  };

  useEffect(() => {
    const isAlive = setInterval(function () {
      const dinoTop = parseInt(
        getComputedStyle(dinoRef.current).getPropertyValue("top")
      );

      let cactusLeft = parseInt(
        getComputedStyle(cactusRef.current).getPropertyValue("left")
      );

      if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over! Your Score : " + score);
        setScore(0);
      } else {
        setScore(score + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  });

  useEffect(() => {
    document.addEventListener("keydown", jump);
    return () => document.removeEventListener("keydown", jump);
  }, []);

  return (
    <div className="game">
      Score : {score}
      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
    </div>
  );
}

export default Dino;