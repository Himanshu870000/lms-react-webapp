import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../../assets/arrow-narrow-left.png'


const Curiculum = ({ handleMenuClick }) => {

    const buttonClick = () => {
        handleMenuClick("CourseDescription")
    }

    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(true);
    };

    const handleClose = () => {
        setShowForm(false);
    };

    const [saveSectionName, setSaveSectionName] = useState(false);
    const inputRef = useRef(null);

    const saveClickHandler = (event) => {
        event.preventDefault();
        const sectionName = inputRef.current.value.trim();
        if (sectionName !== '') {
            setSaveSectionName(sectionName);
            inputRef.current.value = '';
        }
    };

    const cancelClickHandler = (event) => {
        event.preventDefault();
        inputRef.current.value = '';
    };

    const addLectureClickHandler = (event) => {
        event.preventDefault();
        // Do something when Add Lecture button is clicked
    };



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
                <p className='text-black text-2xl font-bold'>Course Curiculum</p>
            </div>

            <div className='mt-10'>
                <p className='text-black text-lg font-medium'>
                    Add course Content <span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className="flex flex-col mt-10">



                {showForm ? (
                    <div className="relative">
                        <button className="absolute" onClick={handleClose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mb-10 text-gray-500 hover:text-gray-700 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>



                        <form className="mt-5 border-solid">
                            <div className="border-y-2 bg-gray-400 mt-8 rounded-lg border-x-2 h-60" style={{ width: '130%' }}>
                                <div className="flex flex-row mt-10 ml-20">
                                    <p className="text-black text-lg font-medium">Section 1:</p>
                                    {saveSectionName && (
                                        <p className="text-black text-lg ml-5 font-medium">{saveSectionName}</p>
                                    )}

                                    
                                </div>
                                <div className="mt-5 ml-20">
                                    {!saveSectionName && (
                                        <input
                                            className="p-2.5 outline-none appearance-none text-black bg-white border rounded-md shadow-sm focus:border-gray-600"
                                            style={{ width: '90%' }}
                                            placeholder="Section Name"
                                            ref={inputRef}
                                        />
                                    )}
                                    {saveSectionName && (
                                        <button
                                            className="flex items-center justify-center hover:opacity-50 shadow-md rounded-lg h-14 w-40 border-y-2 border-x-2"
                                            onClick={addLectureClickHandler}
                                        >
                                            <p className="text-gray-700 text-xl font-medium">
                                                <span className="mr-3 mt-2 text-4xl">+</span> Add Lecture
                                            </p>
                                        </button>
                                    )}
                                </div>
                                {!saveSectionName && (
                                    <div className="flex justify-end m mt-5 mr-36" style={{ width: '' }}>
                                        <button
                                            onClick={cancelClickHandler}
                                            className="h-10 w-32 shadow-md mr-5 border-x-2 border-y-2 hover:opacity-50 rounded-md"
                                        >
                                            <p className="text-white text-base font-normal">Cancel</p>
                                        </button>
                                        <button
                                            onClick={saveClickHandler}
                                            className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                                        >
                                            <p className="text-white text-base font-normal">Save</p>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>




                    </div>
                ) : (
                    <button
                        className="flex items-center justify-center hover:opacity-50 shadow-md rounded-lg h-14 w-40 border-y-2 border-x-2"
                        onClick={handleClick}
                    >
                        <p className="text-gray-700 text-xl font-medium">
                            <span className="mr-3 mt-2 text-4xl">+</span>Section
                        </p>
                    </button>
                )}
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

export default Curiculum
