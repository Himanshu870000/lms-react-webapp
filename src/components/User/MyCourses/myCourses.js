import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import courseDp from '../../../assets/instructorCourseCard.png'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';


const MyCourses = ({ courseData }) => {

    const [selectedOption, setSelectedOption] = useState("drafts");
    const [publishingStatus, setPublishingStatus] = useState(false);


    const courseSection = courseData?.courseSection;
    const courseCategory = courseData?.courseCategory?.id;

    const token = useSelector(state => state.tokenReducer.token);
    console.log('tokaniya--->', token);

    const currentDate = new Date().toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

    const handlePublishButton = async () => {
        try {
            console.log('courseData in draft--->', courseData);

            const sectionDataPromises = [];

            // Iterate over the course sections
            for (const section of courseSection) {
                const { title, lecture, videos, assignment } = section;

                const sectionData = {
                    title,
                    description: 'section_description',
                    lecture,
                    videos,
                    assignment
                };

                const sectionPromise = axios.post('https://lmswebapp.onrender.com/api/insertSection', sectionData);
                sectionDataPromises.push(sectionPromise);
            }

            const sectionResponses = await Promise.all(sectionDataPromises);

            const sections = sectionResponses.map(response => {
                return {
                    section: response.data._id
                };
            });

            console.log('sections:', sections);

            const { courseTitle, courseDescription, courseImage, courseCurrency, courseDemoVideo, courseStartDate, courseEndDate, CourseEnrollDeadline, courseLanguage, courseLevel, coursePrice } = courseData;

            const courseDatas = {
                title: courseTitle,
                description: courseDescription,
                courseImage,
                category: courseCategory,
                courseCurrency,
                courseDemoVideo,
                courseStartDate,
                courseEndDate,
                CourseEnrollDeadline,
                courseLanguage,
                courseLevel,
                price: coursePrice,
                sections
            };

            const response = await axios.post('https://lmswebapp.onrender.com/api/insertCourses', courseDatas);
            console.log('Response:', response.data);

            const courseId = response.data._id; // Get the course ID from the response

            console.log('tokennnn--', token);
            if (token) {
                const config = {
                    headers: {
                        authorization: token,
                    },
                };

                const updateUserCourseResponse = await axios.put(
                    'https://lmswebapp.onrender.com/api/updateUserCourse',
                    { courseId },
                    config
                );

                console.log('Update User Course Response:', updateUserCourseResponse.data);
            } else {
                console.log('No token found.');
            }
            setPublishingStatus(true);

            // Show success alert
            await Swal.fire({
                title: 'Course Published Successfully',
                text: 'Check in your active courses',
                icon: 'success',
            });

            // Reset the courseData state
        } catch (error) {
            console.error(error);

            await Swal.fire({
                title: 'Error',
                text: 'An error occurred while publishing the course.',
                icon: 'error',
            });
        }
    };




    const [coursesData, setCoursesData] = useState(null);

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                console.log('tokenenenn-->', token);
                const headers = {
                    authorization: token,
                };

                const response = await axios.get('https://lmswebapp.onrender.com/api/getUserCDetails', {
                    headers: headers,
                });

                const courseIds = response.data.map((data) => data.courseData._id);
                console.log('courseIds---->', response.data);

                const courseDataResponse = await axios.get('https://lmswebapp.onrender.com/api/getCourseData', {
                    params: {
                        courseIds: courseIds.join(','),
                    },
                });

                const allCourseData = courseDataResponse.data;
                setCoursesData(allCourseData);
            } catch (error) {
                console.log(error);
            }
        };


        getUserDetails();
    }, []);


    console.log('coursessssssData------>', coursesData)







    return (
        <div className=' justify-center justify-items-center'>

            <div className='flex flex-row mt-10' style={{ width: '130%' }}>
                <p className='text-2xl text-black font-bold'>My courses</p>
                <Link to='/CreateCourses' className='h-9 hover:opacity-60 w-28 bg-purple-600 rounded-md ml-auto flex justify-center items-center'>
                    <p className='text-white font-medium text-xs hover:opacity-70'>
                        Create Course
                    </p>
                </Link>
            </div>



            <div className='flex flex-row mt-10 border-b-2'>
                <Link
                    className={`text-black text-base font-medium ${selectedOption === "active" ? "font-bold text-blue-400 underline" : ""
                        }`}
                    onClick={() => setSelectedOption("active")}
                >
                    Active Courses
                </Link>
                <Link
                    className={`text-black text-base ml-6 font-medium ${selectedOption === "drafts" ? "font-bold text-blue-400 underline" : ""
                        }`}
                    onClick={() => setSelectedOption("drafts")}
                >
                    Drafts
                </Link>
            </div>

            <div className='mt-4'>
                {selectedOption === "active" ? (
                    <div>
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

                        {coursesData && coursesData.map((course) => (
                            <div key={course.id} className='grid grid-cols-4 rounded-lg h-32  mt-4' style={{ width: '130%' }}>

                                <div className='flex flex-row py-2 text-black text-sm font-medium' style={{ gridColumn: '1/2' }}>
                                    <img className='w-20 h-20' src={courseDp} alt='' />
                                    <div className='flex flex-col sm:p-3 ml-1 mt-2 md:p-0'>
                                        <p className='text-black font-bold text-sm'>{course.title} :</p>
                                        <p className='text-black font-bold text-sm'>{course.courseLevel}</p>
                                        <p className='text-black font-normal text-xs'>10 Lectures, 28 Hours</p>
                                    </div>
                                </div>


                                <div className='py-2 mr-2 text-black text-sm font-medium' style={{ gridColumn: '2/3' }}>
                                    Development
                                </div>
                                <div className='py-2 text-black text-sm font-medium' style={{ gridColumn: '3/4' }}>
                                {currentDate}
                                </div>
                                <div className='py-2 text-black text-sm font-medium' style={{ gridColumn: '4/5' }}>
                                    12
                                </div>
                                <div className='py-2 mr-12 text-black text-sm font-medium' style={{ gridColumn: '5/6' }}>
                                    4.5
                                </div>
                            </div>
                        ))}


                    </div>
                ) : (
                    <div>
                        <div className='grid grid-cols-3 rounded-lg h-10 bg-purple-300 mt-4' style={{ width: '130%' }}>
                            <div className='py-2 ml-3 text-black text-sm font-medium' style={{ gridColumn: '1/2' }}>
                                Course Name
                            </div>
                            <div className='py-2 text-black text-sm font-medium' style={{ gridColumn: '2/3' }}>
                                Category
                            </div>
                            <div className='py-2  text-black text-sm font-medium' style={{ gridColumn: '3/4' }}>
                                Action
                            </div>
                        </div>

                        {!publishingStatus && courseData && (
                            <div className='grid grid-cols-3 rounded-lg h-32 mt-4' style={{ width: '130%' }}>
                                <div className='flex flex-row py-2 text-black text-sm font-medium' style={{ gridColumn: '1/2' }}>
                                    <img className='w-20 h-20' src={courseData.courseImage} alt='' />
                                    <div className='flex flex-col sm:p-3 ml-1 mt-2 md:p-0'>
                                        <p className='text-black font-bold text-sm'>{courseData.courseTitle}</p>
                                        <p className='text-black font-bold text-sm'>{courseData.courseLevel}</p>
                                        <p className='text-black font-normal text-xs'>8 Lectures, 28 Hours</p>
                                    </div>
                                </div>
                                <div className='py-2 mr-2 text-black text-sm font-medium' style={{ gridColumn: '2/3' }}>
                                    {courseData.courseCategory.name}
                                </div>
                                <div className='py-2 text-black text-sm font-medium' style={{ gridColumn: '3/4' }}>
                                    <button className='h-10 w-20 shadow-md border-y-2 hover:opacity-50 border-x-2 rounded-sm'>
                                        <p className='text-black text-base font-normal'>Edit</p>
                                    </button>
                                    <button className='h-10 w-20 ml-1 shadow-md border-y-2 hover:opacity-50 border-x-2 rounded-sm'>
                                        <p className='text-black text-base font-normal'>Discard</p>
                                    </button>
                                    <button
                                        onClick={handlePublishButton}
                                        className='h-10 w-20 ml-1 shadow-md bg-slate-600 hover:opacity-50 rounded-sm'
                                    >
                                        <p className='text-white text-base font-normal'>Publish</p>
                                    </button>
                                </div>
                            </div>
                        )}


                    </div>
                )}
            </div>

        </div>
    )
}

export default MyCourses;
