import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
const {BACK_IMAGE, CROSS_ICON ,BACK_BUTTON, LOGO} =  require('../../utils/imagepath')
export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false); // Initialize to false

  
  const handleLogin = async () => {
    // Check if any input fields are empty
    if (!email || !password) {
      swal({
        title: 'Please fill out all fields',
        icon: 'warning',
      });
      return;
    }
  
    try {
      const response = await axios.post('https://lmswebapp.onrender.com/api/signin', {
        email: email,
        password: password,
      });
      console.log('ressss', response.data);
  
      // Save the JWT token from the response to local storage or cookies
      localStorage.setItem('token', response.data.token);
  
      swal({
        title: 'Login successful!',
        icon: 'success',
      }).then(() => {
        // Update redirectToHome to true
        console.log('Redirecting to home page...');
        setRedirectToHome(true); // Update the state variable
      });
    } catch (error) {
      console.error(error.response.data.error);
      swal({
        title: 'Error',
        text: error.response.data.error,
        icon: 'error',
      });
    }
  };
  
  if (redirectToHome) {
    console.log('Redirecting to home page...');
    const token = localStorage.getItem('token');
    // return <HomePage token={token} />;
  }

  return (
    <div className="flex flex-row h-screen bg-white-500">
    <div className="flex-1">
      <img
        style={{ height: "100%", width: "100%" }}
        src={BACK_IMAGE}
        alt=""
      />
    </div>
      
      <div className="flex-1">
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between' }}>
        <Link to='/home'>
          <img
            style={{marginLeft:40}}
            src={BACK_BUTTON}
            alt="Cross Icon"
          />
        </Link>
        <Link to='/'>
          <img
            style={{marginRight:40}}
            src={CROSS_ICON}
            alt="Cross Icon"
          />
        </Link>
      </div>
        <div style={{flexDirection: "row",justifyContent: "center",marginLeft: "50%",alignItems: "center",}}>
          <img src={LOGO} style={{ marginRight: "auto" }} />
        </div>
        <div className='flex justify-center items-center' style={{marginLeft:'15%', marginTop:'5%'}}>
          <p style={{ color: '#00a990', fontWeight: 'bold', fontSize: 35 }}>Login</p>
        </div>
        <div className='flex justify-center items-center' style={{marginLeft:'15%', marginTop:'1%'}}>
        <p style={{color:'#000', fontWeight:'400', fontSize:15}}>Hello, Welcome Back</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'3%', justifyContent: 'center'}}>
      <form onSubmit={(e) => e.preventDefault()} style={{ }}>
        <p style={{ color: '#000', fontWeight: 'bold' }}>Email Address</p>
        <input type="email" style={{ borderWidth: 0.6, width: '130%' }} className="my-2 w-full bg-white-200 rounded-md py-2 px-3" placeholder="Enter your email" required />

        <p style={{ color: '#000', fontWeight: 'bold' }}>Password</p>
        <input type="password" style={{ borderWidth: 0.6, width: '130%' }} className="my-2 w-full bg-white-200 rounded-md py-2 px-3" placeholder="Enter your password" required />
        <Link className="underline decoration-solid p-3 text-blue-500 hover:text-black" style={{ marginTop: '2%', marginLeft: 'auto' }}>Forgot Password ?</Link>
      </form>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '12%' }} className='flex justify-center items-center ml-24'>
               <p style={{ color: '#000', fontSize: 18, fontWeight: '400', marginRight: 5 }}>Don't have an Account ? </p>
               <Link to='/signup' style={{ color: 'green', fontSize: 18, fontWeight: '500' }}>Register</Link>
          </div>
        <div style={{marginTop:'1%'}} className='flex justify-center items-center ml-24'>
      
          <button
            onClick={handleLogin}
            type="submit" style={{ width: '40%',marginTop:'1%', backgroundColor: '#00a990', color: '#fff', fontWeight: 'bold', height: 40, borderRadius: 10 }}>
            Login
          </button>
        </div>


    </div>
  </div>
  )
}


