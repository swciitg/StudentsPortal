
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IITG_logo from '../Images/IITG_logo.svg'

const Admin1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLoginClick = () => {

    setLoginError(true);
    console.log('Login failed with email:', email, 'and password:', password);
  };
  const navigate = useNavigate();
  const handlestudentClick = () => {
      navigate(`/StudentLogin1`);
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-sm shadow-md">
        <img src={IITG_logo} alt='logo' />
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Enter official emailid
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="mt-1 p-2 w-full border rounded-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'ey' : 'e'}
          </button>
        </div>
        {loginError && (
          <p className="text-sm text-red-500 mb-2">Incorrect email ID or password.</p>
        )}
        <div className="mb-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-sm w-full"
            onClick={handleLoginClick}
            disabled={!email || !password}
          >
            Login
          </button>
        </div>
        <p className="text-sm text-blue-500 cursor-pointer">Forgot password?</p>
        <p className="text-sm text-blue-500 cursor-pointer" onClick={handlestudentClick}>I am a student</p>
      </div>
      <div className="bg-white p-4 rounded-sm shadow-md w-full">
        <p className="text-sm">
          Need help? Contact us.
        </p>
      </div>
    </div>
  );
};

export default Admin1;

