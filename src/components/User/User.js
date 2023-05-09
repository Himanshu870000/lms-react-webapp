import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import dashDp from '../../assets/dashDP.png'
import notification from '../../assets/notification.png'
import chatIcon from '../../assets/chatIcon.png'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import MyCourses from './MyCourses/myCourses';
import Revenue from './Revenue/Revenue';
import Engagement from './Engagement/Engagement';
import Messages from './Messages/Messages';
import Announcement from './Announcement/Announcement';
import DropIcon from '../../assets/dropDownIcon.png'


const HomePage = (props) => {

    // const [showMenu, setShowMenu] = useState(false);

    // const toggleMenu = () => {
    //     setShowMenu(!showMenu);
    // };

    const { token } = props;

    console.log('token---->', token)


    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    const [activeMenu, setActiveMenu] = useState("dashboard");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className='bg-white'>
            <nav class="fixed top-0 z-50 w-full shadow-md bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-4 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <div className="flex items-center flex-shrink-0 text-purple-800 ml-16">
                                <img className='w-24 h-8' src={Logo} alt='' />
                            </div>
                        </div>

                        <div className=''>
                            <input
                                className="border-2 w-full sm:w-3/4 md:w-96 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search"
                            >
                            </input>
                        </div>


                        <div className='flex ' style={{ justifyContent: 'space-between' }}>
                            <p className=' flex-1 text-black font-bold text-xl'>Home</p>


                        </div>

                        <div className='flex flex-row'>
                            <img className=' w-6.5 h-6 mr-3' src={chatIcon} alt='' />
                            <img className=' w-6 h-7 ' src={notification} alt='' />

                        </div>

                        <div className="relative">
                            <button
                                type="button"
                                className="flex text-sm"
                                aria-expanded={isOpen}
                                onClick={toggleDropdown}
                            >
                                <span className="sr-only">Open user menu</span>
                                <div className="flex flex-row items-center flex-shrink-0 text-purple-800 mr-10">
                                    <img className="w-10 h-10" src={dashDp} alt="" />
                                    <img className="" src={DropIcon} alt="" />


                                </div>
                            </button>
                            <div
                                className={`absolute right-0 mt-2 w-48 ${isOpen ? '' : 'hidden'} py-1 bg-white rounded-md shadow-lg`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                <p
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Dashboard
                                </p>
                                <p
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Settings
                                </p>
                                <p
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Earnings
                                </p>
                                <Link
                                    to='/'
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Sign out
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>



            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-slate-900 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-slate-900 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <Link onClick={() => handleMenuClick("dashboard")}
                                class={`flex items-center p-2   rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700 ${activeMenu === "dashboard" ? "text-blue-500":"text-white" }`}>
                                <svg aria-hidden="true" class="w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span class="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => handleMenuClick("myCourses")}
                                class={`flex items-center p-2   rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700 ${activeMenu === "myCourses" ? "text-blue-500":"text-white" }`}>
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">My Courses</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => handleMenuClick("Messages")}
                                class={`flex items-center p-2   rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700 ${activeMenu === "Messages" ? "text-blue-500":"text-white" }`}>
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => handleMenuClick("Engagement")}
                                class={`flex items-center p-2   rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700 ${activeMenu === "Engagement" ? "text-blue-500":"text-white" }`}>
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Engagement</span>
                            </Link>
                        </li>
                       
                        <li>
                            <Link onClick={() => handleMenuClick("Revenue")}
                                class={`flex items-center p-2   rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700 ${activeMenu === "Revenue" ? "text-blue-500":"text-white" }`}>
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Revenue</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => handleMenuClick("Announcement")}
                                class={`flex items-center p-2   rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700 ${activeMenu === "Announcement" ? "text-blue-500":"text-white" }`}>
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Announcement</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div class="p-4 sm:ml-64" >
                <div class="p-4  rounded-lg dark:border-gray-700 mt-14">

                    <div className="w-3/4">
                        {activeMenu === "dashboard" ? (
                            <Dashboard />
                        ) : activeMenu === "myCourses" ? (
                            <MyCourses />
                        ) : activeMenu === "Revenue" ? (
                            <Revenue />
                        ) : activeMenu === "Engagement" ? (
                            <Engagement />
                        ) : activeMenu === "Messages" ? (
                            <Messages />
                        ) : activeMenu === "Announcement" ? (
                            <Announcement />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
