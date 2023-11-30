import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IITG_logo from '../Images/IITG_logo.svg'

const OptionSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption) {
      // Redirect to the next page based on the selected option
      navigate(`/StudentLogin1`);
    } else {
      // Show an alert if no option is selected
      alert('Please choose an option before goin next page.');
    }
  };

  return (
    <div className="flex flex-col items-center mb-8 justify-center h-screen p-5 bg-dark-white w-full">
      <div className="bg-white p-8 rounded-sm shadow-md mb-8 flex flex-col w-1/4">
        <img src={IITG_logo} alt='logo' className='justify-end h-12' />
       
        
        <h1 className="text-2xl font-bold mb-4">I am a</h1>
        <ul className="list-disc space-y-1">
          <li className={`flex items-center ${selectedOption === 'option1' && 'text-blue-500'}`}>
            <button
              className="py-2 px-4 rounded-sm"
              onClick={() => handleOptionSelect('option1')}
            >
              Student
            </button>
          </li>
          <li className={`flex items-center ${selectedOption === 'option2' && 'text-blue-500'}`}>
            <button
              className="py-2 px-4 rounded-sm"
              onClick={() => handleOptionSelect('option2')}
            >
              Alumni
            </button>
          </li>
          <li className={`flex items-center ${selectedOption === 'option3' && 'text-blue-500'}`}>
            <button
              className="py-2 px-4 rounded-sm"
              onClick={() => handleOptionSelect('option3')}
            >
              Professor
            </button>
          </li>
          <li className={`flex items-center ${selectedOption === 'option4' && 'text-blue-500'}`}>
            <button
              className="py-2 px-4 rounded-sm"
              onClick={() => handleOptionSelect('option4')}
            >
              VP/Board Director
            </button>
          </li>
          <li className={`flex items-center ${selectedOption === 'option5' && 'text-blue-500'}`}>
            <button
              className="py-2 px-4 rounded-sm"
              onClick={() => handleOptionSelect('option5')}
            >
              General Secretary
            </button>
          </li>
          <li className={`flex items-center ${selectedOption === 'option6' && 'text-blue-500'}`}>
            <button
              className="py-2 px-4 rounded-sm"
              onClick={() => handleOptionSelect('option6')}
            >
              Student Body Representative
            </button>
          </li>
        </ul>

        <div className='w-full flex justify-end'>
            <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-sm w-1/3"
            onClick={handleNextClick}
            >
            Continue
            </button>
        </div>
        
      </div>
      <div className="bg-white p-4 rounded-sm shadow-md w-full">
        <p className="text-sm">
          Need help? Contact us.
        </p>
      </div>
    </div>
  );
};

export default OptionSelector;

