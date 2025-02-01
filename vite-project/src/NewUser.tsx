import React, { useState } from 'react';
import { userInfo } from './types';
import createUser from './api/userService';
import './NewUser.css';

function NewUser() {
    // Handling Form Input State
    const [userInfo, setUserInfo] = useState<userInfo>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    function togglePasswordVisibility() {
        setShowPassword((prevState) => !prevState);
    }

    // Handle input change
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setUserInfo({...userInfo, [name]: value})
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page refresh
        
        try {
            //consume post api endpoint
            await createUser(userInfo);
            setSuccess(true);
            setError('');
           setUserInfo({firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: '',}); 
        } catch (err) {
            setError("Failed to create user. Please try again.");
        }
        
    }

    return (
        <div className='flex justify-center items-center min-h-screen mt-4 bg-gray-100'>
            <form 
                onSubmit={handleSubmit}
                className='space-y-4 mt-7 p-4 border bg-white'
            >
            <div className='flex items-center m-4'>
                <label
                    className='text-sm font-medium text-gray-700 w-1/4'
                >
                    First Name:
                </label>
                <input
                    type='text' 
                    name='firstName'
                    value={userInfo.firstName}
                    onChange={handleChange}
                    className='flex-1 p02 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                />
            </div>
            <div className='flex items-center'>
                <label
                    className="text-sm font-medium text-gray-700 w-1/4"
                >
                    Last Name:
                </label>
                <input 
                    type='text' 
                    name='lastName'
                    value={userInfo.lastName}
                    onChange={handleChange}
                    className='flex-1 p02 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                />
            </div>
            <div className='flex items-center'>
                <label 
                    className="text-sm font-medium text-gray-700 w-1/4"
                >
                    Email:
                </label>
                <input 
                    type='text' 
                    name='email'
                    value={userInfo.email}
                    onChange={handleChange}
                    className='flex-1 p02 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                />
            </div>
            <div className='flex items-center'>
                <label
                    className="text-sm font-medium text-gray-700 w-1/4"
                >
                    Password:
                </label>
                <input 
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={userInfo.password}
                    onChange={handleChange}
                    className='flex-1 p02 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                />
                <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='absolute right-2 top-2 text-sm text-blue-500 focus:outline-none'
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            <div className='flex items-center'>
                <label
                    className="text-sm font-medium text-gray-700 w-1/4"
                >
                    Role:
                </label>
                <input 
                    type='text' 
                    name='role'
                    value={userInfo.role}
                    onChange={handleChange}
                    className='flex-1 p02 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                />
            </div>
            <br />
            <button 
            type='submit'
            className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400'
            >
                Submit
            </button>
            {success && <p>User Created Successfully!</p>}
            {error && <p style={{ color:'red' }}>{error}</p>}
        </form>
        </div>
    )

}

export default NewUser;