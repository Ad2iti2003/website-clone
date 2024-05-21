import React from 'react'
import grid1 from '../image/grid11.png'
import grid2 from '../image/file.png'
import grid3 from '../image/grid3.png'
import grid4 from '../image/grid4.png'
import grid5 from '../image/grid5.png'
import grid6 from '../image/grid6.png'

function Body2() {
  return (
    <>
    <div className='grid grid-cols-3 bg-gray-100 gap-10 text-gray-800 pb-12 px-2'>
        <div className='bg-slate-100 h-full border px-9 pt-9 rounded-lg text-center shadow-md shadow-slate-400 hover:bg-white'>
            <h1 className='text-4xl font-bold leading-loose cursor-pointer hover:underline mt-10'> WordPress Themes</h1>
            <p className='text-xl leading-loose'>Thousands of WordPress themes</p>
            <p className='text-blue-500 text-xl leading-loose cursor-pointer hover:underline'>Newest <span className='text-xl ml-6'>     Bestsellers </span></p>
            <img src={grid1} className='mt-28 hover:-translate-y-6' alt="" />

        </div>
        <div className='bg-slate-100 h-full border px-9 pt-9 rounded-lg shadow-md shadow-slate-400 text-center hover:bg-white'>
            <h1 className='text-4xl font-bold leading-loose cursor-pointer hover:underline mt-10'>eCommerce Templates</h1>
            <p className='text-xl leading-loose'>Beautiful website templates</p>
            <p className='text-blue-500 text-xl cursor-pointer leading-loose hover:underline'>Newest <span className='text-xl ml-6'> Bestsellers</span>  </p>
            <img src={grid2} className='mt-28 hover:-translate-y-6' alt="" />
        </div>
        <div className='bg-slate-100 h-full  border px-9 pt-9 rounded-lg shadow-md shadow-slate-400 text-center hover:bg-white'>
            <h1 className='text-4xl font-bold leading-loose hover:underline cursor-pointer mt-10'>Site Templates</h1>
            <p className='text-xl leading-loose'>HTML and website templates</p>
            <p className="text-blue-500 text-xl cursor-pointer leading-loose hover:underline">Newest  <span className='text-xl ml-6'> Bestsellers</span></p>
            <img src={grid3} className='mt-28 hover:-translate-y-6' alt="" />
        </div>
    </div>
    <div className='grid grid-cols-3 bg-gray-100 gap-10 px-2 text-gray-800 pb-12'>
        <div className='bg-slate-100 h-full border px-9 pt-10 rounded-lg text-center shadow-md shadow-slate-400 hover:bg-white'>
            <h1 className='text-4xl font-bold leading-loose cursor-pointer hover:underline mt-10'> Marketing Templates</h1>
            <p className='text-xl leading-loose'>Email, newsletter and landing page templates.</p>
            <p className='text-blue-500 text-xl leading-loose hover:underline cursor-pointer'>Newest <span className='text-xl ml-6'>     Bestsellers </span></p>
            <img src={grid4} className='mt-28 hover:-translate-y-6' alt="" />

        </div>
        <div className='bg-slate-100 h-full border px-9 pt-24 rounded-lg shadow-md shadow-slate-400 text-center hover:bg-white'>
            <h1 className='text-4xl font-bold leading-loose hover:underline mt-10'>CMS Templates</h1>
            <p className='text-xl leading-loose'>Over 1,700 CMS website templates</p>
            <p className='text-blue-500 text-xl leading-loose cursor-pointer hover:underline'>Newest <span className='text-xl ml-6'> Bestsellers</span>  </p>
            <img src={grid5} className='mt-28 hover:-translate-y-6' alt="" />
        </div>
        <div className='bg-slate-100 h-full px-9 pt-24 border rounded-lg shadow-md shadow-slate-400 text-center hover:bg-white'>
            <h1 className='text-4xl font-bold leading-loose hover:underline mt-10'>Blogging</h1>
            <p className='text-xl leading-loose'>Blogger templates and themes</p>
            <p className="text-blue-500 text-xl leading-loose cursor-pointer hover:underline">Newest  <span className='text-xl ml-6'> Bestsellers</span></p>
            <img src={grid6} className='mt-28 hover:-translate-y-6' alt="" />
        </div>
    </div>
    <div className='bg-gray-100 text-center pb-10'>
        <button className='bg-lime-600 text-white py-3 px-5 text-lg rounded-md'>View all categories</button>
    </div>
    
    </>
  )
}

export default Body2