import React from 'react'
import image from '../image/envato-market.jpg'
import menu from '../image/icons8-circled-menu-24.png'
import menuwhite from '../image/icons8-circled-menu-50  white.png'
import cart from '../image/icons8-cart-50.png'
import cartwhite from '../image/icons8-cart-50 white.png' 
import "../style/Navbar.css"


function Navbar() {
  const hover = (event) =>{
    event.target.src = menuwhite ;
  }
  const unhover = (event) =>{
    event.target.src = menu ;
  }
  const carthover = (event) =>{
    event.target.src = cartwhite;
  }
  const cartunhover = (event) =>{
    event.target.src = cart;
  }
  return (
    <>
    <div className='flex bg-neutral-800 justify-between '>
    <div >
        <a href=""><img className='w-44 h-28 ' src={image} alt="/" /></a>
    </div>
    <div className=' p-5 mt-2'>
        <ul className='flex text-xs text-zinc-400 gap-x-2 '>
            <li className=' py-1 px-2 hover:text-white'><a href="">Forums</a></li>
            <li className=' py-1 px-2 hover:text-white'><a href="">Start Selling</a></li>
            <li className=' py-1 px-2 gap-x-1 hover:text-white'><a href="" className='flex gap-x-1'><img className='w-4 h-4' id='img' alt="/" onMouseEnter={hover} onMouseLeave={unhover}/>Our Products</a></li>
            <li className=' py-1 px-2 hover:text-white'><a href=""><img className='w-6 h-5' onMouseEnter={carthover} onMouseLeave={cartunhover} alt="" /></a></li>
            <li className='bg-neutral-600 py-1 px-2 hover:text-white'><a href="">Sign In</a></li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar