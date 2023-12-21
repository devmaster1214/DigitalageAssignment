'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const [top, setTop] = useState<boolean>(true)
  const pathname = usePathname()

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
  
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger z-30 ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className={`w-6 h-6 fill-current ${top || mobileNavOpen ? 'text-white' : 'text-gray-900'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen z-20 -mt-20 right-0 w-full sm:w-[320px] overflow-scroll bg-gray-900 scrollbar-hide"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          
          <nav className="py-16 px-5">
            {/* Desktop sign in links */}
            <ul className="flex flex-col justify-center flex-wrap items-center gap-8">
              <li className='w-full'>
                <Link href="/product" className={`btn-sm w-full transition duration-300 ease-in-out text-white hover:text-blue-500 hover:bg-gray-800`}>Product</Link>
              </li>
              <li className='w-full'>
                <Link href="/features" className={`btn-sm w-full transition duration-300 ease-in-out text-white hover:text-blue-500 hover:bg-gray-800`}>Features</Link>
              </li>
              <li className='w-full'>
                <Link href="/marketplace" className={`btn-sm w-full transition duration-300 ease-in-out text-white hover:text-blue-500 hover:bg-gray-800`}>Marketplace</Link>
              </li>
              <li className='w-full'>
                <Link href="/about" className={`btn-sm w-full transition duration-300 ease-in-out text-white hover:text-blue-500 hover:bg-gray-800`}>About Us</Link>
              </li>
              <li className='w-full h-[1px] bg-white'>
              </li>
              <li className='w-full'>
                <Link href="/signin" className="btn-sm w-full text-white transition duration-300 ease-in-out hover:text-blue-500 bg-gray-900 hover:bg-gray-800 justify-center" onClick={() => setMobileNavOpen(false)}>Log in</Link>
              </li>
              <li className='w-full'>
                <Link href="/signup" className="btn-sm text-white transition duration-300 ease-in-out hover:text-blue-500 bg-gray-900 hover:bg-gray-800 w-full" onClick={() => setMobileNavOpen(false)}>
                  <span>Sign up</span>
                </Link>
              </li>
            </ul>     
          </nav>     
        </Transition>
      </div>
    </div>
  )
}
