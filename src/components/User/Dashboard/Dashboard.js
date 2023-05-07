import React, { } from 'react';
import dashArrow from '../../../assets/dashArrow.png'
import rupee from '../../../assets/rupee.png'
import courseDp from '../../../assets/instructorCourseCard.png'

const Dashboard = () => {



    return (
        <div className=' justify-center justify-items-center'>
            <div>
                <p className=' text-2xl text-black font-bold'>Dashboard</p>

                <div class="grid grid-cols-4 gap-3 mt-8" style={{ width: '130%' }}>
                    <div class="grid grid-cols-1 md:grid-cols-4 h-32 max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-gray-200 rounded-lg">
                        <div className='ml-4 md:ml-10 mt-5'>
                            <div className='flex flex-row'>
                                <p className='text-purple-500 text-4xl mt-2 ml-1 font-medium'>9</p>
                                <img className='ml-6 md:ml-20 w-10 h-10 mt-2' src={dashArrow} alt='' />
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-Black text-xs mt-5 font-bold'>Active</p>
                                <p className='text-Black text-xs ml-1 mt-5 font-bold'>Courses</p>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 h-32 max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-gray-200 rounded-lg">
                        <div className='ml-4 md:ml-10 mt-5'>
                            <div className='flex flex-row'>
                                <p className='text-purple-500 text-4xl mt-2 ml-1 font-medium'>3</p>
                                <img className='ml-6 md:ml-20 w-10 h-10 mt-2' src={dashArrow} alt='' />
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-Black text-xs mt-5 font-bold'>Drafts</p>
                                <p className='text-Black text-xs ml-1 mt-5 font-bold'></p>
                            </div>
                        </div>
                    </div>


                    <div class="grid grid-cols-1 md:grid-cols-4 h-32 max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-gray-200 rounded-lg">
                        <div className='ml-5 mt-5'>
                            <div className='flex flex-row'>
                                <p className='text-purple-500 text-4xl mt-2 font-medium'>4.1</p>
                                <p className='text-purple-500 mt-4 text-lg font-medium'>⭐⭐⭐⭐</p>
                                <img className='w-3 h-10 mt-2 md:ml-5' src={dashArrow} alt='' />
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-black text-xs mt-5 font-bold'>Average</p>
                                <p className='text-black text-xs ml-1 mt-5 font-bold'>Rating</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 h-32 max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-gray-200 rounded-lg">
                        <div className='ml-5 mt-5'>
                            <div className='flex flex-row'>
                                <img className='w-16 h-6 md:w-20 md:h-8 mt-3' src={rupee} alt='' />
                                <p className='text-purple-500 text-4xl mt-2 ml-1 font-medium'>15000</p>
                                <img className='w-3 h-10 mt-2 md:ml-5' src={dashArrow} alt='' />
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-black text-xs mt-5 font-bold'>Total</p>
                                <p className='text-black text-xs ml-1 mt-5 font-bold'>Earning</p>
                            </div>
                        </div>
                    </div>



                </div>
                <p className='font-bold text-black text-xl mt-10'>Top 5 courses</p>

                <div className='grid grid-cols-4 rounded-lg h-10 bg-purple-300 mt-4' style={{ width: '130%' }}>
                    <div className='py-2 ml-3 text-black text-sm font-medium' style={{ gridColumn: '1/2' }}>
                        Course Name
                    </div>
                    <div className='py-2 text-black text-sm font-medium' style={{ gridColumn: '2/3' }}>
                        Category
                    </div>
                    <div className='py-2  text-black text-sm font-medium' style={{ gridColumn: '3/4' }}>
                        Published Date
                    </div>
                    <div className='py-2  text-black text-sm font-medium' style={{ gridColumn: '4/5' }}>
                        Enrolled
                    </div>
                    <div className='py-2 mr-10 text-black text-sm font-medium' style={{ gridColumn: '5/6' }}>
                        Rating
                    </div>
                </div>


                <div className='grid grid-cols-4 rounded-lg h-32  mt-4' style={{ width: '130%' }}>
                    <div className='flex flex-row py-2 text-black text-sm font-medium' style={{ gridColumn: '1/2' }}>
                        <img className='w-20 h-20' src={courseDp} alt='' />
                        <div className='flex flex-col sm:p-3 ml-1 mt-2 md:p-0'>
                            <p className='text-black font-bold text-sm'>Competitive programming:</p>
                            <p className='text-black font-bold text-sm'>Ultimate guide</p>
                            <p className='text-black font-normal text-xs'>10 Lectures, 28 Hours</p>
                        </div>

                    </div>


                    <div className='py-2 mr-2 text-black text-sm font-medium' style={{ gridColumn: '2/3' }}>
                        Development
                    </div>
                    <div className='py-2 text-black text-sm font-medium' style={{ gridColumn: '3/4' }}>
                        13 May, 23
                    </div>
                    <div className='py-2 text-black text-sm font-medium' style={{ gridColumn: '4/5' }}>
                        12
                    </div>
                    <div className='py-2 mr-12 text-black text-sm font-medium' style={{ gridColumn: '5/6' }}>
                        4.5
                    </div>
                </div>



            </div>

        </div >
    )
}

export default Dashboard
