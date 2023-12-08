'use client'
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Register from '@/components/userSignUp/Register';
import Login from '@/components/userSignUp/Login';



const AuthLinks = () => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const session = false;
  
    const openTooltip = () => setTooltipVisible(true);
    const closeTooltip = () => setTooltipVisible(false);
  return (
    <div className='flex items-center space-x-4'>
      <motion.div
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        className="relative"
      >
        <FiUser size={24} color="#000" />

        <AnimatePresence>
          {isTooltipVisible && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 w-48 bg-white text-secondary shadow-lg overflow-hidden z-10"
            >
              <div className="px-4 py-2 flex flex-col">
                {session ? (
                  <>
                    <Link href="/">
                      <span className="block mb-2 text-xl">Home</span>
                    </Link>
                    <Link href="/about">
                      <span className="block mb-2 text-xl">About</span>
                    </Link>
                    <p className="mb-2 text-xl">{session.user.email}</p>
                    <button
                      onClick={() => signOut()} 
                      className="block text-xl"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  < div className='flex gap-8 flex-col'>
                    <Register />
                    <Login />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </div>
  )
}

export default AuthLinks