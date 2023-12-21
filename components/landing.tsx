'use client';

import { useEffect, useState } from "react";
import Logo from "./ui/logo";
import Link from "next/link";

export default function Landing() {
  const [top, setTop] = useState<boolean>(true)

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
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="w-full absolute brightness-50 top-0 pointer-events-none -z-10" aria-hidden="true">
        <img src="/images/digital_background2.png" className="h-[100vh] w-full object-cover"></img>
      </div>
      <div className="left-10 md:left-16 flex absolute pt-6 md:pt-12 text-white items-start">
        <div className={`transition duration-500 ${top ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="/" className="block">
            <img src="/logo/dalogo_light.png" className='h-16 md:h-20'></img>
          </Link>
        </div>
        <div className="pt-12 hidden 2xl:block">
          <p className="text-sm">is pioneering a revolutionary <span className="text-md">Social Media Platform</span></p>
          <p className="text-md text-end">center around Elevating creators</p>
          <p className="text-md text-end">Protecting individual rights</p>
          <p className="text-md text-end">Cultivating authentic communities</p>
        </div>
      </div>

      <div className="flex w-full h-screen items-center justify-center sm:px-6 px-4">
        {/* Section header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl text-gray-200 font-extrabold mb-4" data-aos="zoom-y-out">The Future Of Social Media Starts Now</h1>
          <div className="max-w-4xl mx-auto pt-28">
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              <div>
                <a className="btn text-white bg-[#7878ff] border-[1px] border-[#7878ff] bg-opacity-50 hover:bg-opacity-100 w-full mb-4 sm:w-auto sm:mb-0 rounded-full" href="#0">
                  Get started
                </a>
              </div>
              <div>
                <a className="btn text-white hover:text-blue-500 w-full sm:w-auto sm:ml-4" href="#0">
                  Learn more
                  <svg className="w-3 h-3 fill-current shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0 h-[300px]">
        <div className="sm:px-6 px-4 pt-4">
          <div className="hidden lg:flex flex-col 2xl:flex-row items-start gap-2 text-white xl:pl-8 2xl:pl-12" data-aos="fade-right">
            <p className="text-lg"><span className="text-2xl text-bold">Out platform</span> is designed to provide</p>
            <div className="pt-1.5 pl-12 md:pl-16 lg:pl-24 xl:pl-56 2xl:pl-0">
              <p className="text-lg">Transparency</p>
              <p className="text-lg">Ensure content integrity</p>
              <p className="text-lg">Foster meaningful connections</p>
              <p className="text-lg">Enable equatible compensation</p>
            </div>
          </div>
          <p className="w-full text-lg text-center text-white pt-12" data-aos="zoom-y-out">
            <span className="text-2xl text-bold">We</span> are Reimaging Social Technology to put control back into the hands of users - giving you unmatched authority over your personal data and digital footprint.
          </p>
        </div>
        <img src="/images/overlay1.png" className="hidden lg:block absolute bottom-0 left-0 h-full pointer-events-none -z-1" aria-hidden="true"></img>
      </div>
    </section>
  )
}