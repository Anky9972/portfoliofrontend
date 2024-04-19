import React from 'react';
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from '@motionone/utils';
import { FaCss3, FaGithub, FaHtml5, FaLinkedin, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiCplusplus, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className=" overflow-hidden m-0 whitespace-nowrap flex flex-nowrap leading-none tracking-tighter">
      <motion.div className=" font-semibold uppercase text-5xl flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {[...Array(4)].map((_, index) => (
          <span className='mr-8' key={index}>{children}</span>
        ))}
      </motion.div>
    </div>
  );
}

function About({ isOn }) {
  return (
    <div>
      <div className={`w-full h-screen flex flex-col justify-center items-center ${!isOn ? 'bg-white transition-all duration-300' : 'bg-[#1e2125]  transition-all duration-300'}`}>
        <div className={`w-full md:w-full lg:w-9/12 xl:w-4/5 h-full flex flex-col justify-center items-center ${!isOn ? 'text-black bg-white transition-all duration-300' : 'text-[#e9dfce] bg-[#1e2125] transition-all duration-300'}`}>
          <section className='w-full flex flex-col h-full justify-around px-2'>
            <div className='w-full h-14 flex justify-start items-center px-4'>
              <h1 className='text-4xl lg:text-5xl xl:text-5xl font-extrabold uppercase font-[heading]'>About</h1>
            </div>
            <div className='w-full h-3/4 sm:h-full flex flex-col sm:flex sm:flex-row'>
              <div className=' w-full h-11/12 sm:w-8/12  '>
                <div className=' w-full h-full sm:h-4/5 flex justify-center sm:items-center '>
                  <p className='w-3/4 h-4/5 font-[textfont] tracking-widest'>
                  I'm a third-year B.Tech student specializing in Artificial Intelligence and Machine Learning (AIML) at Madhav Institute of Technology and Science, Gwalior. Passionate about exploring the intersections of technology, I'm driven by a relentless curiosity to learn and grow. Proficient in web development, particularly in HTML, CSS, JavaScript, and various frameworks, I enjoy crafting intuitive web experiences. Eager to gain real-world experience, I aim to bridge the gap between AIML and web development to create innovative solutions. I thrive on challenges and am committed to leveraging my skills to contribute meaningfully to projects. Let's collaborate and create something extraordinary together!
                  </p>
                </div>
              </div>
              <div className=' sm:w-1/3 sm:h-full'>
                <ul className={` w-full h-14 sm:h-1/2  flex sm:flex-col  items-center justify-center gap-8 ${!isOn ? 'text-black bg-white transition-all duration-300' : 'text-white bg-[1e2125] transition-all duration-300'}`}>
                  <li className='flex gap-3  '>
                    <motion.span initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: {
                      delay: 0.5,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 100,
                      damping: 7,
                      mass: 0.5,
                      velocity: 0.1,
                      bounce: 1,                  
                    }}}>
                      <FaGithub className='text-4xl'/>
                    </motion.span>
                    <span className='text-2xl hidden sm:flex'>Github</span>
                  </li>
                  <li className='flex gap-3'>
                    <motion.span initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: {
                      delay: 0.2,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 100,
                      damping: 7,
                      mass: 0.5,
                      velocity: 0.1,
                      bounce: 1,                  
                    }}}>
                      <FaLinkedin className='text-4xl'/>
                    </motion.span>
                    <span className='text-2xl hidden sm:flex'>LinkedIn</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className={`w-full h-auto  flex justify-center ${!isOn ? 'text-black bg-white transition-all duration-300' : 'text-[#e9dfce] bg-[#1e2125] transition-all duration-300'}`}>
          <section className='w-full flex justify-center items-center'>
            <ParallaxText className='flex' baseVelocity={2.5}> 
              <div className='w-full flex justify-center font-mono items-center gap-20'>
                <span className='w-auto flex gap-3 justify-center items-center '>
                  <FaHtml5 className='text-5xl text-[#e44d26]' />
                  <span>Html </span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <FaCss3 className='text-5xl text-[#42a5f5]'/>
                  <span>Css</span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <SiTailwindcss className='text-5xl text-[#4db6ac]'/>
                  <span>Tailwind</span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <RiJavascriptFill className='text-5xl text-[#ffca28]'/>
                  <span>Javascript</span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <FaReact className='text-5xl text-[#01b9d1]'/>
                  <span>React</span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <FaNodeJs className='text-5xl text-[#63843a]'/>
                  <span>Nodejs</span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <SiExpress className='text-5xl'/>
                  <span>Express</span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <SiMongodb className='text-5xl text-[#00e662]'/>
                  <span>Mongodb</span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <SiCplusplus className='text-5xl text-[#024280]'/>
                  <span>C++</span>
                </span>
                <span className='w-auto flex gap-3 justify-center items-center'>
                  <FaPython className='text-5xl text-[#fce56a]'/>
                  <span>Python</span>
                </span>
                <span className='w-auto  flex gap-3 justify-center items-center'>Machine Learning</span>
              </div>
            </ParallaxText>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
