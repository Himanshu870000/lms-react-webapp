import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../../assets/arrow-narrow-left.png'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";


const CourseLanding = ({handleMenuClick,handleCourseDescriptionChange}) => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  
    const description = editorState.getCurrentContent().getPlainText();
  

  const buttonClick = () => {
    handleMenuClick('CourseDescription');
    handleCourseDescriptionChange(description);
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
                <p className='text-black text-2xl font-bold'>Course Description</p>
            </div>
            

            <div className='mt-10'>
                <p className='text-black text-lg font-medium'>
                    Add course Description<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className='mt-10' style={{ width: '130%' }}>
                <Editor
                    editorClassName="h-screen border-x-2 border-y-2 text-xl font-sans"
                    editorState={editorState}
                    onEditorStateChange={handleEditorStateChange}
                    toolbar={{
                        options: [
                            "inline",
                            "blockType",
                            "fontSize",
                            "fontFamily",
                            "list",
                            "textAlign",
                            "colorPicker",
                            "link",
                            "embedded",
                            "emoji",
                            "image",
                            "remove",
                            "history"
                        ],
                        inline: {
                            options: ["bold", "italic", "underline"],
                            className: "border-2 border-gray-300"
                        },
                        blockType: {
                            className: "border-2 border-gray-300"
                        },
                        fontSize: {
                            className: "border-2 border-gray-300"
                        },
                        fontFamily: {
                            className: "border-2 border-gray-300"
                        },
                        list: {
                            className: "border-2 border-gray-300"
                        },
                        textAlign: {
                            className: "border-2 border-gray-300"
                        },
                        colorPicker: {
                            className: "border-2 border-gray-300"
                        },
                        link: {
                            className: "border-2 border-gray-300"
                        },
                        embedded: {
                            className: "border-2 border-gray-300"
                        },
                        emoji: {
                            className: "border-2 border-gray-300"
                        },
                        image: {
                            className: "border-2 border-gray-300"
                        },
                        remove: {
                            className: "border-2 border-gray-300"
                        },
                        history: {
                            className: "border-2 border-gray-300"
                        }
                    }}
                />
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

export default CourseLanding
