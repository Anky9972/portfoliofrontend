import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'

function App() {
  const [isOn, setIsOn] = useState(false);
  const [mode,setMode] = useState("Light")
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercent(prevPercent => {
        let newPercent = prevPercent + Math.floor(Math.random() * 20);
        if (newPercent >= 100) {
          newPercent = 100;
          clearInterval(intervalId); // Clear interval when reaching 100%
        }
        return newPercent;
      });
    }, 100);

    return () => {
      clearInterval(intervalId); // Clear interval on component unmount
    };
  }, []); // Empty dependency array to run effect only once

  return (
      <>
      
      <motion.div  
      animate={{y:-1000,transition:{delay:0.95,duration:0.7}}}
      className='absolute z-40 w-full h-full bg-black flex justify-center items-center'>
        <h1 className='text-9xl text-white font-extrabold h-44 flex justify-center items-center'>{percent}%</h1>
      </motion.div>
        <Navbar isOn={isOn} setIsOn={setIsOn} mode={mode} setMode={setMode} />
        <Routes>
          <Route ></Route>
          <Route path='/' element={<Home isOn={isOn} setIsOn={setIsOn}/>}></Route>
          <Route path="/contact" element={<Contact isOn={isOn}/>} />
        </Routes>
      </>
    
  );
}

export default App;
