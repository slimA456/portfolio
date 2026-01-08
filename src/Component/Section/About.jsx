import React from 'react'
import { PageLoad } from '../../Content'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div 
    id="about"
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duratrion:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}}
    
    
    className="w-full py-20 px-4">
      <main className="flex items-center justify-center flex-col py-10">
        <motion.h1
        initial = {{opacity: 0 , y: 50 }}
        whileInView={{opacity:1, y:0}}
    transition={{duratrion:0.8, delay:0.2 ,ease: "easeOut"}}
    viewport={{once:true}}
        className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-center mt-12 space-mono-bold-italic">
          About
        </motion.h1>

        <div className="flex flex-col mt-10 max-w-4xl space-mono-regular ">
          <motion.p
            initial = {{opacity: 0 , y: 50 }}
        whileInView={{opacity:1, y:0}}
    transition={{duratrion:0.8,delay:0.4 }}
    viewport={{once:true}}
          
          className="text-base sm:text-lg lg:text-2xl  tracking-tight mt-5">
            I'm Abu Bakarr Samura, a <strong>FrontEnd Developer</strong> with <strong>3+ years</strong> of experience focused on building modern, high-performing websites that help brands look credible, professional, and trustworthy online. I specialize in translating ideas and design into clean, responsive, and user-friendly interfaces.
          </motion.p>

          <motion.p
            initial = {{opacity: 0 , y: 50 }}
        whileInView={{opacity:1, y:0}}
    transition={{duratrion:0.8,delay:0.6 }}
    viewport={{once:true}}
           className="text-base sm:text-lg lg:text-2xl space-mono-regular tracking-tight mt-10">
            My approach goes beyond just writing code — I pay close attention to user experience, performance, and visual clarity.
          </motion.p>

          <motion.p
            initial = {{opacity: 0 , y: 50 }}
        whileInView={{opacity:1, y:0}}
    transition={{duratrion:0.8,delay:0.8 }}
    viewport={{once:true}}className="text-base sm:text-lg lg:text-2xl space-mono-regular tracking-tight mt-10">
            I take pride in writing clean, maintainable code and delivering results that align with business goals. Whether it's a landing page, a full website, or a complex UI, I focus on building digital experiences.
          </motion.p>
        </div>
      </main>

      {/* Responsive Cards with Ease-In */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center mt-20 px-4 ">
        {PageLoad.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}              // start hidden and slightly down
              whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} 
            viewport={{ once: true, amount: 0.2 }}
            className="p-6 rounded-xl flex flex-col items-center text-xl sm:text-2xl lg:text-3xl font-heading tracking-tight  transform transition duration-300 ease-in-out hover:scale-105"
          >
            <strong>{item.performance}</strong>
            <span className="space-mono-bold-italic font-bold">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default About