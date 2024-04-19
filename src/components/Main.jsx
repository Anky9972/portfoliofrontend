import React, { useState, useEffect } from 'react';
import '../App.css';
import img from '../images/ship-5028940_1920.png';
import birds from '../images/birds-5081283_1920.png';
import { motion, } from "framer-motion";
import { FaMoon, FaSun } from 'react-icons/fa';
import { WiSunrise, WiSunset } from 'react-icons/wi';

function Main({ isOn }) {
    const [second, setSecond] = useState(new Date().getSeconds());


    const [sun, setSun] = useState(false);
    const [sunrise, setSunrise] = useState(false);
    const [sunset, setSunset] = useState(false);
    const [moon, setMoon] = useState(false);
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();


    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const currMonth = months[month];

    useEffect(() => {
        if (hour >= 8 && hour < 17) {
            setSun(true);
            setSunrise(false);
            setSunset(false);
            setMoon(false);
        } else if (hour >= 5 && hour < 8) {
            setSun(false);
            setSunrise(true);
            setSunset(false);
            setMoon(false);
        } else if (hour >= 17 && hour < 19) {
            setSun(false);
            setSunrise(false);
            setSunset(true);
            setMoon(false);
        } else {
            setSun(false);
            setSunrise(false);
            setSunset(false);
            setMoon(true);
        }
    }, [hour]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond(new Date().getSeconds());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);



    return (
        <div className='w-full h-screen'>

            <section className={`w-full h-full flex  ${!isOn ? 'bg-white transition-all duration-300' : 'bg-black transition-all duration-300'} `}>
                <div className='w-full  lg:w-1/2 h-full flex justify-center'>
                    <div className='w-11/12 lg:w-3/5 h-4/6  m-auto rounded-3xl flex flex-col justify-start items-center '>
                        <div className='w-full h-full flex flex-col justify-start items-start gap-3 px-1 '>
                            <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7,delay:2 }}
                            className={`text-lg font-[textfont] tracking-wider font-semibold ${!isOn ? 'text-gray-950 transition-all duration-300' : "text-[#e9dfce] transition-all duration-300 "}`}>Hi, my name is</motion.p>
                            <motion.h1
                            initial={{ opacity: 0,y:100 }}
                            animate={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5,delay:2.2,type:'spring',stiffness:100, damping:10, bounce:0.5 }}
                            className='text-6xl lg:text-7xl font-bold text-red-700 font-[highlight]'>Vivek Gaur</motion.h1>
                            <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7,delay:2 }}
                            className={`text-lg font-[textfont]  font-semibold ${isOn ? 'text-[#e9dfce] transition-all duration-300' : "text-gray-950 transition-all duration-300"} tracking-wider`}>I am a Web Developer & Machine Learning Enthusiast</motion.p>
                            <div className=" w-full sm:w-full md:w-full lg:w-full xl:w-full h-16 ">
                                <motion.button
                                    initial={{ opacity: 0,x:600 }}
                                    animate={{ opacity: 1,x:0, transition: { duration: 0.7, delay:2.3,type:"spring", stiffness:100,damping:10, bounce:0.4 } }}

                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={`text-4xl rounded-full w-full font-[hightlight] sm:w-full md:w-full lg:w-3/5 xl:w-3/5 h-16 lg:text-4xl ${!isOn ? 'border-2 border-stone-950 font-bold' : "text-[#e9dfce] font-bold border-2 border-yellow-500"}`}
                                >
                                    My Resume
                                </motion.button>

                            </div>
                        </div>
                        <div className='flex  justify-center items-center w-full h-full mt-2 '>
                            <div className='w-1/6 h-full flex justify-end items-center '>
                                <motion.span
                                initial={{rotate:0}}
                                animate={{rotate:360,transition:{duration:3.5,repeat:Infinity, repeatType: "loop",ease:"linear"}}}
                                className={` mb-28  ${sun ? 'flex' : 'hidden'} text-[#ffa200]`} ><FaSun className='text-4xl' /></motion.span>
                                <motion.span 
                                animate={{y:[0,-10,0],transition:{duration:2,repeat:Infinity, repeatType: "reverse",ease:"easeInOut"}}}
                                className={`mb-28 ${sunrise ? 'flex' : 'hidden'} text-[#ff7b00]`}><WiSunrise className='text-6xl' /></motion.span>
                                <motion.span 
                                animate={{y:[0,10,0],transition:{duration:2,repeat:Infinity, repeatType: "reverse",ease:"easeInOut"}}}
                                className={`mb-28 ${sunset ? 'flex' : 'hidden'} text-[#ff7b00]`}><WiSunset className='text-6xl' /></motion.span>
                                <motion.span 
                                animate={{y:[0,10,0],transition:{duration:2,repeat:Infinity, repeatType: "reverse",ease:"easeInOut"}}}
                                className={`mb-28  ${moon ? 'flex' : 'hidden'} ${isOn ? 'text-white' : 'text-[#ffdd00]'}`}><FaMoon className='text-4xl' /></motion.span>
                            </div>
                            <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1,delay:2.4 }}
                            className={`text-9xl font-[numbers] ${isOn ? 'text-[#e9dfce]' : 'text-black'} `}>{day}</motion.div>
                            <div className={`w-1/4 ml-1 mt-3 flex font-[highlight] lowercase flex-col ${isOn ? 'text-white' : 'text-black'}`}>
                                <motion.span 
                                initial={{y:-100,opacity:0}}
                                animate={{y:0,opacity:1,transition:{duration:2, delay:2.6, type:"spring",stiffness:100,damping:13,bounce:0.5}}}
                                className='text-3xl'>{currMonth}</motion.span>
                                <motion.div 
                                initial={{y:100,opacity:0}}
                                animate={{y:0,opacity:1,transition:{duration:2, delay:2.6, type:"spring",stiffness:100,damping:13,bounce:0.5}}}
                                >
                                    <span className='text-lg'>{hour}:</span>
                                    <span className='text-lg'>{minute}:</span>
                                    <span
                                    className='text-lg text-red-700 '>{second}</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hidden lg:flex lg:flex-col lg:w-1/2 justify-center items-center relative ${isOn ? 'bg-black transition-all duration-300 ' : 'bg-white transition-all duration-300'}`}>
                    <motion.div animate={{
                        opacity: 1,
                        transition: {
                            duration: 2,
                            delay: 2.7
                        }

                    }} initial={{ opacity: 0 }} className={`w-full h-1/2 absolute rounded-t-full ${!isOn ? " bg-orange-400 transition-all duration-300" : "bg-white transition-all duration-300"}`}>
                        <motion.img  animate={{
                            y: 0,
                            opacity: 1,
                            scale: 1.1,
                            transition: {
                                duration: 2,
                                delay:2.9
                            }
                        }} initial={{ y: -100,opacity:0,scale:1 }} className='w-4/5 h-1/2 absolute' src={birds} alt="error" />
                    </motion.div>
                    <motion.img
                        animate={{
                            x: 0,
                            y: -10,
                            opacity: 1,// Animate the x property to 0
                            transition: {
                                type: 'spring', // Type of animation
                                bounce: 0.5, // Amount of bounce
                                delay: 2.8,
                                duration: 3, // Delay before animation starts
                                y: { repeat: Infinity, repeatType: "reverse", duration: 2 },
                            }
                        }}
                        initial={{ x: -1000, opacity: 0 }} // Initial x position
                        className='w-2/3 h-1/2 mt-1 absolute'
                        src={img}
                        alt="error"
                    />

                    {/* <div className={`w-full h-1/5 absolute bottom-9 ${isOn ? ' bg-gray-900' : 'bg-white'}` }>
                        <img className='object-cover w-full h-full' src={water} alt="" />
                    </div> */}
                </div>
            </section>

        </div>
    );
}

export default Main;
