import React from 'react'
import { connect, QuickLinks } from '../../Content'
import { motion } from "framer-motion"

const Footer = () => {
  return (
   <div className="flex flex-col md:flex-row border-t justify-center items-center gap-8 md:gap-20 w-full mx-auto mt-10">
  <div className="w-full md:max-w-md flex items-center">

    <motion.p
                initial = {{opacity: 0 , y: 50 }}
            whileInView={{opacity:1, y:0}}
        transition={{duratrion:0.8,delay:0.4 }}
        viewport={{once:true}}
               className='text-center space-mono-bold-italic '>Frontend Engineer building fast, scalable web applications. Specialized in performance optimization with proven results: 40% faster load times, 98+ PageSpeed scores.</motion.p>
</div>
<motion.div
 
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duratrion:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}}
    
    >
    <ul className='mt-8 space-mono-bold-italic'>
 {
        QuickLinks.map((item, idx) => {
            // QuickLinks do not have icons; render only the link name
            return (
                <li key={item.id ?? idx} className="mb-2 space-mono-bold-italic">{item.name}</li>
            )
        })
        }



    </ul>
</motion.div>
<motion.div
 
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duratrion:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}}
    
    >
   <ul>
 {
        connect.map((item, idx) => {
            const Icon = item.icon;
            return (
                <li key={item.id ?? idx} className="mb-2 flex items-center gap-2 space-mono-bold-italic"> {Icon ? <Icon /> : null}
                    <span>
                       {item.name}
                    </span>
                </li>
            )
        })
    }

    </ul>
</motion.div>
    </div>
  )
}

export default Footer