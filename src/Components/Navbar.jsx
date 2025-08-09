import React from 'react'
import { User , CircleUser , List } from 'lucide-react';
import SignUp from "./SignUp";
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className="flex bg-sky-100 shadow-xl mt-2 fixed w-full z-50">
            <div className="flex items-center w-1/2 ">
            <img src="orbot.svg" alt="orbot symbol" className='px-4 h-3/4 w-3/4 md:h-auto md:w-auto' />
            <img src="Tube Pro.svg" alt="Tube Pro Symbol" className='h-6 w-3/4 md:h-auto md:w-auto'/>
            <List className=" md:hidden visible h-1/2 w-1/6 absolute end-10 "/>
            </div>
            <div className='bg-sky-500 md:w-1/2 text-lg rounded-l-4xl flex items-center'>
            <div className='md:flex justify-around items-center align-content w-full hidden md:visible'>
                <Link to="/">Home</Link>
                <Link to="/Our Service">Our Services</Link>
                <Link to="/About Us">About Us</Link>
                <Link to="/Contact Us">Contact Us</Link>
                <Link to="/Sign Up"><CircleUser /></Link>
            </div>
            </div>
            
        </nav>
      </>
  )
}

export default Navbar