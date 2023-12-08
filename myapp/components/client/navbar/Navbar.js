import React from 'react'
import MenuLinks from './MenuLinks'
import Logo from './Logo'
import AuthLinks from './AuthLinks'
import Box from '@/components/Box'



const Navbar = () => {
  return (
    <header className='px-4 py-8 bg-white shadow-sm'>
     <Box>
     <nav className='flex justify-between items-center'>
            <MenuLinks />
            <Logo size={'200px'} />
            <AuthLinks />
        </nav>
     </Box>
    </header>
  )
}

export default Navbar