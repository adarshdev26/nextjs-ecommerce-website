import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (

<nav className='w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8'>
        <div className='text-3xl font-bold text-gray-800'>
          <Link href='/'>
          Sonic</Link>
        </div>
        <ul className='hidden  md:flex space-x-8'>
        <Link href='#about'>About</Link>
            <Link className='hover:underline' href='/features'>Features</Link>
            <Link className='hover:underline' href='/products'>Products</Link>
            <Link className='hover:underline' href='/contact'>Contact</Link>
        </ul>

        <Link
        href='/auth/login'
        className="p-3 text-black border rounded-2xl hover:bg-green-500 hover:cursor-pointer hover:text-white">Login/ Register</Link>
        
    </nav>

  )
}

export default Header;
