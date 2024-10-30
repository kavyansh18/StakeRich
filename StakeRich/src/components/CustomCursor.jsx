import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
      setVisible(true); 
    };

    const mouseLeave = () => {
      setVisible(false); 
    };

    const mouseEnter = () => {
      setVisible(true); 
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: mouse.x - 10,
      y: mouse.y - 5,
      opacity: visible ? 1 : 0, 
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  };

  return <motion.div className='cursor' variants={variants} animate="default" />;
};

export default CustomCursor;
