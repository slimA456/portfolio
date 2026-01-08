import React, { useState, useEffect, useRef } from 'react'
import { NavItems } from '../../Content'
import { CiLight } from "react-icons/ci";
import { motion } from "framer-motion";
import { useTheme } from '../../context/AppContext';
import { FiMenu, FiX } from "react-icons/fi"
import { Link } from "react-router-dom";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null) // Ref for the menu button

  const { isDarkMode, toggleTheme, mobileMenuStyles } = useTheme();
  const [isActive, setIsActive] = useState(null)

  // Close on Escape or click outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    const handleClickOutside = (e) => {
      // Check if click is outside both menu and menu button
      if (
        isOpen &&
        menuRef.current && 
        !menuRef.current.contains(e.target) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Handle navigation click for mobile
  const handleNavClick = (id) => {
    setIsActive(id)
    setIsOpen(false)
  }

  return (
    <div className="relative flex justify-center items-center min-h-16">
      {/* Centered nav */}
      <nav>
        <ul className="gap-8 hidden md:flex">
          {NavItems.map((item) => (
            <li key={item.id} className="text-2xl font-bold">
              <a
                href={item.Href}
                onClick={(e) => {
                  if (item.Href && item.Href.startsWith('#')) {
                    e.preventDefault();
                    const id = item.Href.slice(1);
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setIsActive(item.id);
                  } else {
                    setIsActive(item.id);
                  }
                }}
                className={`${isActive === item.id ? "underline my-text" : ""} hover:opacity-80 transition-opacity`}
              >
                {item.Link}
              </a>
            </li>
          ))} 
        </ul>
      </nav>

      {/* Right content absolutely positioned */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4 pr-4">
        {/* Theme toggle button - hidden on mobile if menu button is shown */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className='rounded-2xl my-box hidden md:inline-flex p-2'
          aria-pressed={isDarkMode}
          aria-label="Toggle theme"
        >
          <CiLight size={40} />
        </motion.button>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsOpen(v => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden absolute right-4 top-full mt-2 w-56 ${mobileMenuStyles.background} shadow-xl rounded-lg z-50 border ${mobileMenuStyles.border}`}
        >
          <ul className="flex flex-col p-2 space-mono-bold-italic">
            {NavItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.Href}
                  className={`flex px-4 py-3 rounded-md ${mobileMenuStyles.hoverBg} ${mobileMenuStyles.hoverText} space-mono-bold-italic transition-colors ${
                    isActive === item.id ? `${mobileMenuStyles.hoverBg} my-text space-mono-bold-italic` : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.Href && item.Href.startsWith('#')) {
                      const id = item.Href.slice(1);
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    handleNavClick(item.id);
                  }}
                >
                  {item.Link}
                </a>
              </li>
            ))}
            {/* Mobile theme toggle inside menu */}
            <li className={`border-t border ${mobileMenuStyles.border} mt-2 pt-2 space-mono-bold-italics`}>
              <button
                onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-md ${mobileMenuStyles.hoverBg} ${mobileMenuStyles.hoverText} transition-colors`}
                aria-label="Toggle theme"
              >
                <CiLight size={24} />
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  )
}

export default Nav