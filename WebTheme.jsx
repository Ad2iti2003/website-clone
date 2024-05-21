import React from 'react'
import Themeforest from '../image/themeforest_72945.webp'

function WebTheme() {
    const All = () => {
        const allItems = document.querySelector("#Allid");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const Allvisible = () => {
        const allItems = document.querySelector("#Allid");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const Wordpress = () => {
        const allItems = document.querySelector("#Wordpress");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const WordpressVissible = () => {
        const allItems = document.querySelector("#Wordpress");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const Eleminatorvisible = () => {
        const allItems = document.querySelector("#Elemenator");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const Elemenator = () => {
        const allItems = document.querySelector("#Elemenator");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const Htmlvisible = () => {
        const allItems = document.querySelector("#html");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const Html = () => {
        const allItems = document.querySelector("#html");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const Shpotify = () => {
        const allItems = document.querySelector("#shpotify");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const Shpotifyvisible = () => {
        const allItems = document.querySelector("#shpotify");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const Marketvisible = () => {
        const allItems = document.querySelector("#Marketing");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const Market = () => {
        const allItems = document.querySelector("#Marketing");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const cmsvisible = () => {
        const allItems = document.querySelector("#cms");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const cms = () => {
        const allItems = document.querySelector("#cms");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const ecommercevisible = () => {
        const allItems = document.querySelector("#ecommerce");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const ecommerce = () => {
        const allItems = document.querySelector("#ecommerce");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const Uivisible = () => {
        const allItems = document.querySelector("#UI");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const Ui = () => {
        const allItems = document.querySelector("#UI");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
    const Morevisible = () => {
        const allItems = document.querySelector("#more");
        if (allItems) {
            allItems.style.visibility = "visible";
        }
    };
    const More = () => {
        const allItems = document.querySelector("#more");
        if (allItems) {
            allItems.style.visibility = "hidden";
        }
    };
  return (
    <>
    <div className='bg-white shadow-sm shadow-slate-300 flex justify-between '>
        <div>
            <ul className='flex mx-5 my-2 gap-x-1 text-neutral-500 z-20'>
                <li className=' p-3 rounded-lg hover:bg-zinc-400 hover:text-white' onMouseMove={All} onMouseLeave={Allvisible}><a href="">All Items</a></li>
                <li className='hover:bg-zinc-400 hover:text-white  p-3 rounded-lg' onMouseMove={Wordpress} onMouseLeave={WordpressVissible} ><a href="">WordPress</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3' onMouseMove={Eleminatorvisible} onMouseLeave={Elemenator}><a href="">Elementor</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3'><a href="">Hosting</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3' onMouseMove={Htmlvisible} onMouseLeave={Html}><a href="">HTML</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3' onMouseMove={Shpotify} onMouseLeave={Shpotifyvisible} ><a href="">Shpotify</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3'><a href="">Jamstack</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3' onMouseMove={Marketvisible} onMouseLeave={Market}><a href="">Marketing</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3' onMouseMove={cmsvisible} onMouseLeave={cms}><a href="">CMS</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3' onMouseMove={ecommercevisible} onMouseLeave={ecommerce}><a href="">eCommerce</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3' onMouseMove={Uivisible} onMouseLeave={Ui}><a href="">UI Template</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3'><a href="">Plugins</a></li>
                <li className='hover:bg-zinc-400 hover:text-white rounded-lg p-3' onMouseMove={Morevisible} onMouseLeave={More}><a href="">More</a></li>
            </ul>
        </div>
        <div className='pr-5'>
            <button className='flex bg-neutral-700 px-4 py-4 rounded-3xl pt-3 text-white -mt-8 '>
                <img src={Themeforest} className='h-6 w-6 bg-neutral-700' alt="/" />
                themeforest
            </button>
        </div>
    </div>
    <div className='flex'>
    <div className='h-72 w-64 border-1 shadow-lg shadow-slate-500 z-20 ' id='Allid'>
        <ul className='py-4 mr-2 z-20'>
            <li className='py-1 hover:bg-zinc-400'>Popular Files</li>
            <li className='py-1 hover:bg-zinc-400'>Featured Files</li>
            <li className='py-1 hover:bg-zinc-400'>Top New Files</li>
            <li className='py-1 hover:bg-zinc-400'>Follow Feed</li>
            <li className='py-1 hover:bg-zinc-400'>Top Authors</li>
            <li className='py-1 hover:bg-zinc-400'>Top New Authors</li>
            <li className='py-1 hover:bg-zinc-400'>Public Collections</li>
            <li className='py-1 hover:bg-zinc-400'>View All Categories</li>
        </ul>
    </div>
    <div className='h-full -ml-40 pl-4 w-64 border-1 shadow-lg shadow-slate-500 z-20 ' id='Wordpress'>
        <ul className='py-4 mr-2 z-20'>
            <li className="py-1 hover:bg-zinc-400">Popular Items</li>
            <li className="py-1 hover:bg-zinc-400">Blog / Magazine</li>
            <li className="py-1 hover:bg-zinc-400">BuddyPress</li>
            <li className="py-1 hover:bg-zinc-400">Corporate</li>
            <li className="py-1 hover:bg-zinc-400">Creative</li>
            <li className="py-1 hover:bg-zinc-400">Directory & Listings</li>
            <li className="py-1 hover:bg-zinc-400">eCommerce</li>
            <li className="py-1 hover:bg-zinc-400">Education</li>
            <li className="py-1 hover:bg-zinc-400">Elementor</li>
            <li className="py-1 hover:bg-zinc-400">Entertainment</li>
            <li className="py-1 hover:bg-zinc-400">Mobile</li>
            <li className="py-1 hover:bg-zinc-400">Nonprofit</li>
            <li className="py-1 hover:bg-zinc-400">Real Estate</li>
            <li className="py-1 hover:bg-zinc-400">Retail</li>
            <li className="py-1 hover:bg-zinc-400">Technology</li>
            <li className="py-1 hover:bg-zinc-400">Wedding</li>
            <li className="py-1 hover:bg-zinc-400">Miscellaneous</li>
            <li className="py-1 hover:bg-zinc-400">WordPress Plugins</li>

        </ul>

    </div>
    <div className='h-32 w-64 border-1 pl-4 shadow-lg shadow-slate-500 -ml-36 z-20 ' id='Elemenator'>
        <ul className='py-4 mr-2 z-20'>
            <li className="py-1 hover:bg-zinc-400">Template Kits</li>
            <li className="py-1 hover:bg-zinc-400">Plugins</li>
            <li className="py-1 hover:bg-zinc-400">Themes</li>   

        </ul>
    </div>
    <div className='h-full w-64 border-1 pl-4 shadow-lg shadow-slate-500 -ml-20 z-20 ' id='html'>
        <ul className='py-4 mr-2 z-20'>
            <li className="py-1 hover:bg-zinc-400">Popular Items</li>
            <li className="py-1 hover:bg-zinc-400">Admin Templates</li>
            <li className="py-1 hover:bg-zinc-400">Corporate</li>
            <li className="py-1 hover:bg-zinc-400">Creative</li>
            <li className="py-1 hover:bg-zinc-400">Entertainment</li>
            <li className="py-1 hover:bg-zinc-400">Mobile</li>
            <li className="py-1 hover:bg-zinc-400">Nonprofit</li>
            <li className="py-1 hover:bg-zinc-400">Personal</li>
            <li className="py-1 hover:bg-zinc-400">Retail</li>
            <li className="py-1 hover:bg-zinc-400">Specialty Pages</li>
            <li className="py-1 hover:bg-zinc-400">Technology</li>
            <li className="py-1 hover:bg-zinc-400">Wedding</li>
            <li className="py-1 hover:bg-zinc-400">Miscellaneous</li>
        </ul>
    </div>
    <div className='h-full w-64 border-1 pl-4 shadow-lg shadow-slate-500 -ml-44 z-20 ' id='shpotify'>
        <ul className='py-4 mr-2 z-20'>
            <li className="py-1 hover:bg-zinc-400">Popular Items</li>
            <li className="py-1 hover:bg-zinc-400">Fashion</li>
            <li className="py-1 hover:bg-zinc-400">Shopping</li>
            <li className="py-1 hover:bg-zinc-400">Health & Beauty</li>
            <li className="py-1 hover:bg-zinc-400">Technology</li>
            <li className="py-1 hover:bg-zinc-400">Entertainment</li>
            <li className="py-1 hover:bg-zinc-400">Miscellaneous</li>
        </ul>
    </div>
    <div className='h-full w-64 border-1 pl-4 shadow-lg shadow-slate-500 -ml-20 z-20' id='Marketing'>
        <ul className='py-4 mr-2 z-20'>
            <li className="py-1 hover:bg-zinc-400">Popular Items</li>
            <li className="py-1 hover:bg-zinc-400">Email Templates</li>
            <li className="py-1 hover:bg-zinc-400">Landing Pages</li>
            <li className="py-1 hover:bg-zinc-400">Unbounce Landing Pages</li>
        </ul>
    </div>
    <div className='h-full w-64 border-1 pl-4 shadow-lg shadow-slate-500 -ml-36 z-20' id='cms'>
        <ul className='py-4 mr-2 z-20'>
            <li className="py-1 hover:bg-zinc-400">Popular Items</li>
            <li className="py-1 hover:bg-zinc-400">Concrete5</li>
            <li className="py-1 hover:bg-zinc-400">Drupal</li>
            <li className="py-1 hover:bg-zinc-400">HubSpot CMS Hub</li>
            <li className="py-1 hover:bg-zinc-400">Joomla</li>
            <li className="py-1 hover:bg-zinc-400">MODX Themes</li>
            <li className="py-1 hover:bg-zinc-400">Moodle</li>
            <li className="py-1 hover:bg-zinc-400">Webflow</li>
            <li className="py-1 hover:bg-zinc-400">Weebly</li>
            <li className="py-1 hover:bg-zinc-400">Miscellaneous</li>
        </ul>
    </div>
    <div className='h-full w-64 border-1 pl-4 shadow-lg shadow-slate-500 -ml-48 z-20 ' id='ecommerce'>
        <ul className='py-4 mr-2 z-20'>
            <li className="py-1 hover:bg-zinc-400">Popular Items</li>
            <li className="py-1 hover:bg-zinc-400">WooCommerce</li>
            <li className="py-1 hover:bg-zinc-400">BigCommerce</li>
            <li className="py-1 hover:bg-zinc-400">Drupal Commerce</li>
            <li className="py-1 hover:bg-zinc-400">Easy Digital Downloads</li>
            <li className="py-1 hover:bg-zinc-400">Ecwid</li>
            <li className="py-1 hover:bg-zinc-400">Magento</li>
            <li className="py-1 hover:bg-zinc-400">OpenCart</li>
            <li className="py-1 hover:bg-zinc-400">PrestaShop</li>
            <li className="py-1 hover:bg-zinc-400">Shopify</li>
            <li className="py-1 hover:bg-zinc-400">Ubercart</li>
            <li className="py-1 hover:bg-zinc-400">VirtueMart</li>
            <li className="py-1 hover:bg-zinc-400">Zen Cart</li>
            <li className="py-1 hover:bg-zinc-400">Miscellaneous</li>

        </ul>
    </div>
    <div className='h-full w-64 border-1 pl-4 shadow-lg shadow-slate-500 -ml-36 z-20' id='UI'>
        <ul className='py-4 mr-2 z-20'>
            <li className="py-1 hover:bg-zinc-400">Popular Items</li>
            <li className="py-1 hover:bg-zinc-400">Figma</li>
            <li className="py-1 hover:bg-zinc-400">Adobe XD</li>
            <li className="py-1 hover:bg-zinc-400">Photoshop</li>
            <li className="py-1 hover:bg-zinc-400">Sketch</li>
        </ul>
    </div>
    <div className='h-full w-64 border-1 pl-4 shadow-lg shadow-slate-500 -ml-20 z-30 ' id='more'>
        <ul className='py-4 mr-2 z-30'>
            <li className="z-30 py-1 hover:bg-zinc-400">Blogging</li>
            <li className="z-30 py-1 hover:bg-zinc-400">Blogger</li>
            <li className="z-30 py-1 hover:bg-zinc-400">Facebook Templates</li>
            <li className="z-30 py-1 hover:bg-zinc-400">Free Elementor Templates</li>
            <li className="z-30 py-1 hover:bg-zinc-400">Free WordPress Themes</li>
            <li className="z-30 py-1 hover:bg-zinc-400">Forums</li>
            <li className=" z-30 py-1 hover:bg-zinc-400">Ghost Themes</li>
            <li className="z-30 py-1 hover:bg-zinc-400">Tumblr</li>
            <li className="z-30 py-1 hover:bg-zinc-400">Unlimited Creative Assets</li>

        </ul>
    </div>
    </div>
    </>
  )
}

export default WebTheme