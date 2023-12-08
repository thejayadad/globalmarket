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
import Logo from '../client/navbar/Logo';
import Text from '@/Text/SmallText';
import TitleText from '@/Text/TitleText';
import DescriptionText from '@/Text/DescText';


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
      <div className='container relative flex pt-10 flex-col items-center justify-center lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
      <div className='flex flex-col items-center space-y-2 text-center'>
      <Logo size='100px' />
      <Text className="text-secondary">
        
        Welcome Back
    </Text>
    <TitleText
    className="text-black"
    
    >
        Login Here
    </TitleText>
    <DescriptionText className="text-gray-700">
    "Welcome to our vibrant community! Join us and unlock a world of possibilities. Connect with passionate individuals, share your ideas, and explore diverse content. 
       
    </DescriptionText>
    
<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <div class="relative mb-4">
    <label
        className='leading-7 text-sm text-gray-600'
        >Email</label>
    <input
        className='input-signup'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        type="email"

        />
        </div>
        <div class="relative mb-4">
    <label
        className='leading-7 text-sm text-gray-600'
        >PassWord</label>
    <input
        type="password"
        className='input-signup'
        placeholder='PassWord'
        onChange={(e) => setPassword(e.target.value)}

        />
        </div>
        <button
        className='text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded text-lg tracking-widest font-medium title-font'
        >LOGIN</button>
    </form> 
        </div>
        </div>
        </div>
       </Modal>

    </div>
  )
}

export default Login