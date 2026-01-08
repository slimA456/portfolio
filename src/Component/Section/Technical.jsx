import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion"


const Technical = () => {
  return (
    
       <motion.section 
               id="services"
               initial = {{opacity: 0, y: 50}}
               whileInView={{opacity:1, y:0}}
               transition={{duration:1,ease: "easeOut"}}
               viewport={{once:true, amount:0.2}} className='w-full py-20 mt-8'>
        <div className='max-w-6xl mx-auto px-4'>
          <motion.h1
        initial = {{opacity: 0 , y: 50 }}
        whileInView={{opacity:1, y:0}}
    transition={{duratrion:0.8,delay:0.2 ,ease: "easeOut"}}
    viewport={{once:true}} className='text-3xl font-bold text-center space-mono-bold-italic'>Technical Expertise</motion.h1>
          <motion.p
                      initial = {{opacity: 0 , y: 50 }}
                  whileInView={{opacity:1, y:0}}
              transition={{duratrion:0.8, delay:0.4 }}
              viewport={{once:true}}
                    className='mt-2 text-center space-mono-bold-italic'>Specialized in performance-focused frontend development with proven results</motion.p>
          <motion.h2
          initial = {{opacity: 0 , y: 50 }}
        whileInView={{opacity:1, y:0}}
    transition={{duratrion:0.8,delay:0.2 ,ease: "easeOut"}}
    viewport={{once:true}}
          className='mt-10 font-bold text-center space-mono-bold-italic'>Core Technologies</motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
            <motion.div 
               initial = {{opacity: 0, y: 50}}
               whileInView={{opacity:1, y:0}}
               transition={{duratrion:1,ease: "easeOut"}}
               viewport={{once:true, amount:0.2}} className='w-full flex flex-col border p-6  border-gray-400 rounded-2xl transform transition duration-300 ease-in-out  hover:scale-105
'>
            <div 
            
            className=' flex flex-row items-center gap-4 mb-2
'> <strong className='rounded-xl  w-20 h-20 flex items-center p-5'><FaReact size={40} /></strong> 
            <strong className='flex flex-col'>React
              <span>Expert</span>
              </strong></div>

            <div>
              <p className='space-mono-regular'><strong>3+ years</strong> expreience</p>
              <p className='font-bold mt-2 space-mono-regular'>5+ productions app</p>
            </div>
           </motion.div>
            <motion.div 
               initial = {{opacity: 0, y: 50}}
               whileInView={{opacity:1, y:0}}
               transition={{duratrion:1,ease: "easeOut"}}
               viewport={{once:true, amount:0.2}} className='flex flex-col border p-6 w-full  border-gray-400 rounded-2xl transform transition duration-300 ease-in-out  hover:scale-105'>
             <div className=' flex flex-row items-center gap-4 mb-2'> <strong className='rounded-xl  w-20 h-20 flex items-center p-5'>< RiNextjsFill size={40}  /></strong> 
            <strong className='flex flex-col'>Next js
               <span className=''>Expert</span>
            </strong>
           </div>


            <div>
              <p className='space-mono-regular'><strong >2+ years</strong> expreience</p>
               <p className='font-bold mt-2  space-mono-regular'>95% pageSpeedScore</p>
            </div>
           </motion.div>
           <motion.div 
               initial = {{opacity: 0, y: 50}}
               whileInView={{opacity:1, y:0}}
               transition={{duratrion:1,ease: "easeOut"}}
               viewport={{once:true, amount:0.2}} className='flex flex-col border p-6 w-full  border-gray-400 rounded-2xl transform transition duration-300 ease-in-out  hover:scale-105'>
            <div className=' flex flex-row items-center gap-4 mb-2'> <strong className='rounded-xl  w-20 h-20 flex items-center p-5'><SiTypescript size={40}/></strong>
            <strong className='flex flex-col'>Typescript
               <span className=''>Expert</span>
               </strong></div>


            <div>
              <p className='space-mono-regular'><strong>2+ years</strong> expreience</p>
              <p className='font-bold mt-2  space-mono-regular'>Type-safe architechture</p>
            </div>
           </motion.div>
           <motion.div 
               initial = {{opacity: 0, y: 50}}
               whileInView={{opacity:1, y:0}}
               transition={{duratrion:1,ease: "easeOut"}}
               viewport={{once:true, amount:0.2}} className='flex flex-col border p-6 w-full border-gray-400 rounded-2xl transform transition duration-300 ease-in-out  hover:scale-105'>
             <div className=' flex flex-row items-center gap-4 mb-2'> <strong className='rounded-xl  w-20 h-20 flex items-center p-5'><RiTailwindCssFill size={40} /></strong> 
            <strong className=' flex flex-col'>Tailwind css
              <span className='' >Expert</span>
              </strong>
              </div>


            <div>
              <p className='space-mono-regular'><strong>2+ years</strong> expreience</p>
              <p className='font-bold mt-2   space-mono-regular'>Design system</p>
            </div>
           </motion.div>
      </div>
      </div>

    </motion.section>


  )
}

export default Technical