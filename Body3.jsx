import React from 'react'
import img from '../image/body3img.png'


function Body3() {
  return (
    <>
    <div className='flex bg-gray-100 py-20'>
        <div className='w-1/2 border border-neutral-400 border-dashed rounded-lg '><img src={img} className=' w-full rounded-lg -mt-6 pb-2 pr-6' /></div>
        <div className=' w-1/2 p-9'>
            <h1 className='text-4xl leading-relaxed mb-12 w-4/6'>Unique themes and templates for every budget and every project.</h1>
            <button className='bg-lime-600 shadow-sm text-white shadow-lime-700 text-lg py-3 px-5'>Views All Theme</button>
        </div>
    </div>
    </>
  )
}

export default Body3