import React, { useState } from 'react';
import backArrow from '../../../assets/arrow-narrow-left.png'
import { Link, } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import imageIcon from '../../../assets/videoIcon.png'


const languages = [
    { code: 'hi', name: 'Hindi' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
    { code: 'ja', name: 'Japanese' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CourseHeader = ({ handleMenuClick }, props) => {

    const buttonClick = () => {
        handleMenuClick("CourseLanding");
    };
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [courseTitle, setCourseTitle] = useState('');


    function handleCategorySelect(category) {
        setSelectedCategory(category)
    }

    const [selectedLevel, setSelectedLevel] = useState(null)

    function handleLevelSelect(category) {
        setSelectedLevel(category)
    }


    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(false); // add isOpen state

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        // Do something with the selected language, e.g. update the UI language
        setIsOpen(false); // close the menu when a language is selected
    };


    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    
    console.log('courseTitle', courseTitle)
    console.log("selectedCategory---->", selectedCategory)
    console.log("selectedLevel---->", selectedLevel)
    console.log("selectedLanguage---->", selectedLanguage)
    console.log('Image---->', image)


    // console.log('props---->', props)

    return (

        <div className=' justify-center justify-items-center'>

            <div className='flex flex-row justify-between items-center mt-10' style={{ width: '130%' }}>
                <Link to='/HomePage' className='flex items-center'>
                    <img className='' src={backArrow} alt='' />
                    <p className='ml-3 text-lg font-medium text-black'>New Course</p>
                </Link>
                <div className='flex items-center'>
                    <button className='h-10 w-32 shadow-md border-y-2 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-black text-base font-normal'>Save As Draft</p>
                    </button>
                    <button className='h-10 w-32 shadow-md ml-1 bg-purple-500 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-white text-base font-normal'>Publish</p>
                    </button>
                </div>
            </div>

            <div className='mt-10'>
                <p className='text-black text-2xl font-bold'>Course Header</p>
            </div>

            <div className='mt-10'>
                <p className='text-black text-lg font-medium'>
                    Choose a category<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className='mt-5'>
                <Menu as="div" className="relative inline-block text-left " style={{ width: '130%' }}>
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {selectedCategory || "Select a category"}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleCategorySelect("Design")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Design
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleCategorySelect("IT & Software")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            IT & Software
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleCategorySelect("Development")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Development
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleCategorySelect("Marketing")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Marketing
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleCategorySelect("Business")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Business
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleCategorySelect("Photography")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Photography

                                        </p>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

            </div>


            <div className='mt-5'>
                <p className='text-black text-lg font-medium'>
                    Enter Your Course Title<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className='mt-5'>
                <input
                    className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                    style={{ width: '130%' }}
                    placeholder="Enter your course title here..."
                    value={courseTitle}
                    onChange={(event) => setCourseTitle(event.target.value)}
                ></input>
            </div>

            <div className='mt-5'>
                <p className='text-black text-lg font-medium'>
                    Select a Level<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className='mt-5'>
                <Menu as="div" className="relative inline-block text-left " style={{ width: '130%' }}>
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {selectedLevel || "Select a Level"}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleLevelSelect("Beginner")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Beginner
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleLevelSelect("Intermediate")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Intermediate
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={() => handleLevelSelect("Expert")}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Expert
                                        </p>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

            </div>

            <div className='mt-5'>
                <p className='text-black text-lg font-medium'>
                    Select Language<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className="relative inline-block text-left mt-5 border-y-2 border-x-2 rounded-lg" style={{ width: '130%' }}>
                <div>
                    <button
                        className="inline-flex justify-center items-center gap-x-1.5 w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        id="language-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span>{selectedLanguage.name}</span>
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </button>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                    <div
                        className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="language-menu"
                    >
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
                                role="menuitem"
                                onClick={() => handleLanguageSelect(language)}
                            >
                                {language.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className='mt-10'>
                <p className='text-black text-lg font-medium'>
                    Header Image<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className="grid grid-cols-3 h-80 gap-4 mt-5 border-y-2 border-x-2" style={{ width: '130%' }}>
                {/* Image placeholder */}
                <div className="col-span-2 flex justify-center items-center bg-gray-200">
                    {image ? (
                        <img src={image} alt="" />
                    ) : (
                        <img src={imageIcon} alt="" />

                    )}
                </div>
                {/* Choose Image button */}
                <div className="flex items-center justify-center">
                    <label htmlFor="upload-image">
                        <div className="py-2 px-4 text-white bg-slate-700 rounded-md cursor-pointer">
                            Browse Image
                        </div>
                    </label>
                    <input
                        id="upload-image"
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </div>
            </div>

            <div className="flex justify-end mt-16 mb-36" style={{ width: '130%' }}>
                <button
                    onClick={buttonClick}
                    className='h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md'>
                    <p className='text-white text-base font-normal'>Save & Next</p>
                </button>
            </div>

        </div>
    )
}

export default CourseHeader
