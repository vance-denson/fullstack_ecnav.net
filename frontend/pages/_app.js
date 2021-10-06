import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { MenuContextProvider } from '../contexts/MenuContext';
// import { ThemeContextProvider } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MenuContext } from '../contexts/MenuContext';
import { useState } from 'react';
import Backdrop from '../components/Backdrop';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="">
      <DefaultSeo {...SEO} />
      <AnimatePresence exitBeforeEnter>
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
          <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            <div
              className={`${
                darkTheme ? 'dark bg-money-dAccent1' : ''
              } sm:pt-24 w-screen overflow-hidden relative`}
            >
              {menuOpen && <Backdrop />}
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </div>
          </ThemeContext.Provider>
        </MenuContext.Provider>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
