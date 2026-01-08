import React from 'react'

const Header = ({children}) => {
  return (
    <div className='py-10 bg-[var(--alabaster-grey)] my-box backdrop-blur sticky top-0 z-50'>{children}</div>
  )
}

export default Header