import React, {  } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div >
            <nav className="flex items-center shadow-md justify-between flex-wrap bg-white py-4 lg:px-12 border-solid border-t-2">                    
                <div className="relative mx-auto text-gray-600 lg:block hidden">
                    <Link
                        to="/home"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold mr-8 py-2 px-8 rounded"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
