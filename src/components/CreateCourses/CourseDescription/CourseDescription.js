import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../../assets/arrow-narrow-left.png'
import videoIcon from '../../../assets/headerImagePlace.png'
// import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';

const CourseDescription = ({ handleMenuClick }) => {


    const [videoId, ] = useState('dQw4w9WgXcQ');

    const opts = {
        height: '390',
        width: '640',
    };

    function handleOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const buttonClick = () => {

        handleMenuClick("Curiculum")

    }

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
                <p className='text-black text-3xl font-bold'>Demo Video</p>
            </div>

            <div className='mt-10'>
                <p className='text-black text-lg font-medium'>
                    Upload a demo video<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className="max-h-full gap-4 mt-5 border-y-2 border-x-2" style={{ width: '130%' }}>

                <div className='mt-5 ml-3'>
                    <p className='text-black text-lg font-medium'>
                        Add youtube link
                    </p>
                </div>

                <div className='mt-5'>
                    <input
                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                        style={{ width: '100%' }}
                        placeholder="https://www.youtube.com/watch?"
                    // maxLength={100}
                    // rows={5}
                    ></input>
                </div>

                <p className='text-black font-bold text-2xl ml-5 mt-5'>OR</p>

                <div className='mt-5 ml-3'>
                    <p className='text-black text-lg font-medium'>
                        Add vimeo link
                    </p>
                </div>

                <div className='mt-5 mb-3'>
                    <input
                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                        style={{ width: '100%' }}
                        placeholder="https://vimeo.com/812393638"
                    // maxLength={100}
                    // rows={5}
                    ></input>
                </div>


                {/* Video player */}
                <div className=" flex justify-center items-center bg-gray-200">
                    {videoId ? (
                        <div>
                            <YouTube videoId={videoId} opts={opts} onReady={handleOnReady} />
                            <Vimeo
                                video="x2to0hs"
                                autoplay
                            />
                        </div>


                    ) : (
                        <img src={videoIcon} alt="" />
                    )}
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

export default CourseDescription
