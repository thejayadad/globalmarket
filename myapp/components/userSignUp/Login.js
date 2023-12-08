'use client'
// Login.js
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '@/context';
import { useContext } from 'react';
import Modal from '../modal/Modal';


const Login = () => {
    const { loginModalState, openLoginModal, closeLoginModal } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOpenModal = () => {
        openLoginModal("Modal Content");
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (password === '' || email === '') {
          toast.error('Fill all fields!');
          return;
        }
    
        if (password.length < 6) {
          toast.error('Password must be at least 6 characters long');
          return;
        }
    
        try {
          const res = await signIn('credentials', { email, password, redirect: false });
    
          if (res?.error == null) {
            toast.success('Successfully logged in');
            setLoginSuccess(true);
          } else {
            toast.error('Error occurred while logging in');
          }
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div>
    <button onClick={handleOpenModal}
        className='text-xs font-medium text-gray-500 hover:text-secondary uppercase tracking-wider transform transition-transform hover:scale-105'
        >Login</button>
      <Modal isOpen={loginModalState.isOpen} onClose={closeLoginModal}>
            hi
       </Modal>

    </div>
  )
}

export default Login