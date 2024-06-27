import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import logo from "../image/logo2.png";
const Footer = () => {
    const [sub,setSub]= useState()
  const [error,setError] = useState()
  const validate =() =>{
    let error={}
    let valid = true
    if(!sub){
      valid = false
      error = "Required"
    }
    setError(error)
    return valid
  }
  const handleClick =()=>{
    let valid = validate()
    if(valid){
      alert(sub)
    }
  
  }
  return (
    <div className='bg-red-100 mt-10'>
    <div className='container mx-auto py-5'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='flex flex-col justify-center items-center'>
            <div className='h-28 w-28 '> <img src={logo} alt='' /></div>
           
        <div className='flex space-x-3 items-center'>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaFacebookF className='text-menu text-2xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaTwitter className='text-menu text-2xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaInstagram className='text-menu text-2xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><TbWorld className='text-menu text-2xl ' /></div>
        </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-3 md:mt-0'>
            <p className='text-lg font-bold  capitalize'>INFORMATIONS</p>
            <ul className='flex flex-col space-y-3 mt-3'>
            <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-menu font-bold'/> <p>Home</p></li>
            <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-menu font-bold'/> <p>Product</p></li>
            <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-menu font-bold'/> <p>About Us</p></li>
            <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-menu font-bold'/> <p>Contact Us</p></li>
      
            </ul>
        </div>
        <div className='flex flex-col justify-center items-center mt-3 md:mt-0'>
            <p className='text-lg font-bold '>QUICK LINKS</p>
            <ul className='flex flex-col space-y-3 mt-3'>
                <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-menu font-bold'/> <p>My Cart</p></li>
                <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-menu font-bold'/> <p>Wish List</p></li>
                <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-menu font-bold'/> <p>Brand</p></li>
                <li className='flex space-x-2 items-center '> <IoIosArrowForward className='text-menu font-bold'/> <p>Categories</p></li>
            </ul>
        </div>
       <div>
        <div className='flex md:flex-row flex-col space-y-3 md:space-y-0  items-center justify-center space-x-3 '>
          <input type='text' value={sub} onChange={(e) => setSub(e.target.value)} className='w-[80%] h-10 bg-slate-100 rounded-md '/>
          <button className='bg-menu rounded-md h-10 md:px-2 w-[80%] md:w-auto text-white' onClick={() => handleClick()}>Subscribe</button>
         
        </div> 
        {error && (
              <div><p className='text-red-500 text-xs'>{error}</p></div>
            )}
        </div> 
       
       
      </div>
    </div>
   
    </div>
  )
}

export default Footer
