/**
 * Author : Himanshu Tripathi
 * description: entry point for the react  WebApp
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/LandingPage/LandingPage';
import HomePage from './components/User/User';
import SelectTypeLogin from './components/Login/SelectType';
import SelectTypeSignup from './components/Signup/SelectType';
import Dashboard from './components/User/Dashboard/Dashboard';
import MyCourses from './components/User/MyCourses/myCourses';
import Revenue from './components/User/Revenue/Revenue';
import Announcement from './components/User/Announcement/Announcement';
import Engagement from './components/User/Engagement/Engagement';
import UserActivity from './components/User/UserActivity/UserActivity';
import CreateCourses from './components/CreateCourses/CreateCourse';
import CourseDescription from './components/CreateCourses/CourseDescription/CourseDescription';
import CourseHeader from './components/CreateCourses/CourseHeader/CourseHeader';
import CourseLanding from './components/CreateCourses/CourseLanding/CourseLanding';
import Curiculum from './components/CreateCourses/Curiculum/Curiculum';
import DemoVideo from './components/CreateCourses/DemoVideo/DemoVideo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/SelectTypeLogin" element={<SelectTypeLogin />} />
        <Route path="/SelectTypeSignup" element={<SelectTypeSignup />} />
        <Route path="/HomePage" element={<HomePage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='MyCourses' element={<MyCourses />} />
          <Route path='Revenue' element={<Revenue />} />
          <Route path='Announcement' element={<Announcement />} />
          <Route path='Engagement' element={<Engagement />} />
          <Route path='Messages' element={<postMessage />} />
          <Route path='UserActivity' element={<UserActivity />} />
        </Route>
        <Route path='/CreateCourses' element={<CreateCourses/>}>
          <Route path='CourseDescription' element={<CourseDescription/>}/>
          <Route path='CourseHeader' element={<CourseHeader/>}/>
          <Route path='CourseLanding' element={<CourseLanding/>}/>
          <Route path='Curiculum' element={<Curiculum/>}/>
          <Route path='DemoVideo' element={<DemoVideo/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
