'use client'
import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '@/context';
import Modal from '../modal/Modal';
import Logo from '../client/navbar/Logo';
import Text from '@/Text/SmallText';
import TitleText from '@/Text/TitleText';
import DescriptionText from '@/Text/DescText';

const Login = () => {
  const { modalState, openModal, closeModal } = useContext(GlobalContext);
  const handleOpenModal = () => {
    const modalContent = <div>Modal Content</div>;
    openModal(modalContent);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className='text-xs font-medium text-gray-500 hover:text-secondary uppercase tracking-wider transform transition-transform hover:scale-105'
      >
        LOGIN
      </button>
      <Modal isOpen={modalState.isOpen} onClose={closeModal}>
      <div className='container relative flex pt-10 flex-col items-center justify-center lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col items-center space-y-2 text-center'>
              <Logo size='100px' />
              <Text className='text-red-600'>Welcome Back!</Text>
              <TitleText className='text-black'>Login to Your Account</TitleText>
              <DescriptionText className='text-gray-700'>
                "Explore and connect with our community. Login now to access your account and continue your journey with us."
              </DescriptionText>
            </div>
            <form className='flex flex-col'>
              <div className='relative mb-4'>
                <label className='leading-7 text-sm text-gray-600'>UserName</label>
                <input className='input-signup' placeholder='Username' />
              </div>
              <div className='relative mb-4'>
                <label className='leading-7 text-sm text-gray-600'>Password</label>
                <input className='input-signup' placeholder='Password' type='password' />
              </div>
              <button className='text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded text-lg tracking-widest font-medium title-font'>
                Login
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
