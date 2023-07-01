import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../../assets/arrow-narrow-left.png'
import deleteIcon from '../../../assets/deleteIcon.png'
import EditIcon from '../../../assets/EditIcon.png'
import line from '../../../assets/line.png'
import NoteIcon from '../../../assets/lectureNotes.png'
import videoIcon from '../../../assets/videos.png'
import assignmentIcon from '../../../assets/assignmentQuizz.png'
import live from '../../../assets/live.png'
import axios from 'axios';



const Curiculum = ({ handleMenuClick, handleCourseSectionChange }) => {


    const [showForm, setShowForm] = useState(false);
    const [sectionData,] = useState([]);
    const [courseTitle, setCourseTitle] = useState('');
    const [lecture, setLecture] = useState([]);
    const [, setLectureNotes] = useState('')
    const [lectureTitle, setLectureTitle] = useState('')
    const [videoTitle, setVideoTitle] = useState('');
    const sectionCount = useRef(0);
    const [showAddLectureButton, setShowAddLectureButton] = useState(false);
    const [showSelectType, setShowSelectType] = useState(false);
    const [showAddLectureForm, setShowAddLectureForm] = useState(false);
    const [showAddVideosForm, setShowAddVideosForm] = useState(false);
    const [, setShowAddedLectureNotes] = useState(false)
    // const [, setShowAddedVideos] = useState(false)
    const [showAddAssignmentForm, setShowAssignmentForm] = useState(false)
    const [assignmentTitle, setAssignmentTitle] = useState('')
    const [assignment, setAssignment] = useState([])

    const handleClick = () => {
        sectionCount.current++;
        setShowForm(true);
        setCourseTitle('');

        setCourseTitle(sectionData[sectionData.length + 1] || '');

    };

    const cancelClickHandler = () => {
        setShowForm(false);
        setCourseTitle('');
    };





    const [courseSectionData, setCourseSectionData] = useState([])

    const SectionsaveClickHandler = () => {
        const newSection = {
            title: courseTitle,
            description: '',
            lecture: lecture,
            videos: videos,
            assignment: assignment,
        };

        setCourseSectionData((prevData) => {
            const newData = [...prevData, newSection];
            const sectionCount = newData.length;

            // Empty lecture notes of the current section
            newData[sectionCount - 1].lecture = [];

            // Update each section in courseSectionData with the newSection dat
            return newData;

        });

        setCourseTitle('');
        setShowForm(false);
        setShowAddLectureButton(true);
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const lectureSaveButton = async (sectionIndex) => {
        if (lectureTitle.trim() === '' || !selectedFile) {
            // Handle error: Empty field(s)
            console.log('Error: Empty field(s)');
            return;
        }

        try {
            // Create FormData object and append the selected file
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Upload the selected file using Axios
            const response = await axios.post('https://lmswebapp.onrender.com/api/uploadPdf', formData);

            // Extract the pre-signed URL from the response data
            const url = response.data;

            // Perform additional save logic
            const newLecture = {
                lectureTitle,
                lectureNotes: '',
                sectionIndex,
                url, // Add the URL to the lecture object
            };

            setLecture((prevList) => [...prevList, newLecture]);

            // Reset fields and close the form
            setLectureTitle('');
            setSelectedFile(null);
            setShowAddedLectureNotes(sectionIndex);
            setShowAddLectureForm(false);
            setShowAddLectureButton(true);
            setShowSelectType(false);
        } catch (error) {
            // Handle error: File upload failed
            console.log('Error uploading file:', error);
        }
    };




    const saveButtonRef = useRef(null);
    const lecturesaveButtonRef = useRef(null);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                saveButtonRef.current.click();
                lecturesaveButtonRef.current.click();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const [currentSectionIndex, setCurrentSectionIndex] = useState(null);

    const addLectureClickHandler = (sectionIndex) => {
        setShowSelectType(true)
        setCurrentSectionIndex(sectionIndex)
        setLectureNotes("")
    };


    const handleClickLecture = () => {
        setShowAddLectureForm(true)
        setShowSelectType(false)
        setShowAddLectureButton(false)
        setLectureTitle('');
        setLectureNotes('');

    }



    const [videos, setVideos] = useState([]);
    const [youtubeLink, setYoutubeLink] = useState('')
    const [vimeoLink, setVimeoLink] = useState('')


    const handleVideosClick = () => {
        setShowAddVideosForm(true)
        setShowSelectType(false)
        setShowAddLectureButton(false)
    }


    const extractYouTubeVideoId = (url) => {
        const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#\&\?]*).*/;
        const youtubeMatch = url.match(youtubeRegex);
        if (youtubeMatch && youtubeMatch[2].length === 11) {
            return youtubeMatch[2];
        }
        return null;
    };

    const extractVimeoVideoId = (url) => {
        const vimeoRegex = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
        const vimeoMatch = url.match(vimeoRegex);
        if (vimeoMatch) {
            return vimeoMatch[2];
        }
        return null;
    };

    const videosSaveButton = (sectionIndex) => {
        const videoId = extractYouTubeVideoId(youtubeLink) || extractVimeoVideoId(vimeoLink);

        if (videoId) {
            const newVideo = {
                videoId: videoId,
                videoTitle: videoTitle,
                videoType: youtubeLink ? 'youtube' : 'vimeo',
                sectionIndex: sectionIndex,
            };
            setVideos(prevVideos => [...prevVideos, newVideo]);
        }

        setVideoTitle('');
        setYoutubeLink('');
        setVimeoLink('');
        setShowAddVideosForm(false);
        setShowAddLectureButton(true);
        setShowSelectType(false);
    };


    console.log('videos----------->', videos)


    const handleAssignmentClick = () => {

        setShowAssignmentForm(true)
        setShowSelectType(false)
        setShowAddLectureButton(false)

    }

    const AssignmentSaveButton = (sectionIndex) => {

        const newAssignment = {
            assignmentTitle,
            assignmentPdf: '',
            sectionIndex, // Add sectionIndex to the lecture object
        };

        setAssignment((prevList) => [...prevList, newAssignment]);
        setAssignmentTitle('');
        setShowAssignmentForm(false);
        setShowAddLectureButton(true);
        setShowSelectType(false);
    }

    const buttonClick = () => {
        console.log("courseSectionData---->", courseSectionData);
        console.log('lecture----->', lecture);


        courseSectionData.map((section, index) => {
            section.lecture = lecture.filter(e => e.sectionIndex === index);
            section.videos = videos.filter(e => e.sectionIndex === index);
            section.assignment = assignment.filter(e => e.sectionIndex === index);

            return courseSectionData;
        })

        console.log("courseSectionData_Updated---->", courseSectionData);

        handleCourseSectionChange(courseSectionData);
        // if (courseSectionData.length > 0) {
        //     const firstSection = courseSectionData[0];

        //     if (lecture.length > 0) {
        //         lecture.forEach(lectureTitle => {
        //             handleCourseSectionChange('lecture', lectureTitle);
        //         });
        //     }

        // }
        handleMenuClick('CourseAvailablity');
    };

    console.log('title---->', courseSectionData[0]);
    console.log('lectureTitle--->', lecture);


    return (
        <div className=' justify-center justify-items-center'>

            <div className='flex flex-row justify-between items-center mt-10' style={{ width: '130%' }}>
                <Link to='/HomePage' className='flex items-center'>
                    <img className='' src={backArrow} alt='' />
                    <p className='ml-3 text-lg font-medium text-black'>New Course</p>
                </Link>
                <div className='flex items-center'>
                    {/* <button className='h-10 w-32 shadow-md border-y-2 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-black text-base font-normal'>Save As Draft</p>
                    </button> */}
                    {/* <button className='h-10 w-32 shadow-md ml-1 bg-purple-500 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-white text-base font-normal'>Publish</p>
                    </button> */}
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


            <div className="flex flex-col h-full mt-10">
                {courseSectionData.map((section, sectionIndex) => (
                    <div className="h-full rounded-lg mb-10 p-2 bg-slate-300" style={{ width: '130%' }} key={`section${sectionIndex}`}>
                        <div className="mt-5 flex flex-row">
                            <p className="text-black text-lg font-medium ml-10">{`Section ${sectionIndex + 1}:`}</p>
                            <p className="text-black text-lg font-medium ml-10">{section.title}</p>
                            <div className="flex flex-row ml-auto self-end">
                                <button className="">
                                    <img className="mr-5" src={EditIcon} alt="" />
                                </button>
                                <button className="mr-5">
                                    <img className="" src={deleteIcon} alt="" />
                                </button>
                            </div>
                        </div>

                        {lecture
                            .filter((lecture) => lecture.sectionIndex === sectionIndex) // Filter by sectionIndex
                            .map((lecture, lectureIndex) => (
                                <div className="flex flex-row h-12 ml-10 mt-5 py-3 rounded-lg bg-white" style={{ width: '85%' }} key={`Lecture${lectureIndex}`}>
                                    <p className="ml-10 text-black font-medium">{`Lecture ${lectureIndex + 1}: `}</p>
                                    <img className="p-1 ml-5" src={NoteIcon} alt="" />
                                    <Link className="font-medium hover:opacity-50 text-purple-500 underline">{lecture.lectureTitle}</Link>
                                    <div className="flex flex-row ml-auto self-end">
                                        <button className="">
                                            <img className="mr-5" src={EditIcon} alt="" />
                                        </button>
                                        <button className="mr-5">
                                            <img className="" src={deleteIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }

                        {videos
                            .filter((video) => video.sectionIndex === sectionIndex)
                            .map((video, videoIndex) => (
                                <div className="flex flex-row h-12 ml-10 mt-5 py-3 rounded-lg bg-white" style={{ width: '85%' }} key={`Videos${videoIndex}`}>
                                    <p className="ml-10 text-black font-medium">{`Videos ${videoIndex + 1}: `}</p>
                                    <img className="p-1 ml-5" src={videoIcon} alt="" />
                                    <Link className="font-medium hover:opacity-50 text-purple-500 underline">{video.videoTitle}</Link>
                                    <div className="flex flex-row ml-auto self-end">
                                        <button className="">
                                            <img className="mr-5" src={EditIcon} alt="" />
                                        </button>
                                        <button className="mr-5">
                                            <img className="" src={deleteIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            ))}

                        {assignment
                            .filter((assignment) => assignment.sectionIndex === sectionIndex) // Filter by sectionIndex
                            .map((assignment, assignmentIndex) => (
                                <div className="flex flex-row h-12 ml-10 mt-5 py-3 rounded-lg bg-white" style={{ width: '85%' }} key={`Assignment${assignmentIndex}`}>
                                    <p className="ml-10 text-black font-medium">{`Assignment ${assignmentIndex + 1}: `}</p>
                                    <img className="p-1 ml-5" src={assignmentIcon} alt="" />
                                    <Link className="font-medium hover:opacity-50 text-purple-500 underline">{assignment.assignmentTitle}</Link>
                                    <div className="flex flex-row ml-auto self-end">
                                        <button className="">
                                            <img className="mr-5" src={EditIcon} alt="" />
                                        </button>
                                        <button className="mr-5">
                                            <img className="" src={deleteIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }


                        {showAddLectureButton && (
                            <button
                                className="flex mt-5 ml-10 items-center justify-center bg-slate-300 hover:opacity-50 shadow-md rounded-lg h-14 w-40 border-y-2 border-x-2"
                                onClick={() => addLectureClickHandler(sectionIndex)}
                            >
                                <p className="text-gray-600 text-xl font-medium">
                                    <span className="mr-3 mt-2 text-4xl">+</span> Add Lecture
                                </p>
                            </button>
                        )}


                        {showSelectType && currentSectionIndex === sectionIndex && !showAddLectureForm && (

                            <div className="bg-gray-300 mt-5 ml-auto mr-auto rounded-lg shadow-md mb-4 border-gray-300 h-14 flex justify-center items-center" style={{ width: '100%' }}>

                                <div className="h-14 flex justify-center items-center" style={{ width: '150px' }}>
                                    <p className="text-black font-medium mr-3">Select type</p>
                                    <img className="" src={line} alt="edit" />
                                </div>

                                <div className="flex flex-row justify-evenly items-center" style={{ width: 'calc(100% - 150px)' }}>
                                    <div className="flex flex-row p-1">
                                        <Link onClick={handleClickLecture} className="text-purple-500 hover:opacity-60 font-medium">Lecture</Link>
                                        <img className="p-1" src={NoteIcon} alt="" />
                                    </div>
                                    <div className="flex flex-row p-1">
                                        <Link onClick={handleVideosClick} className="text-purple-500 hover:opacity-60 font-medium">Videos</Link>
                                        <img className="p-1" src={videoIcon} alt="" />
                                    </div>
                                    <div className="flex flex-row p-1">
                                        <Link onClick={handleAssignmentClick} className="text-purple-500 hover:opacity-60 font-medium">Assignment</Link>
                                        <img className="p-1" src={assignmentIcon} alt="" />
                                    </div>
                                    <div className="flex flex-row p-1">
                                        <Link className="text-purple-500 hover:opacity-60 font-medium">Quizz</Link>
                                        <img className="p-1" src={assignment} alt="" />
                                    </div>
                                    <div className="flex flex-row p-1">
                                        <Link className="text-purple-500 hover:opacity-60 font-medium">Live</Link>
                                        <img className="p-1" src={live} alt="" />
                                    </div>
                                </div>
                            </div>

                        )}



                        {showAddLectureForm && currentSectionIndex === sectionIndex && (
                            <div className="bg-gray-300 rounded-b-lg justify-center items-center h-96" style={{ width: '100%' }}>
                                <div className="pt-5 ml-10">
                                    <p className="text-black mt-10 text-lg font-medium">
                                        Lecture Title<span className="text-red-500 ml-1 text-xl">*</span>
                                    </p>
                                </div>

                                <div className="mt-5 ml-10">
                                    <input
                                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                        style={{ width: '90%' }}
                                        placeholder="Type your text here"
                                        value={lectureTitle}
                                        onChange={(e) => setLectureTitle(e.target.value)}
                                    />
                                </div>

                                <div className="ml-10">
                                    <p className="text-black mt-10 text-lg font-medium">
                                        Upload PDF <span className="text-red-500 ml-1 text-xl">*</span>
                                    </p>
                                </div>

                                <div className="flex items-center mt-5 ml-10 justify-center" style={{ width: '130%' }}>
                                    <div className="" style={{ width: '72%' }}>
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            className="w-full px-4 py-2 rounded-md bg-white border-gray-400 border"
                                            placeholder="Browse PDF..."
                                            onChange={(e) => setSelectedFile(e.target.files[0])}
                                        />
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <button onClick={() => lectureSaveButton(sectionIndex)} className="bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded-md">
                                            Upload
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end p-10">
                                    <button onClick={cancelClickHandler} className="h-10 w-32 shadow-md mr-5 border-x-2 border-y-2 hover:opacity-50 rounded-md">
                                        <p className="text-gray-600 text-base font-normal">Cancel</p>
                                    </button>
                                    <button ref={lecturesaveButtonRef} onClick={() => lectureSaveButton(sectionIndex)} className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md">
                                        <p className="text-white text-base font-normal">Save</p>
                                    </button>
                                </div>
                            </div>
                        )}


                        {showAddVideosForm && currentSectionIndex === sectionIndex && (
                            <div className="bg-gray-300 rounded-b-lg justify-center items-center h-full" style={{ width: '100%' }}>
                                <div className="pt-5 ml-10">
                                    <p className="text-black mt-10 text-lg font-medium">
                                        videoTitle Title<span className="text-red-500 ml-1 text-xl">*</span>
                                    </p>
                                </div>

                                <div className="mt-5 ml-10">
                                    <input
                                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                        style={{ width: '90%' }}
                                        placeholder="Type your text here"
                                        value={videoTitle}
                                        onChange={(e) => setVideoTitle(e.target.value)}
                                    />
                                </div>

                                <div className="mt-5 ml-10">
                                    <p className="text-black text-lg font-medium">Add YouTube link</p>
                                </div>
                                <div className="mt-5 ml-10">
                                    <input
                                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                        style={{ width: '90%' }}
                                        placeholder="https://www.youtube.com/watch?.........."
                                        value={youtubeLink}
                                        onChange={(e) => setYoutubeLink(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-black font-bold text-2xl ml-5 mt-5">OR</p>
                                </div>
                                <div className=" ml-10">
                                    <p className="text-black text-lg font-medium">Add Vimeo link</p>
                                </div>
                                <div className="mt-5 mb-3 ml-10">
                                    <input
                                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                        style={{ width: '90%' }}
                                        placeholder="https://vimeo.com/........"
                                        value={vimeoLink}
                                        onChange={(e) => setVimeoLink(e.target.value)}
                                    />
                                </div>

                                <div className="flex justify-end p-10">
                                    <button
                                        onClick={cancelClickHandler}
                                        className="h-10 w-32 shadow-md mr-5 border-x-2 border-y-2 hover:opacity-50 rounded-md"
                                    >
                                        <p className="text-gray-600 text-base font-normal">Cancel</p>
                                    </button>
                                    <button
                                        onClick={() => videosSaveButton(sectionIndex)}
                                        className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                                    >
                                        <p className="text-white text-base font-normal">Save</p>
                                    </button>
                                </div>
                            </div>

                        )}

                        {showAddAssignmentForm && currentSectionIndex === sectionIndex && (
                            <div className="bg-gray-300 rounded-b-lg justify-center items-center h-96" style={{ width: '100%' }}>
                                <div className="pt-5 ml-10">
                                    <p className="text-black mt-10 text-lg font-medium">
                                        Assignmnet Title<span className="text-red-500 ml-1 text-xl">*</span>
                                    </p>
                                </div>

                                <div className="mt-5 ml-10">
                                    <input
                                        className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                        style={{ width: '90%' }}
                                        placeholder="Type your text here"
                                        value={assignmentTitle}
                                        onChange={(e) => setAssignmentTitle(e.target.value)}
                                    />
                                </div>

                                <div className=' ml-10'>
                                    <p className='text-black mt-10 text-lg font-medium'>
                                        Upload PDF <span className='text-red-500 ml-1 text-xl'>*</span>
                                    </p>
                                </div>

                                <div class="flex items-center mt-5 ml-10 justify-center" style={{ width: '130%' }}>
                                    <div class="" style={{ width: '72%' }}>
                                        <input type="file" accept=".pdf" class="w-full px-4 py-2 rounded-md bg-white border-gray-400 border" placeholder="Browse PDF..." />

                                    </div>
                                    <div class="w-1/2 pl-2">
                                        <button class="bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded-md">
                                            Upload
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end p-10">
                                    <button
                                        onClick={cancelClickHandler}
                                        className="h-10 w-32 shadow-md mr-5 border-x-2 border-y-2 hover:opacity-50 rounded-md"
                                    >
                                        <p className="text-gray-600 text-base font-normal">Cancel</p>
                                    </button>
                                    <button
                                        onClick={() => AssignmentSaveButton(sectionIndex)}
                                        className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                                    >
                                        <p className="text-white text-base font-normal">Save</p>
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>

                ))}



                {showForm ? (
                    <div className="h-full rounded-lg bg-slate-300" style={{ width: '130%' }}>
                        <div className="mt-5 flex flex-row">
                            <p className="text-black text-lg font-medium ml-10">{`Section ${sectionCount.current}:`}</p>
                        </div>
                        <div className="mt-5">
                            <input
                                className="p-2.5 ml-10 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                style={{ width: '90%' }}
                                placeholder="Enter your section Name..."
                                value={courseTitle}
                                onChange={(event) => setCourseTitle(event.target.value)}
                            ></input>
                        </div>
                        <div className="flex justify-end p-10">
                            <button
                                onClick={cancelClickHandler}
                                className="h-10 w-32 shadow-md mr-5 border-x-2 border-y-2 hover:opacity-50 rounded-md"
                            >
                                <p className="text-gray-600 text-base font-normal">Cancel</p>
                            </button>
                            <button
                                ref={saveButtonRef}
                                onClick={SectionsaveClickHandler}
                                className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                            >
                                <p className="text-white text-base font-normal">Save</p>
                            </button>
                        </div>
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
            {/* {
                saveSectionName && (
                    <div className=' mt-10'>
                        <button
                            className="flex items-center justify-center hover:opacity-50 shadow-md rounded-lg h-14 w-40 border-y-2 border-x-2"
                            onClick={handleClick}
                        >
                            <p className="text-gray-700 text-xl font-medium">
                                <span className="mr-3 mt-2 text-4xl">+</span>Section
                            </p>
                        </button>
                    </div>

                )
            } */}


            <div div className="flex justify-end mt-20 mb-36" style={{ width: '130%' }}>
                <button
                    onClick={buttonClick}
                    className='h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md'>
                    <p className='text-white text-base font-normal'>Save & Next</p>
                </button>
            </div>


        </div >

    )
}

export default Curiculum