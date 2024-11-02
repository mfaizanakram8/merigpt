'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import Image from 'next/image';

const SignUp: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailError('');
      router.push('/signupotp');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mt-10 sm:mt-20">
        Getting Started With
      </h1>
      <p className="text-lg sm:text-xl text-[#6F6F6F] text-center font-medium mt-1">
        <Image
          src="/assets/mt.png"
          alt="png"
          width={150}
          height={40}
          className="block mx-auto"
        />
      </p>

      <div className="flex justify-center mt-6 sm:mt-10 md:w-[300px]">
        <input
          type="email"
          placeholder="Enter your email"
          className={`h-12 sm:h-14 w-full max-w-xs  sm:max-w-sm md:max-w-md lg:max-w-lg border rounded-full text-center text-base outline-none ${emailError ? 'border-red-500' : 'border-gray-400'} ${isFocused ? 'border-[#7346D2]' : ''}`}
          value={email}
          onChange={handleEmailChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {emailError && <div className="text-red-500 text-center mt-1">{emailError}</div>}

      <div className="flex justify-center mt-5">
        <Button onClick={handleSignUp}>Lets Start!</Button>
      </div>

      <div className="flex items-center justify-center mt-6 sm:mt-8 gap-4">
        <div className="border-t border-gray-300 w-1/4" />
        <h5 className="text-sm sm:text-base font-light text-gray-400">or</h5>
        <div className="border-t border-gray-300 w-1/4" />
      </div>

      <div className="flex justify-center items-center mt-6 sm:mt-8 gap-4">
        <Image src="/assets/Google.png" alt="Google" className="w-12 h-12 sm:w-16 sm:h-16 cursor-pointer object-contain" width={100} height={100} />
        <Image src="/assets/Apple.png" alt="Apple" className="w-12 h-12 sm:w-16 sm:h-16 cursor-pointer object-contain" width={100} height={100} />
      </div>

      <div className="flex items-center justify-center mt-6 sm:mt-8 gap-3">
        <Image
          src={isChecked ? "/assets/tick1.png" : "/assets/tick-1.png"}
          alt="checkbox"
          className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
          onClick={handleCheckboxClick}
          width={100} height={100}
        />
        <p className="text-sm sm:text-lg text-gray-400 font-light text-center">
          By registering you accept our <span className="text-blue-950 cursor-pointer">terms and Conditions</span> and <span className="text-blue-950 cursor-pointer">Privacy policy</span>
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-600 text-center mt-6">
        Already have an Account? <span onClick={handleLogin} className="font-bold cursor-pointer pl-2">Sign In</span>
      </p>
    </div>
  );
};

export default SignUp;
