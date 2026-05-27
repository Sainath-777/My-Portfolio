import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Background3D from './Background3D';
import SplashCursor from './SplashCursor';
import RippleClick from './RippleClick';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <SplashCursor 
        COLOR="#00FFFF" 
        RAINBOW_MODE={false} 
        SPLAT_RADIUS={0.05} 
        SPLAT_FORCE={800} 
        DENSITY_DISSIPATION={5} 
        VELOCITY_DISSIPATION={5} 
      />
      <RippleClick />
      <Background3D />
      <Navbar />
      <AnimatePresence mode="popLayout">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex-grow w-full"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
