import React from 'react'

const Oferbanner = () => {
  return (
    <div className='mt-5 bg-slate-100 rounded-md px-5 py-8 relative'>
    <div className='flex  md:flex-row flex-col '>
        <div className=' w-full md:w-1/2 h-1/2 flex md:items-center md:justify-center  '>
         <div className='md:w-96 md:h-96 h-48 w-48 bg-pink-600 rounded-full p-1'>
            <img src='https://media.istockphoto.com/id/1320345717/photo/various-cosmetic-accessories-for-makeup-and-manicure-on-trendy-pastel-pink-background-with.jpg?s=612x612&w=0&k=20&c=H35tfZdnHIBJLjXiX2Jfzoq32U8DrZEhZ__5l_05LsM=' 
            alt='' className='h-full w-full rounded-full object-cover' />
            </div>
            <div className='md:w-32 md:h-32 w-16 h-16 absolute top-4 bg-pink-600 p-1 rounded-full md:left-[40%] left-[64%]'>
                <img src='https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU='
                alt='' className='h-full w-full rounded-full object-cover' />
                </div> 
            <div className='md:w-32 md:h-32 w-16 h-16 absolute md:top-[9rem] top-[5.5rem] bg-pink-600 p-1 rounded-full md:left-[45%] left-[72%]'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6unZlQ7eHIAn01Gv6y5_iHXtC4G2iJrmYg&s'
                alt='' className='h-full w-full rounded-full object-cover' />
                </div>  
            <div className='md:w-32 md:h-32 w-16 h-16 absolute md:top-[18rem] top-[10rem] bg-pink-600 p-1 rounded-full md:left-[40%] left-[64%]'>
                <img src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/TODAY/Sections/Today%20Fashion%20and%20beauty/2010/Aug/makeup2.jpg' alt='' 
                className='h-full w-full rounded-full object-cover' />
                </div> 
        </div>
        <div className='md:w-1/2  w-full flex flex-col items-center justify-center mt-5 md:mt-0 '>
        <h2 className='md:text-5xl text-3xl font-semibold'>Upto</h2>
        <h1 className='md:text-9xl text-5xl font-bold '>50%</h1>
        <p className='text-xl md:text-2xl'>OFF</p>
        </div>
    </div>
    </div>
  )
}

export default Oferbanner
