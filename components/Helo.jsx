
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/logo/log.jpg'

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  return (

    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-2xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-29 z-[100] '
      }
    >
      <div className='flex justify-between items-center w-full h-full px-4  2xl:px-16'>
        
          <a ClassName='flex'>
            <Image
              src={NavLogo}
              alt='/'
              width='100'
              height='10'
              className='cursor-pointer'
            />
            <h1 className='italic font-semibold  text-2xl text-green-800' >
            MyAksion</h1>
          </a>
      
        <div>
       
          <ul  className=' hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Event</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#news'>News</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
             
                <a>
                  <Image
                    src={NavLogo}
                    width='80'
                    height='35'
                    alt='/'
                  />
                <h1 className='italic font-semibold  text-2xl text-green-800' >
            MyAksion</h1>
          </a>
             
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link legacyBehavior href='/' >
                <a>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
                </a>
              </Link>
              <Link legacyBehavior href='/#about'>
                <a>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
                </a>
              </Link>
              <Link legacyBehavior href='/#skills'>
                <a>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
                </a>
              </Link>
              <Link legacyBehavior href='/#projects'>
                <a>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
                </a>
              </Link>
              <Link legacyBehavior href='/resume'>
                <a>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
                </a>
              </Link>
              <Link legacyBehavior href='/#contact' >
                <a>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
                </a>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link legacyBehavior href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                
                <Link legacyBehavior href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



  

