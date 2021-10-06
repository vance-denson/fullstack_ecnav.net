import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.5,
    transition: {
      type: 'tween',
      delay: 0.1,
    },
    // height: '100vh',
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
    },
  },
};

const Backdrop = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 0.5 }}
      // exit="exit"
      className="bg-black absolute h-full inset-0 z-20 sm:hidden"
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    ></motion.div>
  );
};

export default Backdrop;

// const variants = {
//   inital: {

//   },
//   animate: {

//   },
//   exit: {

//   }
// }
