'use client'
import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '@/context';
import Modal from '../modal/Modal';
import Input from './Input';
import Logo from '../client/navbar/Logo';
import Text from '@/Text/SmallText';
import TitleText from '@/Text/TitleText';
import DescriptionText from '@/Text/DescText';

const Register = () => {
    const { modalState, openModal, closeModal } = useContext(GlobalContext);
    const handleOpenModal = () => {
        const modalContent = <div>Modal Content</div>;
        openModal(modalContent);
      };
  return (
    <div>
    <button onClick={handleOpenModal}
  className='text-xs font-medium text-gray-500 hover:text-secondary uppercase tracking-wider transform transition-transform hover:scale-105'
  >REGISTER</button>
    <Modal isOpen={modalState.isOpen} onClose={closeModal}>
    <div className='container relative flex pt-10 flex-col items-center justify-center lg:px-0'>
    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
    <div className='flex flex-col items-center space-y-2 text-center'>
    <Logo size='100px' />
    <Text className="text-red-600">
        
        New To MarketLink?
    </Text>
    <TitleText className="text-black">Create An Account Below</TitleText>
    <DescriptionText className="text-gray-700">
    "Welcome to our vibrant community! Join us and unlock a world of possibilities. Connect with passionate individuals, share your ideas, and explore diverse content. Our platform offers a unique blend of knowledge, creativity, and entertainment. Don't miss out on exclusive features and exciting events. Join us today and be a part of a community that values connection, collaboration, and endless possibilities. Your journey starts here!"
    </DescriptionText>
    </div>    
    </div>        
    </div>
    </Modal>
  </div>
  )
}

export default Register