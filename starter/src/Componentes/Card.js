import React from 'react'
import {FaQuoteLeft,FaQuoteRight,FaAngleLeft,FaAngleRight} from 'react-icons/fa';
const Card  = (props) => {
    let review = props.review;
  return (
    <div className='md:relative flex flex-col'>
        <div className='absolute top-[-7rem] mx-auto z-[10]'>
            
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image}/>
            <div className='w-[140px] h-[140px] bg-violet-400 rounded-full absolute top-[-6px] z-[-10] left-[6px]'></div>
        </div>
        <div className='flex flex-col text-center'>
            <h2 className='font-bold text-2xl capitalize mt-7'>{review.name}</h2>
            <p className='mt-7 text-violet-400 uppercase text-sm'>{review.job}</p>
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
            <FaQuoteLeft/>
            <div className='mt-4 text-slate-400'>{review.text}</div>
            <FaQuoteRight/>
        </div>
    </div>
  )
}

export default Card