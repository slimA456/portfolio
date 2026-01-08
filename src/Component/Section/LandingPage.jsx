import React from 'react'
import { motion } from "framer-motion";

const LandingPage = () => {
  const downloadCV = async () => {
    const res = await fetch('/files/Abu_Bakarr_Samura_CV.pdf');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Abu_Bakarr_Samura_CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <motion.section
        id="home"
        className="w-full flex flex-col items-center justify-center text-center py-28 lg:h-screen"
        initial={{ opacity: 0, y: 50 }}       // start hidden and slightly down
        animate={{ opacity: 1, y: 0 }}        // fade in and move up
        transition={{ duration: 1, ease: "easeInOut" }} // smooth ease-in
      >
        <motion.h1
          className="text-5xl md:text-6xl font-black leading-tight mb-6 space-mono-bold-italic tracking-tighter text-shadow text-[var(--text-color)]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          I help founders turn ideas into <br />
          <span className="text-[var(--text-color)] text-5xl">seamless digital experiences</span>
        </motion.h1>

        <motion.p
          className="font-bold text-2xl mb-4 space-mono-bold-italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Hello, I'm <span className="font-semibold text-[var(--text-color)]">Abu Bakarr Samura</span>, a front-end developer
        </motion.p>

        <motion.p
          className="mt-4  text-center lg:mt-8 tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl space-mono-bold-italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          "I specialize in building visually stunning, high-conversion websites <br /> that drive business growth and engage users"
        </motion.p>

        <motion.button
          onClick={downloadCV}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="inline-block mt-18 px-6 py-3 bg-[var(--silver-3)]  text-white rounded-full shadow-lg transition my-box space-mono-bold-italic"
        >
          DOWNLOAD CV →
        </motion.button>
      </motion.section>
    </div>
  )
}

export default LandingPage