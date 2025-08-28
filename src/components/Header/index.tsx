import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (

<nav className='w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8'>
        <div className='text-3xl font-bold text-gray-800'>Sonic</div>
        <ul className='hidden  md:flex space-x-8'>
        <Link href='/about'>About</Link>
            <Link href='/features'>Features</Link>
            <Link href='/products'>Products</Link>
            <Link href='/contact'>Contact</Link>
        </ul>

        <button className="p-3 text-black border">Buy Now</button>
        
    </nav>

  )
}

export default Header;
