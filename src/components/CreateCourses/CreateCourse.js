import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import dashDp from '../../assets/dashDP.png'
import notification from '../../assets/notification.png'
import chatIcon from '../../assets/chatIcon.png'
import { Link } from 'react-router-dom';
import DropIcon from '../../assets/dropDownIcon.png'
import CourseDescription from './CourseDescription/CourseDescription';
import CourseHeader from './CourseHeader/CourseHeader';
import CourseLanding from './CourseLanding/CourseLanding';
import Curiculum from './Curiculum/Curiculum';
import CourseAvail from './CourseAvailablity/CourseAvail';
import Pricing from './Pricing/Pricing';

const CreateCourses = () => {

    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    const [activeMenu, setActiveMenu] = useState("CourseHeader");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };


    const [courseData, setCourseData] = useState({

        courseCategory: "",
        courseTitle: "",
        courseLevel: "",
        courseLanguage: "",
        courseImage: "",
        courseDescription: "",
        courseDemoVideo: "",
        courseStartDate: "",
        courseEndDate: "",
        CourseEnrollDeadline: "",
        courseCurrency: "",
        coursePrice: "",
        courseSection: [
            {
                title: "",
                description: "",
                lecture: [
                    {

                        lectureTitle: '',
                        lectureNotes: '',

                    }
                ],
                videos: [
                    {
                        videoId: "",
                        videoTitle: "",
                        videoType: "",
                    }
                ],
                assignment: "",

            }

        ],
    });



    console.log('courseData---->', courseData)

    const handleCourseCategoryChange = (Category) => {
        setCourseData((prevData) => ({ ...prevData, courseCategory: Category }));
    };


    const handleCourseTitleChange = (title) => {
        setCourseData((prevData) => ({ ...prevData, courseTitle: title }));
    };

    const handleCourseLevelChange = (Level) => {
        setCourseData((prevData) => ({ ...prevData, courseLevel: Level }));
    };

    const handleCourseLanguageChange = (Language) => {
        setCourseData((prevData) => ({ ...prevData, courseLanguage: Language }));
    };


    const handleCourseImageChange = (image) => {
        setCourseData((prevData) => ({ ...prevData, courseImage: image }));
    };

    const handleCourseDescriptionChange = (Description) => {
        setCourseData((prevData) => ({ ...prevData, courseDescription: Description }));
    };


    const handleCourseDemoVideoChange = (DemoVideo) => {
        setCourseData((prevData) => ({ ...prevData, courseDemoVideo: DemoVideo }));
    };



    const handleCourseSectionChange = (index, key, value) => {
        setCourseData((prevData) => {
            const courseSection = [...prevData.courseSection];
            courseSection[index][key] = value;
            return {
                ...prevData,
                courseSection,
            };
        });
    };



    const handleCourseStartDateChange = (StartDate) => {
        setCourseData((prevData) => ({ ...prevData, courseStartDate: StartDate }));
    };


    const handleCourseEndDateChange = (EndDate) => {
        setCourseData((prevData) => ({ ...prevData, courseEndDate: EndDate }));
    };

    const handleCourseEnrollDeadlineChange = (EnrollDeadline) => {
        setCourseData((prevData) => ({ ...prevData, CourseEnrollDeadline: EnrollDeadline }));
    };


    const handleCourseCurrencyChange = (Currency) => {
        setCourseData((prevData) => ({ ...prevData, courseCurrency: Currency }));
    };

    const handleCoursePriceChange = (Price) => {
        setCourseData((prevData) => ({ ...prevData, coursePrice: Price }));
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
                                <p
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Sign out
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>



            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-300 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto  bg-gray-300 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <p
                                class="flex items-center font-bold p-2 text-black rounded-lg dark:text-white " data-target="dashboard">
                                <span class="ml-3">Create Your Course</span>
                            </p>
                        </li>
                        <li>
                            <Link onClick={() => handleMenuClick("CourseHeader")}
                                class={`flex items-center text-sm p-2 rounded-lg dark:text-white hover:text-purple-500 ${activeMenu === "CourseHeader" ? "text-purple-500" : "text-black"}`}>
                                <span class="flex-1 ml-3 whitespace-nowrap">Course Landing Page</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => handleMenuClick("CourseLanding")}
                                class={`flex items-center text-sm p-2 rounded-lg dark:text-white hover:text-purple-500 ${activeMenu === "CourseLanding" ? "text-purple-500" : "text-black"}`}>
                                <span class="flex-1 ml-3 whitespace-nowrap">Course Description</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => handleMenuClick("CourseDescription")}
                                class={`flex items-center text-sm p-2 rounded-lg dark:text-white hover:text-purple-500 ${activeMenu === "CourseDescription" ? "text-purple-500" : "text-black"}`}>
                                <span class="flex-1 ml-3 whitespace-nowrap">Demo Video</span>
                            </Link>
                        </li>

                        <li>
                            <Link onClick={() => handleMenuClick("Curiculum")}
                                class={`flex items-center text-sm p-2 rounded-lg dark:text-white hover:text-purple-500 ${activeMenu === "Curiculum" ? "text-purple-500" : "text-black"}`}>
                                <span class="flex-1 ml-3 whitespace-nowrap">Curiculum</span>
                            </Link>
                        </li>

                        <li>
                            <p
                                class="flex items-center font-bold p-2 text-black rounded-lg dark:text-white " data-target="dashboard">
                                <span class="ml-3">Course Management</span>
                            </p>
                        </li>

                        <li>
                            <Link onClick={() => handleMenuClick("CourseAvailablity")}
                                class={`flex items-center text-sm p-2 rounded-lg dark:text-white hover:text-purple-500 ${activeMenu === "CourseAvailablity" ? "text-purple-500" : "text-black"}`}>
                                <span class="flex-1 ml-3 whitespace-nowrap">Course Availablity</span>
                            </Link>
                        </li>

                        <li>
                            <Link onClick={() => handleMenuClick("Pricing")}
                                class={`flex items-center text-sm p-2 rounded-lg dark:text-white hover:text-purple-500 ${activeMenu === "Pricing" ? "text-purple-500" : "text-black"}`}>
                                <span class="flex-1 ml-3 whitespace-nowrap">Pricing</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>

            <div class="p-4 sm:ml-64" >
                <div class="p-4  rounded-lg dark:border-gray-700 mt-14">

                    <div className="w-3/4">

                        {(() => {
                            switch (activeMenu) {
                                case "CourseDescription":
                                    return <CourseDescription
                                        handleMenuClick={handleMenuClick}
                                        handleCourseDemoVideoChange={handleCourseDemoVideoChange}
                                    />;
                                case "CourseHeader":
                                    return <CourseHeader
                                        handleMenuClick={handleMenuClick}
                                        handleCourseCategoryChange={handleCourseCategoryChange}
                                        handleCourseTitleChange={handleCourseTitleChange}
                                        handleCourseLevelChange={handleCourseLevelChange}
                                        handleCourseLanguageChange={handleCourseLanguageChange}
                                        handleCourseImageChange={handleCourseImageChange}
                                    />;
                                case "CourseLanding":
                                    return <CourseLanding
                                        handleMenuClick={handleMenuClick}
                                        handleCourseDescriptionChange={handleCourseDescriptionChange}
                                    />;
                                case "Curiculum":
                                    return <Curiculum
                                        handleMenuClick={handleMenuClick}
                                        handleCourseSectionChange={handleCourseSectionChange}
                                    />;
                                case "CourseAvailablity":
                                    return <CourseAvail
                                        handleMenuClick={handleMenuClick}
                                        handleCourseStartDateChange={handleCourseStartDateChange}
                                        handleCourseEndDateChange={handleCourseEndDateChange}
                                        handleCourseEnrollDeadlineChange={handleCourseEnrollDeadlineChange}
                                    />;
                                case "Pricing":
                                    return <Pricing
                                        handleMenuClick={handleMenuClick}
                                        handleCourseCurrencyChange={handleCourseCurrencyChange}
                                        handleCoursePriceChange={handleCoursePriceChange}
                                    />;
                                default:
                                    return null;
                            }
                        })()}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateCourses
