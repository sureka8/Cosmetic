import React ,{useState,useEffect}from 'react'
import { BiSolidLeftArrowCircle } from "react-icons/bi";
import { BiSolidRightArrowCircle } from "react-icons/bi";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideImages = [
      { id: 1, name: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1719398404_web-51.jpg" },
      { id: 2, name: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1719410255_lakme_makeup_primer_copy_1_2596x836.jpeg" },
      { id: 3, name: "https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1707415179_webdefault_.jpg" },
    //   { id: 4, name: 'https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg' },
    //   { id: 5, name: img5 },
    //   { id: 6, name: img6 },
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
      );
    };
    useEffect(() => {
      const slideInterval = setInterval(nextSlide, 3000);
      return () => clearInterval(slideInterval);
    }, []);
  return (
    <div className='w-[100%] h-full md:mt-28 mt-16 relative  overflow-y-hidden overflow-hidden '>
    <div className='transition ease-out duration-40 '
    //  style={{
    //     transform: `translateX(-${currentSlide *100 }%)`
    // }}
    >
      <img src={slideImages[currentSlide].name} alt='' className='w-full  h-full object-contain' />
    </div>
    <div className='top-0 absolute flex items-center justify-between h-full w-full text-black px-3 md:px-5 text-2xl'>
      <button onClick={prevSlide}>
        <BiSolidLeftArrowCircle />
      </button>
      <button onClick={nextSlide}>
        <BiSolidRightArrowCircle />
      </button>
    </div>

    <div className='bottom-0 absolute py-4 flex justify-center left-[45%]  gap-3'>
        {slideImages.map((s,i) =>(
            <div key={i} className={`rounded-full h-2 w-2  ${i == currentSlide ? "bg-white": "bg-black"}`}></div>
        ))}
        
    </div>
  </div>
  )
}

export default Slider
