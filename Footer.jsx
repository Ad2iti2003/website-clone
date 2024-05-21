import React from 'react'
import Foot1 from '../image/Foot1.png'
import Foot2 from '../image/Foot2.png'
import foot from '../image/footimg.png'
import social from '../image/social.png'

function Footer() {
  return (
    <>
    <div className='flex bg-neutral-800 justify-center py-16 gap-6'>
        <img src={Foot1} className='w-96 h-96 hover:-translate-y-4' alt="" />
        <img src={Foot2} className='w-96 h-96 hover:-translate-y-4' alt="" />
    </div>
    <div className='flex gap-x-20 bg-neutral-900 p-6 '>
        <div>
            <h1 className='text-neutral-500 font-bold my-2'>ENVATO MARKET</h1>
            <ul className='text-white font-bold hover:underline'>
                <li className='my-2'>Terms</li>
                <li className='my-2'>Licenses</li>
                <li className='my-2'>Market API</li>
                <li className='my-2'>Become an affiliate</li>
            </ul>
        </div>
        <div>
            <h1 className='text-neutral-500 font-bold my-2'>HELP</h1>
            <ul className='text-white font-bold hover:underline'>
                <li className='my-2'>Help Center</li>
                <li className='my-2'>Authors</li>
               
            </ul>
        </div>
        <div>
            <h1 className='text-neutral-500 font-bold my-2'>OUR COMMUNITY</h1>
            <ul className='text-white font-bold hover:underline'>
                <li className='my-2'>Community</li>
                <li className='my-2'>Blog</li>
                <li className='my-2'>Forums</li>
                <li className='my-2'>Meetups</li>
            </ul>
    
        </div>
        <div>
            <h1 className='text-neutral-500 font-bold'>MEET ENVATO</h1>
            <ul className='text-white font-bold hover:underline'>
                <li className='my-2'>About Envato</li>
                <li className='my-2'>Careers</li>
                <li className='my-2'>Privacy Policy</li>
                <li className='my-2'>Do not sell or share my personal information</li>
                <li className='my-2'>Sitemap</li>
            </ul>
        </div>
        <div>
            <img src={foot} className='w-96' />
        </div>
    </div>
    <div className='bg-neutral-900 text-zinc-500'><p>________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p></div>
    <div className='bg-neutral-900 '>
        <ul className='flex gap-x-14 text-white font-bold p-6 hover:underline'>
                <li>Envato.com </li>
                <li>Envato Elements</li>
                <li>Placeit by Envato</li> 
                <li>Envato Tuts+</li>
                <li>All Products</li>
                <li>Sitemap</li> 
        </ul>
        <div className='flex justify-between pb-11'>
            <div className='text-mg text-neutral-500 p-6'>
                <p>Price is in US dollars and excludes tax and handling fees</p>
                <p>© 2024 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</p>
            </div>
            <div><img src={social} className='w-64' /></div>
        </div>
    </div>
    </>
  )
}

export default Footer