import React from "react";
import { specialized } from "../../Content";
import { motion } from "framer-motion"

export default function SpecializedList() {
  return (
    <div className="flex justify-center items-start py-20">
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
    {specialized.map((item) => {
      const Icon = item.icon;
      return (
        <motion.div 
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}}
          key={item.id}
          className="flex flex-col md:flex-row gap-3 p-4 border rounded-lg w-full max-w-lg transform transition duration-300 ease-in-out hover:scale-105"
        >
          <Icon className="h-10 w-10 rounded-xl md:mr-4 self-center md:self-start block md:block" />
          <div className="min-h-[6rem]">
            <h1 className="font-semibold text-lg space-mono-regular">{item.name}</h1>
            <p className=" mt-4 space-mono-regular ">{item.description}</p>
            <small className="font-bold mt-4  space-mono-regular">{item.performance}</small>
          </div>
             
        </motion.div>
        
      );
    })}
  </div>
</div>
  );
}