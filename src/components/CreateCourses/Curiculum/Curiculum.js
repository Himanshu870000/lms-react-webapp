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


    // console.log('handleCourseSectionChange--->',handleCourseSectionChange)

    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(true);
    };

    const handleClose = () => {
        setShowForm(false);
    };

    // const [showForm1, setShowForm1] = useState(false);

    const handleClick1 = () => {
        // setShowForm1(true);
    };

    // const handleClose1 = () => {
    //     setShowForm1(false);
    // };



    const [formHeight, setFormHeight] = useState(96);

    const [saveSectionName, setSaveSectionName] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [selectType, setSelectType] = useState(false);
    const [clickLecture, setClickLecture] = useState(false)
    const [saveNote, setSaveNote] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const [note, setNote] = useState("");
    const saveNoteButtonRef = useRef(null);
    const saveVideoButtonRef = useRef(null);
    const [clickVideos, setClickVideos] = useState(false);
    const [saveVideo, setSaveVideo] = useState(false);


    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('pdfFile', selectedFile);

        // You can make a POST request to upload the PDF file
        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                // Handle the response
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const handleClickLecture = () => {
        setClickLecture(true)
        setFormHeight(formHeight + 36);
        setSaveNote(false)

    }



    const inputRef = useRef(null);

    const saveClickHandler = (event) => {
        event.preventDefault();
        const sectionName = inputRef.current.value.trim();
        if (sectionName !== '') {
            setSaveSectionName(sectionName);
            inputRef.current.value = '';
        }

        setIsEditingName(false);

    };

    const saveButtonRef = useRef(null);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                saveButtonRef.current.click();
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []); // run the effect only once, on mount


    const cancelClickHandler = (event) => {
        event.preventDefault();
        inputRef.current.value = '';
        setIsEditingName(false);

    };

    const handleVideosClick = () => {

        setClickVideos(true)
        setFormHeight(formHeight + 36);
        setSaveVideo(false)

    }

    const addLectureClickHandler = (event) => {
        event.preventDefault();
        setSelectType(true);
        // Do something when Add Lecture button is clicked
    };

    const [lectureNotes, setLectureNotes] = useState([]);
    const [video, setVideo] = useState("")

    const [videosTitle, setVideosTitle] = useState([]);

    const handleSaveVideoClick = () => {

        setSelectType(false);
        setSaveVideo(true);
        setClickVideos(false);

        const newVideo = {
            title: video,
            // pdf: uploadedFile,
        };
        setVideosTitle([...videosTitle, newVideo]);
        setClickVideos(false);
        setVideo("");

    }


    const [youtubeInput, setYoutubeInput] = useState('');
    const [vimeoInput, setVimeoInput] = useState('');
    const [videoIds, setVideoIds] = useState([]);

    const handleYoutubeInputChange = (event) => {
        setYoutubeInput(event.target.value);
    };

    const handleVimeoInputChange = (event) => {
        setVimeoInput(event.target.value);
    };

    const handleVideoLinkChange = (event) => {
        event.preventDefault();
        const inputVal = event.target.value;
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/;
        const vimeoRegex = /https?:\/\/(?:www\.)?vimeo\.com\/(\d+)/;
        let videoId = '';

        if (inputVal.match(youtubeRegex)) {
            videoId = inputVal.match(youtubeRegex)[1];
        } else if (inputVal.match(vimeoRegex)) {
            videoId = inputVal.match(vimeoRegex)[1];
        }

        if (videoId) {
            setVideoIds((prevVideoIds) => [...prevVideoIds, videoId]);
        }
    };

    console.log('videoId--->', videoIds[0])


    const handleNoteClick = () => {
        setSelectType(false);
        setSaveNote(true);
        setClickLecture(false);

        const newNote = {
            title: note,
            // pdf: uploadedFile,
        };
        setLectureNotes([...lectureNotes, newNote]);
        setClickLecture(false);
        setNote("");
        //   setUploadedFile(null);

    }


    const handleEditClick = (event) => {
        event.preventDefault();
        setIsEditingName(true);
    };

    const handleDeleteClick = () => {
        // Do something when Delete button is clicked
    };

    // function handleNameChange(event) {
    //     setSaveSectionName(event.target.value);
    // }

    const buttonClick = () => {
        handleMenuClick("CourseDescription")
        handleCourseSectionChange()

    }

    console.log('saveSectionName------>', saveSectionName)



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
                    <div className="relative h-full">
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
                            <div className={`border-y-2 bg-gray-200 mt-8 rounded-lg border-x-2 h-${formHeight}`} style={{ width: '130%' }}>
                                <div className="flex flex-row mt-10 ml-20">
                                    <p className="text-black text-lg font-medium">Section 1:</p>
                                    {saveSectionName && (
                                        <div className='flex flex-row justify-between'>
                                            {/* {isEditingName ? (
                                                <input
                                                    className="p-2.5 outline-none appearance-none text-black bg-white border rounded-md shadow-sm focus:border-gray-600"
                                                    style={{ width: '90%' }}
                                                    value={saveSectionName}
                                                    onChange={handleNameChange}
                                                />
                                            ) : ( */}
                                            <p className="flex text-slate-400 text-lg ml-5 font-medium">{saveSectionName}</p>
                                            {/* )} */}

                                            <div className=' absolute top-15 right-1'>
                                                <button className="flex-1 ml-96 justify-end" onClick={handleEditClick}>
                                                    <img className="" src={EditIcon} alt="edit" />
                                                </button>
                                                <button className="flex-1 justify-end ml-5" onClick={handleDeleteClick}>
                                                    <img className="" src={deleteIcon} alt="delete" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {saveNote && (
                                    <div className="justify-center sel items-center" style={{ width: "80%" }}>

                                        {lectureNotes.map((note, index) => (

                                            <div key={index}
                                                className="flex flex-row h-12  ml-10 mt-5 py-3 rounded-lg bg-white " style={{ width: "100%" }}>
                                                <p className=" ml-10 text-black font-medium">Lecture 1: </p>
                                                <img className="p-1 ml-5" src={NoteIcon} alt="" />
                                                <Link className=" font-medium hover:opacity-50 text-purple-500 underline">{note.title}</Link>
                                                <div className=' absolute top-15 right-1'>
                                                    <button className="flex-1 justify-end" onClick={handleEditClick}>
                                                        <img className="" src={EditIcon} alt="edit" />
                                                    </button>
                                                    <button className="flex-1 justify-end ml-5" onClick={handleDeleteClick}>
                                                        <img className="" src={deleteIcon} alt="delete" />
                                                    </button>
                                                </div>

                                            </div>
                                        ))}

                                    </div>
                                )}


                                {saveVideo && (
                                    <div className="justify-center sel items-center" style={{ width: "80%" }}>

                                        {videosTitle.map((video, index) => (

                                            <div key={index}
                                                className="flex flex-row h-12  ml-10 mt-5 py-3 rounded-lg bg-white " style={{ width: "100%" }}>
                                                <p className=" ml-10 text-black font-medium">Lecture 2: </p>
                                                <img className="p-1 ml-5" src={videos} alt="" />
                                                <Link className=" font-medium hover:opacity-50 text-purple-500 underline">{video.title}</Link>
                                                <div className=' absolute top-15 right-1'>
                                                    <button className="flex-1 justify-end" onClick={handleEditClick}>
                                                        <img className="" src={EditIcon} alt="edit" />
                                                    </button>
                                                    <button className="flex-1 justify-end ml-5" onClick={handleDeleteClick}>
                                                        <img className="" src={deleteIcon} alt="delete" />
                                                    </button>
                                                </div>

                                            </div>
                                        ))}

                                    </div>
                                )}

                                <div className="mt-5 ml-20">
                                    {!saveSectionName && !isEditingName && (
                                        <input
                                            className="p-2.5 outline-none appearance-none text-black bg-white border rounded-md shadow-sm focus:border-gray-600"
                                            style={{ width: '90%' }}
                                            placeholder="Section Name"
                                            ref={inputRef}
                                        />
                                    )}


                                    {(saveSectionName || saveNote || saveVideo) && !clickLecture && !clickVideos && (
                                        <button
                                            className="flex items-center justify-center mb-24 bg-slate-300 hover:opacity-50 shadow-md rounded-lg h-14 w-40 border-y-2 border-x-2"
                                            onClick={addLectureClickHandler}
                                        >
                                            <p className="text-gray-600 text-xl font-medium">
                                                <span className="mr-3 mt-2 text-4xl">+</span> Add Lecture
                                            </p>
                                        </button>
                                    )}


                                </div>

                                {selectType && !clickLecture && !clickVideos && (
                                    <div className=' bg-gray-300 absolute flex-row bottom-5 rounded-lg left-10 border-gray-300 h-14 flex justify-center items-center' style={{ width: '120%' }}>


                                        <div className=' h-14 flex justify-center items-center' style={{ width: '150px' }}>
                                            <p className='text-black font-medium mr-3'>Select type</p>
                                            <img className="" src={line} alt="edit" />
                                        </div>

                                        <div className='flex flex-row justify-evenly items-center' style={{ width: 'calc(100% - 150px)' }}>
                                            <div className='flex flex-row p-1'>
                                                <Link onClick={handleClickLecture} className='text-purple-500 hover:opacity-60 font-medium'>Lecture</Link>
                                                <img className="p-1" src={NoteIcon} alt="" />
                                            </div>
                                            <div
                                                className='flex flex-row p-1'>
                                                <Link onClick={handleVideosClick}
                                                    className='text-purple-500 hover:opacity-60 font-medium'>Videos</Link>
                                                <img className="p-1" src={videos} alt="edit" />
                                            </div>
                                            <div className='flex flex-row p-1'>
                                                <Link className='text-purple-500 hover:opacity-60 font-medium'>Assignment</Link>
                                                <img className="p-1" src={assignment} alt="edit" />
                                            </div>
                                            <div className='flex flex-row p-1'>
                                                <Link className='text-purple-500 hover:opacity-60 font-medium'>Quizz</Link>
                                                <img className="p-1" src={assignment} alt="edit" />
                                            </div>
                                            <div className='flex flex-row p-1'>
                                                <Link className='text-purple-500 hover:opacity-60 font-medium'>Live</Link>
                                                <img className="p-1" src={live} alt="edit" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {clickLecture && !saveNote && (

                                    <div className=' bg-gray-300 rounded-b-lg  justify-center items-center h-96' style={{ width: '100%' }}>

                                        <div className=' pt-5 ml-10'>
                                            <p className='text-black mt-10 text-lg font-medium'>
                                                Lecture Title<span className='text-red-500 ml-1 text-xl'>*</span>
                                            </p>
                                        </div>

                                        <div className='mt-5 ml-10'>
                                            <input
                                                className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                                style={{ width: "90%" }}
                                                placeholder="Type your text here"
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                            ></input>
                                        </div>

                                        <div className=' ml-10'>
                                            <p className='text-black mt-10 text-lg font-medium'>
                                                Upload PDF <span className='text-red-500 ml-1 text-xl'>*</span>
                                            </p>
                                        </div>

                                        <div class="flex items-center mt-5 ml-10 justify-center" style={{ width: '130%' }}>
                                            <div class="" style={{ width: '72%' }}>
                                                <input type="file" accept=".pdf" onChange={handleFileInputChange} class="w-full px-4 py-2 rounded-md bg-white border-gray-400 border" placeholder="Browse PDF..." />

                                            </div>
                                            <div class="w-1/2 pl-2">
                                                <button onClick={handleUpload} class="bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded-md">
                                                    Upload
                                                </button>
                                            </div>
                                        </div>



                                        <div className="relative">
                                            {/* parent container with relative position */}
                                            <div className="flex justify-end absolute top-8 right-20">
                                                {/* buttons with absolute position */}
                                                <button
                                                    onClick={cancelClickHandler}
                                                    className="h-10 w-32 shadow-md mr-5 border-x-2 border-y-2 hover:opacity-50 rounded-md"
                                                >
                                                    <p className="text-gray-600 text-base font-normal">Cancel</p>
                                                </button>
                                                <button
                                                    ref={saveNoteButtonRef}
                                                    onClick={handleNoteClick}
                                                    className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                                                >
                                                    <p className="text-white text-base font-normal">Save</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}


                                {clickVideos && !saveVideo && (

                                    <div className='bg-gray-300 rounded-b-lg justify-center items-center h-fit' style={{ width: '100%', height: '400px' }}>

                                        <div className='p-1 ml-10'>
                                            <p className='text-black text-lg font-medium'>
                                                Video Title<span className='text-red-500 ml-1 text-xl'>*</span>
                                            </p>


                                        </div>

                                        <div className='mt-2 ml-10'>
                                            <input
                                                className="p-2 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                                style={{ width: "90%" }}
                                                placeholder="Type your text here"
                                                value={video}
                                                onChange={(e) => setVideo(e.target.value)}
                                            ></input>
                                        </div>

                                        <div className='mt-2 ml-10'>
                                            <p className='text-black text-lg font-medium'>
                                                Add youtube link
                                            </p>
                                        </div>




                                        <div className='mt-2 flex flex-row'>
                                            <input
                                                className="p-2 ml-10 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                                style={{ width: '70%' }}
                                                placeholder="https://www.youtube.com/watch?"
                                                value={youtubeInput}
                                                onChange={handleYoutubeInputChange}
                                            ></input>
                                            <button
                                                className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                                                onClick={handleVideoLinkChange}>
                                                <p className='text-white'>Add</p>
                                                </button>

                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=''>
                                            <p className='text-black absolute font-bold text-xl mt-12 ml-5'>OR</p>
                                        </div>



                                        <div className='mt-5 ml-10'>
                                            <p className='text-black text-lg font-medium'>
                                                Add vimeo link
                                            </p>
                                        </div>

                                        <div className='mt-2 mb-3 flex flex-row'>
                                            <input
                                                className="p-2 ml-10 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                                                style={{ width: '70%' }}
                                                placeholder="https://vimeo.com/812393638"
                                                value={vimeoInput}
                                                onChange={handleVimeoInputChange}
                                            ></input>
                                            <button
                                                className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                                                onClick={handleVideoLinkChange}>
                                                <p className='text-white'>Add</p>
                                                </button>
                                        </div>


                                        <div className="relative">
                                            {/* parent container with relative position */}
                                            <div className="flex justify-end absolute top-8 right-20">
                                                {/* buttons with absolute position */}
                                                <button
                                                    onClick={cancelClickHandler}
                                                    className="h-10 w-32 shadow-md mr-5 border-x-2 border-y-2 hover:opacity-50 rounded-md"
                                                >
                                                    <p className="text-gray-600 text-base font-normal">Cancel</p>
                                                </button>
                                                <button
                                                    ref={saveVideoButtonRef}
                                                    onClick={handleSaveVideoClick}
                                                    className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                                                >
                                                    <p className="text-white text-base font-normal">Save</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}


                                {!saveSectionName && (
                                    <div className="relative">
                                        {/* parent container with relative position */}
                                        <div className="flex justify-end absolute top-8 right-12">
                                            {/* buttons with absolute position */}
                                            <button
                                                onClick={cancelClickHandler}
                                                className="h-10 w-32 shadow-md mr-5 border-x-2 border-y-2 hover:opacity-50 rounded-md"
                                            >
                                                <p className="text-gray-600 text-base fo
                                                nt-normal">Cancel</p>
                                            </button>
                                            <button
                                                ref={saveButtonRef}
                                                onClick={saveClickHandler}
                                                className="h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md"
                                            >
                                                <p className="text-white text-base font-normal">Save</p>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>

                    </div>
                ) : (
                    <>
                        <button
                            className="flex items-center justify-center hover:opacity-50 shadow-md rounded-lg h-14 w-40 border-y-2 border-x-2"
                            onClick={handleClick}
                        >
                            <p className="text-gray-700 text-xl font-medium">
                                <span className="mr-3 mt-2 text-4xl">+</span>Section
                            </p>
                        </button>
                    </>
                )}
            </div>




            {saveSectionName && showForm && (
                <button
                    className="flex mt-32 items-center justify-center hover:opacity-50 shadow-md rounded-lg h-14 w-40 border-y-2 border-x-2"
                    onClick={handleClick1}
                >
                    <p className="text-gray-700 text-xl font-medium">
                        <span className="mr-3 mt-2 text-4xl">+</span>Section
                    </p>
                </button>
            )}

            <div className="flex justify-end mt-20 mb-36" style={{ width: '130%' }}>
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
