import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import backArrow from '../../../assets/arrow-narrow-left.png'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CourseAvail = () => {

    const [selectStartDate, setSelectStartDate] = useState(null);
    const [selectEndDate, setSelectEndDate] = useState(null);
    const [selectEnrollDeadline, setselectEnrollDeadline] = useState(null);

    const buttonClick  = () =>{
        
    } 

    return (
        <div>


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
                <p className='text-black text-2xl font-bold'>Course Availablity</p>
            </div>

            <div className='flex flex-row justify-between' style={{ width: '130%' }}>

                <div className='flex flex-col'>

                    <div className='mt-10'>
                        <p className='text-black text-lg font-medium'>
                            Select a starting date<span className='text-red-500 ml-1 text-xl'>*</span>
                        </p>
                    </div>

                    <div className='' style={{ width: '100%' }}>
                        <DatePicker
                            placeholderText='Select a date'
                            selected={selectStartDate}
                            onChange={date => setSelectStartDate(date)}
                            dateFormat='dd/MM/yyyy'
                            className='p-2.5 outline-none w-96 appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600'
                            style={{ width: '130%' }}
                        />
                    </div>

                </div>

                <div className='flex flex-col'>

                    <div className='mt-10'>
                        <p className='text-black text-lg font-medium'>
                            Select a End date<span className='text-red-500 ml-1 text-xl'>*</span>
                        </p>
                    </div>

                    <div>
                        <DatePicker
                            placeholderText='Select a date'
                            selected={selectEndDate}
                            onChange={date => setSelectEndDate(date)}
                            dateFormat='dd/MM/yyyy'
                            className='p-2.5 outline-none w-96 appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600'
                            style={{ width: '130%' }}
                        />
                    </div>

                </div>

            </div>



            <div className='flex flex-col' style={{ width: '130%' }}>

                <div className='mt-10'>
                    <p className='text-black text-lg font-medium'>
                        Select Enroll Deadline<span className='text-red-500 ml-1 text-xl'>*</span>
                    </p>
                </div>

                <div>
                    <DatePicker
                        placeholderText='Select a date'
                        selected={selectEnrollDeadline}
                        onChange={date => setselectEnrollDeadline(date)}
                        dateFormat='dd/MM/yyyy'
                        className='p-2.5 outline-none  w-full appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600'
                        style={{ width: '130%' }}
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

export default CourseAvail
