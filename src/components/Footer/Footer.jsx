import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="container py-4 bg-white space-x-5 justify-between items-center border-t-2 border-slate-400" >
      <p className="text-gray-dark text-xs font-medium flex items-center justify-center">
        <span className='font-semibold'>2023</span><AiOutlineCopyrightCircle/> All rights reserved. Developed by <span className='font-semibold'>I. Somiuk</span> | <span className='font-semibold'>GoIT</span>
      </p>
    </footer> 
  );
};
