import { useState } from 'react';
import Link from 'next/link';

const shareholder = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { icon: 'fas fa-chart-line', label: 'My Shares', link: '/shares' },
    { icon: 'fas fa-file-alt', label: 'Reports', link: '/reports' },
    { icon: 'fas fa-newspaper', label: 'News', link: '/news' },
    { icon: 'fas fa-calendar-alt', label: 'Meetings', link: '/meetings' },
    { icon: 'fas fa-envelope', label: 'Letters', link: '/letters' },
  ];
  return (
    <div className="flex justify-between items-center bg-blue-500 p-4">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        <h1 className="text-white">Shareholder Dashboard</h1>
      </div>
      <div className="flex items-center">
        <Link href="/chat" legacyBehavior>
          <a className="p-2 rounded-full bg-white mr-4">
            <i className="fas fa-comment"></i>
          </a>
        </Link>
        <Link href="/settings" legacyBehavior>
          <a className="p-2 rounded-full bg-white">
            <i className="fas fa-cog"></i>
          </a>
        </Link>
        <button
          className="block md:hidden p-2 rounded-full bg-white ml-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50`}
        onClick={toggleMenu}
      ></div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center`}
      >
        {menuItems.map((item, index) => (
          <Link href={item.link} key={index} legacyBehavior>
            <a
              className="block py-2.5 px-4 hover:bg-gray-200 rounded-md md:py-4 md:px-6 md:hover:bg-gray-200 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <i className={`${item.icon} text-lg mr-2 md:text-2xl`}></i>
              <span className="text-base md:text-lg font-medium">
                {item.label}
              </span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default shareholder; 