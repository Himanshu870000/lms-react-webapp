import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../../assets/arrow-narrow-left.png'
import videoIcon from '../../../assets/headerImagePlace.png'
// import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';

const CourseDescription = ({ handleMenuClick, handleCourseDemoVideoChange }) => {

    const [videoId, setVideoId] = useState(null);
    const youtubeInputRef = useRef();
    const vimeoInputRef = useRef();

    const opts = {
        height: '390',
        width: '640',
      };
      

    const handleOnReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const handleButtonClick = () => {
        const youtubeUrl = youtubeInputRef.current.value;
        const vimeoUrl = vimeoInputRef.current.value;

        // Match YouTube link
        const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#\&\?]*).*/;
        const youtubeMatch = youtubeUrl.match(youtubeRegex);
        if (youtubeMatch && youtubeMatch[2].length === 11) {
            setVideoId(youtubeMatch[2]);
            return;
        }

        // Match Vimeo link
        const vimeoRegex = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
        const vimeoMatch = vimeoUrl.match(vimeoRegex);
        if (vimeoMatch) {
            setVideoId(vimeoMatch[2]);
            return;
        }

        // If no match is found
        setVideoId(null);
    };

    const buttonClick = () => {

        handleMenuClick("Curiculum")
        handleCourseDemoVideoChange(videoId)

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
                <div className="mt-5 ml-3">
                    <p className="text-black text-lg font-medium">Add YouTube link</p>
                </div>
                <div className="mt-5">
                    <input
                        ref={youtubeInputRef}
                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                        style={{ width: '100%' }}
                        placeholder="https://www.youtube.com/watch?"
                    />
                </div>
                <p className="text-black font-bold text-2xl ml-5 mt-5">OR</p>
                <div className="mt-5 ml-3">
                    <p className="text-black text-lg font-medium">Add Vimeo link</p>
                </div>
                <div className="mt-5 mb-3">
                    <input
                        ref={vimeoInputRef}
                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                        style={{ width: '100%' }}
                        placeholder="https://vimeo.com/812393638"
                    />
                </div>
                <div className="flex justify-center items-center bg-gray-200">
                    {videoId ? (
                        <>
                            {youtubeInputRef.current.value && (
                                <YouTube videoId={videoId} opts={opts} onReady={handleOnReady} />
                            )}
                            {vimeoInputRef.current.value && <Vimeo video={videoId} autoplay />}
                        </>
                    ) : (
                        <img src={videoIcon} alt="" />
                    )}
                </div>

                <button
                    className='h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md'
                    onClick={handleButtonClick}>Submit</button>

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
