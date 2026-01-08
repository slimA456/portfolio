import React from 'react'
import { featuredProject } from '../Content'
import { motion } from "framer-motion"
import { CgWindows } from 'react-icons/cg'

const Featured = () => {
  return (
    <section id="featured" className='w-full py-20 flex flex-col items-center'>
   <motion.h1
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 1, ease: 'easeOut' }}
     viewport={{ once: true, amount: 0.2 }}
     className='text-3xl font-bold tracking-tight space-mono-bold-italic'>Featured Project</motion.h1>
 <motion.p
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8, delay: 0.8 }}
   viewport={{ once: true }}
   className='text-lg font-bold mt-4 tracking-wide space-mono-bold-italic'>
   Here are my recent projects that showcase my technical skills
 </motion.p>
 <motion.div
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.6, delay: 0.4 }}
   viewport={{ once: true }}
   className='max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl px-4'>
  
  
{featuredProject.map(p => {
  const Icon = p.Icon || p.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      key={p.id}
      className='border p-6 h-full flex flex-col my-box transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl space-mono-bold-italic'>
      <img src={p.image} alt={p.name} className='w-full h-48 md:h-56 object-cover rounded my-box' />
      <h3 className='text-3xl space-mono-bold-italic'>{p.name}</h3>
      <p className='text-base mt-2 grow'>{p.description}</p>
      <span className='flex items-center mt-2 w-full justify-between text-sm'>
        <span className='truncate'>{p.techStack?.join(', ')}</span>
        {Icon && (
          <button onClick={()=>window.open(p.url, "_blank")} className='hidden md:inline-flex items-center justify-center p-2 rounded'>
            <Icon size={28} />
          </button>
        )}
      </span>
       
      
    </motion.div>
  )
})}
  
 </motion.div>

 </section>
  )
}

export default Featured