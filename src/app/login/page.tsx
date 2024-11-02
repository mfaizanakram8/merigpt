"use client"; // Add this directive at the top

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for the App Router
import Button from '@/components/button';
import Image from 'next/image';

const Login: React.FC = () => {
  const router = useRouter(); // Use useRouter for navigation
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSignup = () => {
    router.push('/signup'); // Navigate to the signup page
  };

  const handleOtp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
    if (emailRegex.test(email)) {
      setEmailError('');
      router.push('/loginotp'); // Navigate to OTP page
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Update the email state on change
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8 ml-20">
        <h1 className="text-3xl text-blue-950 pt-28">Log In With</h1>
        <p className="text-xl font-normal text-[#6F6F6F] pt-6">
        <Image
                src="/assets/mt.png"
                alt="png"
                width={150}
                height={40}
                className="block  "
              />
        </p>

        <div className="pt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className={`h-16 w-[25vw] border-2 rounded-full text-center my-6 text-lg ${
              emailError ? 'border-red-500' : 'border-[#6F6F6F]'
            } ${isFocused ? 'border-[#7346D2]' : ''}`}
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        
        {emailError && <div className="text-red-500 pt-2">{emailError}</div>}

        <div className="pt-2">
          <Button className="h-16" onClick={handleOtp}>Lets Start!</Button>
        </div>

        <p className="text-lg text-[#6F6F6F] pt-6">
          Don’t have an account? 
          <span className="font-bold cursor-pointer pl-1" onClick={handleSignup}>Sign Up</span>
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center h-screen  bg-gray-50">
        <Image src="/assets/LoginImg.png" alt="Login Illustration" className="h-[65vh] w-[40vw] object-contain" width={200} height={200}/>
      </div>
    </div>
  );
};

export default Login;
