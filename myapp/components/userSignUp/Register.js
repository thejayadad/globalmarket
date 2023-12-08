'use client'
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { GlobalContext } from '@/context';
import Modal from '../modal/Modal';
import Logo from '../client/navbar/Logo';
import Text from '@/Text/SmallText';
import TitleText from '@/Text/TitleText';
import DescriptionText from '@/Text/DescText';
import Login from './Login';

const Register = () => {
    const { registerModalState, openRegisterModal, closeRegisterModal } = useContext(GlobalContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

        const handleOpenModal = () => {
        openRegisterModal("Modal Content");
        };

  
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (username === '' || email === '' || password === '') {
          toast.error('Fill all fields');
          return;
        }
    
        if (password.length < 6) {
          toast.error('Password must be at least 6 characters');
          return;
        }
    
        try {
          const res = await fetch('http://localhost:3000/api/register', {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
          });
    
          console.log(await res.json());
          if (res.ok) {
            toast.success('Successfully registered the user');
            setRegistrationSuccess(true);
            return;
          } else {
            toast.error('Error occurred while registering');
            return;
          }
        } catch (error) {
          console.log(error);
        }
      };
      
  return (
    <div>
    <button onClick={handleOpenModal}
  className='text-xs font-medium text-gray-500 hover:text-secondary uppercase tracking-wider transform transition-transform hover:scale-105'
  >REGISTER</button>
      <Modal isOpen={registerModalState.isOpen} onClose={closeRegisterModal}>
    <div className='container relative flex pt-10 flex-col items-center justify-center lg:px-0'>
    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
    <div className='flex flex-col items-center space-y-2 text-center'>
    <Logo size='100px' />
    <Text className="text-red-600">
        
        New To MarketLink?
    </Text>
    <TitleText className="text-black">Create An Account Below</TitleText>
    <DescriptionText className="text-gray-700">
    "Welcome to our vibrant community! Join us and unlock a world of possibilities. Connect with passionate individuals, share your ideas, and explore diverse content. 
    </DescriptionText>
    </div> 
    {!registrationSuccess ? (

<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <div class="relative mb-4">
    <label
        className='leading-7 text-sm text-gray-600'
        >UserName</label>
    <input
        className='input-signup'
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
        type="text"

        />
        </div>
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
        >Create</button>
    </form>   
           ) : (
            <div>
              <p>Registration successful!</p>
              <span className='text-center'>Wanna Login? </span>
              <Login />
            </div>
          )}
    </div>        
    </div>
    </Modal>
  </div>
  )
}

export default Register