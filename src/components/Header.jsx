import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='text-center space-y-4 my-10'>
            <div className='flex justify-center'>
             <img src={logo} alt=""  />
            </div>
           
            <h1 className='text-accent'>Journalism Without Fear or Favour</h1>
            <p className='font-semibold text-accent'>{format(new Date(),'EEEE, MMMM MM, yyyy ')}</p>
        </div>
    );
};

export default Header;