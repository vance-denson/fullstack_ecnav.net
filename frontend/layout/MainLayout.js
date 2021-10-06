import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import StarsBackground from '../components/UI/StarsBackground';
import { motion } from 'framer-motion';

function MainLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="h-full w-screen bg-backgroundImage bg-no-repeat bg-funnyMan2 sm:bg-funnyMan2 bg-fixed relative">
      {darkMode && <StarsBackground />}
      {children}
    </div>
  );
}

export default MainLayout;
