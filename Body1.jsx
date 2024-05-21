import React from 'react'
import Temp from '../image/tempimg.png'

function Body1() {
  return (
    <><div className='flex bg-gray-100 pb-10 -mt-96 z-0'>
        <div className='w-auto z-0 px-16 -mt-20'>
            <h1 className='text-4xl font-bold leading-tight z-0'>Professional WordPress Themes & Website Templates for any project</h1>
            <p className=' text-neutral-600 leading-relaxed text-xl z-0'>Discover thousands of easy to customize themes, templates & CMS products, made by world-class developers.</p>
            <div className='w-full text-neutral-600 h-20 mt-20 bg-white shadow-md shadow-slate-300 text-xl p-5 rounded-lg'>
              <input type="text" placeholder=' e.g. responsive Wordpress' className='outline-0 w-96'/>
                
                
                <button className='bg-lime-600 text-white px-4 py-2 rounded-md ml-24'><i class="fa fa-search mr-3" aria-hidden="true"></i>Search</button>

            </div>
        </div>
        <div className='pl-2 z-0'>
            <img className='w-full h-full z-0 -mt-36' src={Temp} alt="" />
        </div>
    </div>
    </>
  )
}

export default Body1