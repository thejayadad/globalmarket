import React from 'react'
import MenuLinks from './MenuLinks'
import Logo from './Logo'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 bg-white shadow-sm'>
        <div className='flex justify-between max-w-xl mx-auto'>
            <MenuLinks />
            <Logo />
            <AuthLinks />
        </div>
    </header>
  )
}

export default Navbar