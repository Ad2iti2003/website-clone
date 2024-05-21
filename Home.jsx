import React from 'react';
import "../style/Home.css";
import triangles from "../image/icons8-triangle-48.png";


function Home() {
   
   
    return (
        <div className='bg-neutral-800 flex'>
            <ul id='ul' className='flex text-zinc-400 px-6 gap-x-9 '>
                <li><a href="" className='text-xl text-white '>Web Themes & Templates <div className='w-16'></div><img className='w-6 h-6 ml-28 -mb-1' src={triangles} alt="/" /></a></li>
                <li><a href="" className='text-xl hover:text-white'>Code </a></li>
                <li><a href="" className='text-xl hover:text-white'>Video </a></li>
                <li><a href="" className='text-xl hover:text-white'>Audio </a></li>
                <li><a href="" className='text-xl hover:text-white'>Graphics</a></li>
                <li><a href="" className='text-xl hover:text-white'>Photos</a></li>
                <li><a href="" className='text-xl hover:text-white'>3D Files</a></li>
                <li>|</li>
                <li><a href="" className='text-xl text-white bg-gradient-to-r from-red-700 via-purple-700 to-blue-600 bg-[length:100%_2px] bg-no-repeat bg-bottom pb-5'>Unlimited Downloads</a></li>
            </ul>
        </div>
    );
}

export default Home;
