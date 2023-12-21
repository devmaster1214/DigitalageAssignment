'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)
  const pathname = usePathname()

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between h-20 md:h-28">

          {/* Site branding */}
          <div className={`shrink-0 lg:mx-8 transition duration-150 ${top && pathname == '/' ? 'opacity-0' : 'opacity-100'}`}>
            <Logo />
          </div>
          
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-center flex-wrap items-center gap-8">
              <li>
                <Link href="/product" className={`text-xl text-bold transition duration-300 ease-in-out ${(!top || pathname == '/signin' || pathname == '/signup') ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-blue-500'}`}>Product</Link>
              </li>
              <li>
                <Link href="/features" className={`text-xl text-bold transition duration-300 ease-in-out ${(!top || pathname == '/signin' || pathname == '/signup')  ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-blue-500'}`}>Features</Link>
              </li>
              <li>
                <Link href="/marketplace" className={`text-xl text-bold transition duration-300 ease-in-out ${(!top || pathname == '/signin' || pathname == '/signup')  ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-blue-500'}`}>Marketplace</Link>
              </li>
              <li>
                <Link href="/about" className={`text-xl text-bold transition duration-300 ease-in-out ${(!top || pathname == '/signin' || pathname == '/signup')  ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-blue-500'}`}>About us</Link>
              </li>
            </ul>
          </nav>

          {/* Desktop navigation */}
          <nav className="hidden md:flex">
            {/* Desktop sign in links */}
            <ul className="flex justify-end flex-wrap items-center lg:mx-8">
              <li>
                <Link href="/signin" className={`btn-sm bg-transparent border-0 hover:text-blue-500 transition duration-300 ease-in-out ${top ? 'text-white' : 'text-gray-900'}`}>
                  <span>Log in</span>
                  <svg className="w-3 h-3 fill-current shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
