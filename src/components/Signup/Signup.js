import React, { useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import SingupBackImage from '../../assets/signUpBack.png'
import Logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import facebook from '../../assets/signUpFacebook.png'
import swal from 'sweetalert'
import axios from 'axios'


export default function Signup(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const handleButtonClick = async () => {
        // Check if any input fields are empty
        if (!name || !email || !password) {
            swal({
                title: "Please fill out all fields",
                icon: "warning",
            });
            return;
        }
    
        try {
            const response = await axios.post('http://192.168.0.109:7000/api/signup', {
                name: name,
                email: email,
                password: password,
                type: type,
            });
            console.log(response.data);
            swal({
                title: "Sign up successful!",
                text: "Now you can login",
                icon: "success",
            }).then(() => {
                // Set redirectToLogin to true to trigger the Navigate component
                setRedirectToLogin(true);
            });
        } catch (error) {
            console.error(error.response.data.err);
            swal({
                title: "Error",
                text: error.response.data.err,
                icon: "error",
            });
        }
    };
    
    
    // Use Navigate to redirect to the login page when redirectToLogin is true
    if (redirectToLogin) {
        return <Navigate to="/Login" />;
    }
    

    return (
        <div>
            <div className="flex flex-row h-screen bg-purple-500">
                <div className="flex">
                    <img src={SingupBackImage} alt='' />
                </div>
                <div className="flex flex-col h-screen justify-center bg-white relative" style={{ borderTopLeftRadius: 40, borderBottomLeftRadius: 40, width: '80%' }}>
                    <div class=" flex justify-end mr-48">
                        <Link to='/' className='text-xl text-black'>&#10006;</Link>
                    </div>
                    <div class="flex justify-end mt-4">
                        <img style={{ height: "80%", width: '10%' }} class="mx-auto" src={Logo} alt='' />
                    </div>
                    <p className=' text-center p-7 ml-8 text-2xl font-medium'>Sign Up</p>

                    <div class="flex flex-col ml-6 items-center">
                        <div class="flex flex-col w-1/2 mt-2 sm:grid-cols-2 mx-auto">
                            <div>
                                <input
                                    type="text"
                                    className="my-2 w-full bg-gray-200 rounded-md py-2 px-3"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    className="my-2 w-full bg-gray-200 rounded-md py-2 px-3"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    className="my-2 w-full bg-gray-200 rounded-md py-2 px-3"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className='mt-3'>
                                    <button
                                        onClick={handleButtonClick}
                                        class="inline-block w-full px-6 py-3 mb-0 font-bold text-center hover:opacity-70 text-white uppercase align-middle transition-all border-0 rounded-full cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                    >
                                        Signup
                                    </button>
                                </div>
                            </div>

                            <p className=' text-center text-gray-500 mt-2'>--------------- or Sign Up With ---------------</p>

                            <div class="flex flex-row justify-center items-center">
                                <div class="flex flex-col mx-10 mt-4">
                                    <img style={{ height: '100%', width: '50%' }} class="mx-auto" src={google} alt='' />
                                    <p style={{ fontWeight: 500 }} className='text-1xl'>Google</p>
                                </div>
                                <div class="flex flex-col mx-10 mt-4">
                                    <img style={{ height: '40%', width: '40%' }} class="mx-auto" src={facebook} alt='' />
                                    <p style={{ fontWeight: 500 }} className='text-1xl'>Facebook</p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center p-5 items-center'>
                                <p style={{ fontSize: 13, fontWeight: 500 }} className=' mx-1'>Already have an account ? </p>
                                <Link to='/login' style={{ fontSize: 16 }} className=' text-xl text-blue-600'> Login</Link>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
