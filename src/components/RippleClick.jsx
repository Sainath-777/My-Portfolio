import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const RippleClick = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
      }, 800);
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ 
              top: ripple.y, 
              left: ripple.x, 
              width: 0, 
              height: 0, 
              opacity: 1, 
              x: '-50%', 
              y: '-50%' 
            }}
            animate={{ 
              width: 280, 
              height: 280, 
              opacity: 0, 
              borderWidth: '3px' 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute rounded-full pointer-events-none"
            style={{ borderStyle: 'solid', borderColor: '#00FFFF', boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleClick;
