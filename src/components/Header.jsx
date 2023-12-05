import { useState } from "react";
import { Link } from "react-router-dom";

import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
const Header = () => {
  let [open, setOpen] = useState(false);

  return (
    <div>
      <div className=' shadow-md z-50 w-full  relative top-0 left-0'>
        {/* <div className=' md:flex justify-between items-center bg-gray-900 text-white'> */}
        <div className=' md:flex justify-between lg:px-10 bg-gray-900 text-white'>
          <div className=' lg:flex-basis-1/4 lg:py-2 '>
            <Link to='/' class=''>
              <h2 className='text-2xl text-left font-bold py-4 ml-5 lg:ml-8 text-primary'>
                user
              </h2>
            </Link>
          </div>

          {/* mobile icon  */}
          <div
            onClick={() => setOpen(!open)}
            className='text-3xl font-bold text-md absolute right-8 top-4 cursor-pointer lg:hidden'
          >
            <ion-icon name={open ? "close" : "menu"}>
              {open ? <IoMdClose /> : <CiMenuBurger />}
            </ion-icon>
          </div>

          <div className=' px-0'>
            <ul
              className={`  lg:flex justify-between lg:pr-5 lg:items-end lg:py-0  lg:pb-0 pb-8 absolute lg:static bg-gray-900 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0  transition-all duration-500 ease-in ${open ? "top-[60px]" : "top-[-480px]"
                }`}
            >
              <div className='lg:flex ml-5 lg lg:justify-between'>
                <li
                  className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Link
                    onClick={() => setOpen(!open)}
                    to='/'
                    className='text-lg text-gray-200 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'
                  >
                    Home
                  </Link>

                </li>
                <li
                  className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Link
                    onClick={() => setOpen(!open)}
                    to='/team'
                    className='text-lg text-gray-200 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'
                  >
                    Team
                  </Link>

                </li>
                <li
                  className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Link
                    onClick={() => setOpen(!open)}
                    to='/about'
                    className='text-lg text-gray-200 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'
                  >
                    About
                  </Link>

                </li>




              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
