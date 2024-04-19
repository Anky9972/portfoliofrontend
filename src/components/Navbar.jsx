import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useSpring } from "framer-motion";
import '../button.css';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

function Navbar({ isOn, setIsOn }) {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [progress,setProgress] = useState(true)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setProgress(false)
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  return (
    <motion.header className={`top-0 fixed z-10  border-b border-stone-300 w-full h-20 `}
      style={{
        backgroundColor: isOn ? '#000000' : '#ffffff',
        transition: 'background-color 0.25s ease-in-out'
      }}>
      <div className='w-full h-full flex justify-between items-center'>
        {/* Logo */}
        <NavLink to="/" 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 1, duration: 0.5, type: "spring", bounce: 0.5 } }}
        className='w-28 sm:w-32 md:w-36 lg:w-38 xl:38 h-full cursor-pointer flex justify-center items-center ml-5' onClick={() => scrollToSection('main')}>
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
          >

            <motion.circle
              cx="100"
              cy="300"
              r="80"
              stroke="#0099ff"
              variants={draw}
              custom={2}
              
            />
            <motion.line
              x1="220"
              y1="230"
              x2="360"
              y2="370"
              stroke="#ff0055"
              custom={3}
              variants={draw}
            />
            <motion.line
              x1="220"
              y1="370"
              x2="360"
              y2="230"
              stroke="#ff0055"
              custom={3.5}
              variants={draw}
            />
            <motion.rect
              width="140"
              height="140"
              x="410"
              y="230"
              rx="20"
              stroke="#00cc88"
              custom={4}
              variants={draw}
            />


          </motion.svg>
        </NavLink>
        <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 1.7, duration: 1, type: "spring", bounce: 0.5 } }}
                  className='h-1/6 hidden lg:flex justify-center items-center '
                >
                  {/* Toggle Switch in Mobile Menu */}
                  <div className={` flex w-20 h-10  justify-start items-center rounded-full p-2 sm:p-1 cursor-pointer ${isOn ? 'bg-white' : 'bg-black'}`} id='switch' data-ison={isOn} onClick={toggleSwitch}>
                    <motion.div
                    initial={{ opacity: 0, x: -500, }}
                    animate={{ opacity: 1, x: 0, transition: { delay:1.9, duration:1, type: "spring", bounce: 0.3 } }}
                     className={`w-7 sm:w-5  sm:h-5 h-7  rounded-full ${isOn ? 'bg-black' : 'bg-white'}`} layout transition={spring} />
                  </div>
                </motion.li>

        {/* Menu Button for Mobile */}
        <div className=' lg:hidden mr-5'>
          <button className=' text-2xl font-bold w-20 relative h-16 flex flex-col  justify-center items-center ' onClick={toggleMenu}>
            
            <motion.div
              className={`absolute mb-6 w-12 h-2 bg-black rounded-full ${isOn ? 'bg-white' : 'bg-black'}`}
              style={{ originX: '50%', originY: '50%' }}
              animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: -2 }}
            />
            <motion.div
              className={`absolute w-12 h-2 bg-black rounded-full ${isOn ? 'bg-white' : 'bg-black'}`}
              style={{ originX: '50%', originY: '50%' }}
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <motion.div
              className={`absolute mt-6 w-12 h-2 bg-black rounded-full ${isOn ? 'bg-white' : 'bg-black'}`}
              style={{ originX: '50%', originY: '50%' }}
              animate={isMenuOpen ? { rotate: -45, y: -14 } : { rotate: 0, y: 2 }}
            />
          </button>
          {/* Mobile Menu */}
        
          {isMenuOpen && (
            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={{ width: '100%', height: '100%', transition: {  delay: 0.02, duration: 0.5 } }}
              exit={{ width: 0, height: 0, transition: { duration: 0.5 } }}
              className={`fixed top-20 right-0 bottom-0 z-20  w-full flex flex-col items-end ${!isOn ? " bg-[#e63946] transition-all duration-300" : "bg-[#011627] transition-all duration-300"}`}
            >
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 1 }}
                className={`w-full text-[#e9dfce] font-[heading] uppercase text-5xl font-bold flex flex-col justify-center items-center  h-4/5 ${!isOn ? " bg-[#e63946] transition-all duration-300" : "bg-[#011627] transition-all duration-300"}`}
              >
                {/* Menu Items */}
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, type: "spring", bounce: 0.5 } }}
                  className='h-1/6 flex justify-center items-center '
                >
                  
                  <div className={` flex w-20 h-10  justify-start items-center rounded-full p-2 sm:p-1 cursor-pointer ${isOn ? 'bg-[#e9dfce]' : 'bg-black'}`} id='switch' data-ison={isOn} onClick={toggleSwitch}>
                    <motion.div className={`w-7 sm:w-5  sm:h-5 h-7 rounded-full ${isOn ? 'bg-black' : 'bg-white'}`} layout transition={spring} />
                  </div>
                </motion.li>
               
                
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, type: "spring", bounce: 0.5 } }}
                  className='h-1/6'
                >
                  <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5, type: "spring", bounce: 0.5 } }}
                  className='h-1/6'
                  onClick={() => { scrollToSection('about'); toggleMenu(); }}
                >
                  About
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5, type: "spring", bounce: 0.5 } }}
                  className='h-1/6'
                  onClick={() => { scrollToSection('projects'); toggleMenu(); }}
                >
                  Projects
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5, type: "spring", bounce: 0.5 } }}
                  className='h-1/6 '
                >
                  <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
 
        </div>

        {/* Desktop Menu */}
        <nav className='hidden lg:flex md:items-center md:w-1/2 h-full'>
          <ul className='w-full flex justify-evenly text-xl font-bold'>
            <motion.li 
            
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.8, duration: 1, type: "spring", bounce: 0.4 } }}

            className={`w-28 h-12 rounded-full cursor-pointer flex justify-center items-center ${isOn ? " bg-[#e9dfce] " : "bg-[#ffff00] "}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <NavLink to="/">Home</NavLink>
            </motion.li>
            <motion.li
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.9, duration: 1, type: "spring", bounce: 0.4 } }}
              onClick={() => scrollToSection('about')}
              className={`w-28 h-12 rounded-full cursor-pointer flex justify-center items-center ${isOn ? " bg-[#e9dfce] " : "bg-[#ffff00] "}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              About
            </motion.li>
            <motion.li
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 1, type: "spring", bounce: 0.4 } }}
              onClick={() => scrollToSection('projects')}
              className={`w-28 h-12 rounded-full cursor-pointer flex justify-center items-center ${isOn ? " bg-[#e9dfce] " : "bg-[#ffff00] "}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              Projects
            </motion.li>
            <motion.li 
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0, transition: { delay:2.1, duration: 1, type: "spring", bounce: 0.4 } }}
            className={`w-28 h-12 rounded-full cursor-pointer flex justify-center items-center ${isOn ? " bg-[#e9dfce] " : "bg-[#ffff00] "}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <NavLink to="/contact">Contact</NavLink>
            </motion.li>
          </ul>
        </nav>
      </div>
      
      <motion.div className={`h-0.5 ${!progress ? 'hidden' : 'flex'} ${!isOn ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...' : 'bg-gradient-to-r from-indigo-500 from-10% via-sky-200 via-30 to-yellow-500 to-90% ...'}`} style={{ scaleX, originX: 0 }} transition={{ duration: 0.3 }} />
    </motion.header>
  );
}

export default Navbar;