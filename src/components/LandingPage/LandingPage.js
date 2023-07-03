import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import headerImage from '../../assets/headerImage.png'
import devCat from '../../assets/devCat.png'
import desCat from '../../assets/desCat.png'
import bussCat from '../../assets/bussCat.png'
import itCat from '../../assets/ItCat.png'
import marCat from '../../assets/markCat.png'
import phCat from '../../assets/phCat.png'
import courseCard from '../../assets/courseCard1.png'
import courseCard2 from '../../assets/courseCard2.png'
import career from '../../assets/career.png'
import skill from '../../assets/skill.png'
import experts from '../../assets/experts.png'
import messageicon from '../../assets/messageIcon.png'
import callLogo from '../../assets/call.png'
import messageLogo from '../../assets/message.png'
import instagramlogo from '../../assets/instagram.png'
import linkedinLogo from '../../assets/linkedIn.png'
import facebookLogo from '../../assets/facebook.png'
import Line from '../../assets/landingPageLine.png'
import rupee from '../../assets/rupee.png'
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo_harvest from '../../assets/logo_Harvest.png'


const Navbar = () => {

    const matches = useMediaQuery('(max-width: 600px)');
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    const isSmallScreen = useMediaQuery('(max-width: 767px)');
    const imageSize = matches ? '70px' : '160px';
    // const isWide = useMediaQuery('(min-width: 768px)');


    return (
        <div >
            <nav className="flex items-center shadow-md justify-between flex-wrap bg-white py-4 lg:px-12 border-solid border-t-2">
                <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                    <div className="flex items-center flex-shrink-0 text-purple-800 mr-16">
                        <img style={{height:70, width:140}} src={Logo_harvest} alt='' />
                    </div>
                    <input
                        className="border-2 mt-5 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none "
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <div className="block lg:hidden">
                        <button
                            id="nav"
                            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
                            onClick={toggleMenu}
                        >
                            <span>
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${showMenu ? 'block' : 'hidden'}`}>
                    <div className="text-md font-bold text-blue-700 lg:flex-grow">
                        {window.innerWidth < 1024 ? (
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded"
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                        ) : null}
                        {window.innerWidth < 1024 ? (
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded"
                                onClick={toggleMenu}
                            >
                                About Us
                            </a>
                        ) : (
                            <>
                                <a
                                    href="#responsive-header"
                                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded"
                                >
                                    Home
                                </a>
                                <a
                                    href="#responsive-header"
                                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded"
                                >
                                    About Us
                                </a>
                            </>
                        )}
                    </div>
                    <div className="relative mx-auto text-gray-600 lg:block hidden">
                        <Link
                            to="/login"
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold mr-8 py-2 px-4 rounded"
                        >
                            Login
                        </Link>


                        <Link to="/SelectTypeSignup" className="bg-purple-500 hover:bg-purple-700 text-white font-bold mr-8 py-2 px-4 rounded">
                            Signup
                        </Link>


                    </div>
                </div>

            </nav>

            <div class="w-full">
                <img src={headerImage} alt='' class="w-screen" />
            </div>
            <div class='p-10  text-center'>
                <h3 class="font-bold text-lg text-3xl mt-10 leading-20">Choose your favourite Course from our top categories</h3>
            </div>


            <div className="flex flex-col items-center">
                <div className='flex items-end p-5'>
                    <p class="text-purple-600/100 underline ">View all</p>
                </div>
                <div className='flex'>
                    <img src={devCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={itCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={desCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={bussCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={marCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={phCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                </div>
            </div>

            <div class="flex flex-col justify-center h-full bg-purple-300 bg-opacity-50 my-20">
                <div class='p-10'>
                    <p class="text-center font-bold text-3xl text-lg">Get choice of your course</p>
                </div>

                <div className="flex justify-center">
                    <div className="relative w-full lg:max-w-sm">
                        <select className=" w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600">
                            <option>Design</option>
                            <option>Development</option>
                            <option>IT & Software</option>
                            <option>Bussiness</option>
                            <option>Marketing</option>
                            <option>Photography</option>
                        </select>
                    </div>
                </div>


                <div className={`flex flex-row justify-center ${isSmallScreen ? 'flex-wrap' : ''} mb-32`}>
                    <div class="flex flex-col w-72 justify-center mt-20 mx-5 rounded bg-white overflow-hidden shadow-lg">
                        <img class="h-36 w-72 p-4" src={courseCard} alt="Sunset in the mountains"></img>
                        <div class="">
                            <p class=" text-start ml-4 font-bold">User Experience (UX) :</p>
                            <p class=" text-start ml-4 font-bold">For beginners</p>
                            <p class=" text-start ml-4 font-light">course start Date</p>

                            <div class="flex  flex-row">
                            <p class=" text-start ml-4 font-light">4.5 ⭐⭐⭐⭐</p>

                                <button class="bg-purple-500 ml-20 mb-12 p-1 hover:bg-purple-700 text-white rounded">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col w-72 justify-center mt-20 mx-5 rounded bg-white overflow-hidden shadow-lg">
                        <img class="h-36 w-72 p-4" src={courseCard} alt="Sunset in the mountains"></img>
                        <div class="">
                            <p class=" text-start ml-4 font-bold">User Experience (UX) :</p>
                            <p class=" text-start ml-4 font-bold">For beginners</p>
                            <p class=" text-start ml-4 font-light">course start Date</p>

                            <div class="flex  flex-row">
                            <p class=" text-start ml-4 font-light">4.5 ⭐⭐⭐⭐</p>

                                <button class="bg-purple-500 ml-20 mb-12 p-1 hover:bg-purple-700 text-white rounded">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col w-72 justify-center mt-20 mx-5 rounded bg-white overflow-hidden shadow-lg">
                        <img class="h-36 w-72 p-4" src={courseCard} alt="Sunset in the mountains"></img>
                        <div class="">
                            <p class=" text-start ml-4 font-bold">User Experience (UX) :</p>
                            <p class=" text-start ml-4 font-bold">For beginners</p>
                            <p class=" text-start ml-4 font-light">course start Date</p>

                            <div class="flex  flex-row">
                            <p class=" text-start ml-4 font-light">4.5 ⭐⭐⭐⭐</p>

                                <button class="bg-purple-500 ml-20 mb-12 p-1 hover:bg-purple-700 text-white rounded">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <p class=" text-center text-3xl p-5 font-bold">We will help you Learn</p>

            <div class="grid grid-cols-6 gap-4">
                <div class="flex flex-col col-start-2 col-span-4">
                    <p class="text-3xl p-10 font-bold">01. Tune Your Skill Without Breakage </p>

                    <div class="flex flex-row items-center">
                        <div class="flex ml-12">
                            <img src={Line} alt="Line" />
                        </div>

                        <div class="flex-1 ml-10">
                            <p class="text-2xl">Find what you are interested to learn</p>
                            <p class="text-2xl ">online and choose what exactly best for</p>
                            <p class="text-2xl ">you that you really passionate.</p>
                        </div>
                        <div class="flex ">
                            <img src={career} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-6 gap-4">
                <div class="flex flex-col col-start-2 col-span-4">
                    <p class="text-3xl p-10 font-bold">02. Career Advancement Opportunity</p>

                    <div class="flex flex-row items-center">
                        <div class="flex ml-12">
                            <img src={Line} alt="Line" />
                        </div>
                        <div class="flex-1 ml-10">
                            <p class=" text-2xl ">  Guidance from experts provide insights into</p>
                            <p class=" text-2xl ">the nature of thinking and problem solving.</p>
                            <p class=" text-2xl ">They can provide unique perspective.</p>
                        </div>
                        <div class="flex ">
                            <img src={skill} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-6 gap-4">
                <div class="flex flex-col col-start-2 col-span-4">
                    <p class="text-3xl p-10 font-bold ">03. Learn From Experts </p>

                    <div class="flex flex-row items-center">
                        <div class="flex-1 ml-20">
                            <p class=" text-2xl "> Master your skill on your own schedule,</p>
                            <p class=" text-2xl "> which can be clearly seen on your resume</p>
                            <p class=" text-2xl ">with valuable certificate.</p>

                        </div>
                        <div class="flex ">
                            <img src={experts} alt='' />
                        </div>
                    </div>
                </div>
            </div>


            <div class="grid grid-cols-6 gap-4">

                <div class="flex ml-10 p-5 col-start-2 col-span-4">

                    <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold mr-8 py-2 px-4 rounded">
                        Login
                    </button>

                    <button class="bg-white border-solid hover:bg-purple-700  text-purple-500 font-bold mr-8 py-2 px-4 rounded">
                        Signup
                    </button>

                </div>

            </div>



            <div class="flex flex-col justify-center  h-full mt-10 bg-purple-500 bg-opacity-50">

                <div class="grid grid-cols-6 gap-4">

                    <div class="flex flex-row  items-center col-start-2 col-span-4">


                        <div className='flex-1 flex-col '>
                            <p class=" text-left ml-20 text-3xl mt-10 mb-6 font-bold " > Write to us</p>


                            <div class="w-full ml-20 mb-16 max-w-xs">
                                <form class="bg-white shadow-md rounded px-12 py-20 pt-4 pb-4 mb-4">
                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                            Name
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                                    </div>
                                    <div class="mb-2">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                            Email
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="Email" placeholder='Email' />
                                    </div>
                                    <div class="mb-2">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                            Message
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full h-20 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                                    </div>
                                    <div class="flex justify-end items-end">
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Send
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div class="flex mt-10 w-1/3">
                            <img style={{ height: '100%', width: '80%' }} src={messageicon} alt='' />
                        </div>

                    </div>

                </div>

            </div>


            {/* Main div of Black footer */}

            <div className="flex flex-col justify-center h-96 bg-black bg-opacity-80">
                <div className="flex flex-col md:flex-row">

                    {/* 1st Logo in footer */}

                    <div className=" w-1/4 mx-20  md:my-0">
                        <img src={Logo} alt='' />
                    </div>

                    {/* 2nd Column in footer */}

                    <div className={`flex w-1/4 flex-col md:flex-col mx-20 ${matches ? 'my-5' : 'my-3'}`}>
                        <p className="flex text-white md:my-0 md:mx-5">About Us</p>
                        <p className="flex text-white my-2 md:mx-5">Career</p>
                    </div>

                    {/* 3rd column in footer */}

                    <div className={`flex w-1/4 flex-col md:flex-col mx-20 ${matches ? 'my-5' : 'my-3'}`}>
                        <p className=" text-white md:my-0 md:mx-0">Term &amp; conditions</p>
                        <p className=" text-white  md:my-2 md:mx-0">Privacy policy</p>
                        <p className="text-white  md:mx-0">Help and Support</p>
                    </div>



                    {/* Conact us column in footer */}

                    <div className={`flex w-1/4 flex-col md:flex-col mx-20 ${matches ? 'my-5' : 'my-3'}`}>
                        <p className=" text-white md:my-2  md:mx-3">Contact Us</p>
                        <div className="flex flex-row my-3 md:my-3 md:mx-0">
                            <div className="flex mx-1">
                                <img src={callLogo} alt='' />
                            </div>
                            <p className="" style={{ color: '#fff' }}>+91 987654321</p>
                        </div>
                        <div className="flex flex-row my-3  md:my-3 md:mx-0">
                        <div className="flex mx-1">
                                <img src={messageLogo} alt='' />
                            </div>
                            <p className="" style={{ color: '#fff' }}>lms.info@gmail.com</p>
                        </div>
                        <div className="flex flex-row my-3 md:my-5 md:mx-0">
                            <div className="flex mx-3">
                                <img src={facebookLogo} alt='' />
                            </div>
                            <div className="flex mx-3">
                                <img src={linkedinLogo} alt='' />
                            </div>
                            <div className="flex mx-1">
                                <img src={instagramlogo} alt='' />
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Navbar
