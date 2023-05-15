import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../../assets/arrow-narrow-left.png'
import deleteIcon from '../../../assets/deleteIcon.png'
import EditIcon from '../../../assets/EditIcon.png'
import line from '../../../assets/line.png'
import NoteIcon from '../../../assets/lectureNotes.png'
import videos from '../../../assets/videos.png'
import assignment from '../../../assets/assignmentQuizz.png'
import live from '../../../assets/live.png'



const Curiculum = ({ handleMenuClick, handleCourseSectionChange }) => {


    const [showForm, setShowForm] = useState(false);
    const [sectionData,] = useState([]);
    const [courseTitle, setCourseTitle] = useState('');
    const [lecture, setLecture] = useState([]);
    const [, setLectureNotes] = useState('')
    const [lectureTitle, setLectureTitle] = useState('')
    // const [videoID, setVideoId] = useState('');
    // const [videoType, setVideoType] = useState('');
    const sectionCount = useRef(0);
    const [showAddLectureButton, setShowAddLectureButton] = useState(false);
    const [showSelectType, setShowSelectType] = useState(false);
    const [showAddLectureForm, setShowAddLectureForm] = useState(false);
    const [, setShowAddedLectureNotes] = useState(false)

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
            videos: [
                {
                    videoId: '',
                    videoTitle: '',
                    videoType: '',
                },
            ],
            assignment: '',
        };

        setCourseSectionData((prevData) => {
            const newData = [...prevData, newSection];
            const sectionCount = newData.length;

            // Empty lecture notes of the current section
            newData[sectionCount - 1].lecture = [];

            // Update each section in courseSectionData with the newSection data
            newData.forEach((section, index) => {
                handleCourseSectionChange(index, 'title', section.title);

                lecture.forEach((lecture, lectureIndex) => {
                    handleCourseSectionChange(index, `lecture`, lecture.lectureTitle);
                });
            });


            return newData;

        });

        setCourseTitle('');
        setShowForm(false);
        setShowAddLectureButton(true);
    };




    const lectureSaveButton = (sectionIndex) => {
        const newLecture = {
            lectureTitle,
            lectureNotes: '',
            sectionIndex, // Add sectionIndex to the lecture object
        };

        setLecture((prevList) => [...prevList, newLecture]);
        setLectureTitle('');
        setShowAddedLectureNotes(sectionIndex);
        setShowAddLectureForm(false);
        setShowAddLectureButton(true);
        setShowSelectType(false);
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


    const addLectureClickHandler = (event) => {
        event.preventDefault();
        setShowSelectType(true)
        setLectureNotes("")
    };


    const handleClickLecture = () => {
        setShowAddLectureForm(true)
        setShowSelectType(false)
        setShowAddLectureButton(false)
        setLectureTitle('');
        setLectureNotes('');

    }


    const handleVideosClick = () => {

    }


    const buttonClick = () => {
        handleMenuClick('Curriculum');
      
        if (courseSectionData.length > 0) {
          const firstSection = courseSectionData[0];
          handleCourseSectionChange('title', firstSection.title);
      
          if (lecture.length > 0) {
            lecture.forEach(lectureTitle => {
              handleCourseSectionChange('lecture', lectureTitle);
            });
          }
          
        }
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




                        <div className='p-8'>
                            {showAddLectureButton && (
                                <button
                                    className="flex items-center justify-center bg-slate-300 hover:opacity-50 shadow-md rounded-lg h-14 w-40 border-y-2 border-x-2"
                                    onClick={addLectureClickHandler}
                                >
                                    <p className="text-gray-600 text-xl font-medium">
                                        <span className="mr-3 mt-2 text-4xl">+</span> Add Lecture
                                    </p>

                                </button>

                            )}

                        </div>

                        {showSelectType && !showAddLectureForm && (

                            <div className="bg-gray-300 ml-auto mr-auto rounded-lg shadow-md mb-4 border-gray-300 h-14 flex justify-center items-center" style={{ width: '100%' }}>

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
                                        <img className="p-1" src={videos} alt="edit" />
                                    </div>
                                    <div className="flex flex-row p-1">
                                        <Link className="text-purple-500 hover:opacity-60 font-medium">Assignment</Link>
                                        <img className="p-1" src={assignment} alt="edit" />
                                    </div>
                                    <div className="flex flex-row p-1">
                                        <Link className="text-purple-500 hover:opacity-60 font-medium">Quizz</Link>
                                        <img className="p-1" src={assignment} alt="edit" />
                                    </div>
                                    <div className="flex flex-row p-1">
                                        <Link className="text-purple-500 hover:opacity-60 font-medium">Live</Link>
                                        <img className="p-1" src={live} alt="edit" />
                                    </div>
                                </div>
                            </div>

                        )}


                        {showAddLectureForm && (
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
                                        ref={lecturesaveButtonRef}
                                        onClick={() => lectureSaveButton(sectionIndex)}
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