import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import backArrow from '../../../assets/arrow-narrow-left.png'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import rupee from '../../../assets/rupee.png'


const Price = [
    { code: `inr`, name: 'Free' },
    { code: 'inr', name: '699' },
    { code: 'tw', name: '799' },
    { code: 'th', name: '899' },
    { code: 'vn', name: '999' },
    { code: 'za', name: '1199' },
];



const Currency = [
    { code: 'in', name: 'INR' },
    { code: 'us', name: 'USD' },
    { code: 'tw', name: 'TWD' },
    { code: 'th', name: 'THB' },
    { code: 'vn', name: 'VND' },
    { code: 'za', name: 'ZAR' },
];




const Pricing = ({handleCourseCurrencyChange,handleCoursePriceChange,courseData}) => {
    const [selectedCurrency, setSelectedCurrency] = useState(Currency[0]);
    const [isOpen, setIsOpen] = useState(false); // add isOpen state
    const navigate = useNavigate();


    const handleCurrencySelect = (currency) => {
        setSelectedCurrency(currency);
        // Do something with the selected language, e.g. update the UI language
        setIsOpen(false); // close the menu when a language is selected
    };

    const [selectedPrice, setSelectedPrice] = useState(Price[0]);
    const [isOpens, setIsOpens] = useState(false); // add isOpen state

    const handlePriceSelect = (price) => {
        setSelectedPrice(price);
        // Do something with the selected language, e.g. update the UI language
        setIsOpens(false); // close the menu when a language is selected
    };

    console.log('courseData in  Pricing-->', courseData)
    console.log('selectedCurrency--->', selectedCurrency.name)
    console.log('selectedPrice----->', selectedPrice.name)

    const buttonClick = () => {
        // Create a new courseData object with updated fields
        const updatedCourseData = {
          ...courseData,
          courseCurrency: selectedCurrency.name,
          coursePrice: selectedPrice.name
        };
      
        // Navigate to HomePage with the updated courseData
        navigate('/homepage', { state: { courseData: updatedCourseData, activeMenu: "myCourses" } });
      };
      
      

    return (
        <div>

            <div className='flex flex-row justify-between items-center mt-10' style={{ width: '130%' }}>
                <Link to='/HomePage' className='flex items-center'>
                    <img className='' src={backArrow} alt='' />
                    <p className='ml-3 text-lg font-medium text-black'>New Course</p>
                </Link>
                <div className='flex items-center'>
                    <button onClick={buttonClick}
                    className='h-10 w-32 shadow-md border-y-2 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-black text-base font-normal'>Save As Draft</p>
                    </button>
                    {/* <button className='h-10 w-32 shadow-md ml-1 bg-purple-500 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-white text-base font-normal'>Publish</p>
                    </button> */}
                </div>
            </div>

            <div className='mt-10'>
                <p className='text-black text-2xl font-bold'>Pricing</p>
            </div>

            <p className='text-black font-normal text-sm mt-10'>Please select the price for your course below and click ‘Save’. </p>
            <p className='text-black font-normal text-sm '>If you intend to offer your course for free, the total length of video content must be less than 2 hours. </p>





            <div className='flex flex-row justify-between' style={{ width: '130%' }}>

                <div className='flex flex-col' style={{width:'25%'}}>

                    <div className='mt-20'>
                        <p className='text-black text-lg font-medium'>
                            Select Currency<span className='text-red-500 ml-1 text-xl'>*</span>
                        </p>
                    </div>

                    <div className="relative inline-block text-left mt-5 border-y-2 border-x-2 rounded-lg" style={{ width: '100%' }}>
                        <div>
                            <button
                                className="inline-flex justify-center items-center gap-x-1.5 w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                id="currency-menu"
                                aria-haspopup="true"
                                aria-expanded="true"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span>{selectedCurrency.name}</span>
                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Dropdown menu */}
                        {isOpen && (
                            <div
                                className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                                style={{ width: '100%' }}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="currency-menu"
                            >
                                {Currency.map((currency) => (
                                    <button
                                        key={Currency.code}
                                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
                                        role="menuitem"
                                        onClick={() => handleCurrencySelect(currency)}
                                    >
                                        {currency.name}
                                    </button>
                                ))}
                            </div>
                        )}

                    </div>

                </div>
                

                <div className='flex flex-col' style={{width:'60%'}}>


                    <div className='mt-20'>
                        <p className='text-black text-lg font-medium'>
                            Select Price<span className='text-red-500 ml-1 text-xl'>*</span>
                        </p>
                    </div>

                    <div className="relative inline-block text-left mt-5 border-y-2 border-x-2 rounded-lg" style={{ width: '100%' }}>
                        <div>
                            <button
                                className="inline-flex justify-center items-center gap-x-1.5 w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                id="price-menu"
                                aria-haspopup="true"
                                aria-expanded="true"
                                onClick={() => setIsOpens(!isOpens)}
                            >
                                <span>{selectedPrice.name}</span>
                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Dropdown menu */}
                        {isOpens && (
                            <div
                                className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                                style={{ width: '100%' }}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="price-menu"
                            >
                                {Price.map((price) => (
                                    <button
                                        key={price.code}
                                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
                                        role="menuitem"
                                        onClick={() => handlePriceSelect(price)}
                                    >
                                        {price.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

            </div>

            <div className="flex justify-end mt-20 mb-36" style={{ width: '130%' }}>
                <button
                    onClick={buttonClick}
                    className='h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md'>
                    <p className='text-white text-base font-normal'>Save</p>
                </button>
            </div>

        </div>
    )
}

export default Pricing
