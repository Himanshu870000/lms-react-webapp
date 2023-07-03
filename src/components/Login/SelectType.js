import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../../assets/logo.png'
import student from '../../assets/student.png'
import instructor from '../../assets/Instructor.png'
import logo_harvest from '../../assets/logo_Harvest.png'

export default function SelectTypeLogin() {
    return (
        <div className='flex justify-center items-center bg-purple-300 h-screen w-screen'>
            <div className=' justify-center items-center' style={{ height: '80%', width: '70%', backgroundColor: '#fff', borderRadius: 4, elevation: 4, shadowColor: '#fff', }}>
                <div class=" flex justify-end mt-5 mr-10">
                    <Link to='/' className='text-xl text-black'>&#10006;</Link>
                </div>
                <div class="flex justify-end mt-4">
                    <img style={{height:80, width:160}} class="mx-auto" src={logo_harvest} alt='' />
                </div>
                <p className=' text-center p-1 ml-85 text-2xl font-medium'>Login as</p>
                <div className='flex justify-center items-center flex-row'>
                    <Link to='/Login' class="flex mx-10 mt-6 hover:opacity-75">
                        <img style={{ height: 200, width: 200 }} class="mx-auto" src={student} alt='' />
                    </Link>

                    <Link to='/Login' class="flex mx-10 mt-4 hover:opacity-75">
                        <img style={{ height: 200, width: 200 }} class="mx-auto" src={instructor} alt='' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
