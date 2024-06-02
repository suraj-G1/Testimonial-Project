import React, { useState } from 'react'
import Card from './Card'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        let randomIndex =Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
         
    }
  return (
    <div className='w-[80vw] md:w-[700px] bg-white flex flex-col justify-center items-center m-10 p-10 transition-all duration-300 hover:shadow-lg rounded-md' >
        <Card review={reviews[index]}></Card>
        <div className='flex gap-3 text-2xl justify-center  mt-5 font-bold'>
            <button onClick={leftShiftHandler}
             className=' text-violet-400 hover:text-violet-500'>
                <FaAngleLeft />

            </button>

            <button onClick={rightShiftHandler}
            className='text-violet-400 hover:text-violet-500'>
            <FaAngleRight />
            </button>
        </div>

        <div className='text-center mt-2' >
            <button onClick={surpriseHandler}
             className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-sm font-bold text-lg mt-2 text-white'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials