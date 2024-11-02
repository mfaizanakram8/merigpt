'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import LogoBack from '@/components/LogoBack1';
import OTPInput from '@/components/otpinput';
import Image from 'next/image';
import Button from '@/components/button';

const LoginOtp: React.FC = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();

    };
    
    const handleLogin = () => {
        router.push('/herosection');
    };


    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left Side */}
            <div className="flex-1 p-6 lg:p-8">
                <div className="lg:mr-60 mb-4">
                    <LogoBack onClick={handleBack} />
                </div>
                <h1 className="text-2xl lg:text-4xl text-purple-600 pt-4 lg:pt-12 lg:pl-32 text-center lg:text-left">
                    Continue with your<br />Account
                </h1>
                <p className="text-base lg:text-lg text-gray-500 font-light pt-4 lg:pl-32 text-center lg:text-left">
                    Enter the verification code we have sent<br />
                    you to <span className="font-bold">youremail@gmail.com</span> to login
                </p>

                <div className="pt-8 lg:pl-32 flex justify-center lg:justify-start">
                    <OTPInput length={4} />
                </div>

                <div className="flex justify-center lg:justify-start lg:pl-32">
                    <Button  onClick={handleLogin} className="mt-4 w-40 lg:w-48 h-12 lg:h-14">Log In</Button>
                </div>

                <p className="text-sm lg:text-base text-gray-500 font-light pt-6 lg:pl-32 text-center lg:text-left">
                    Didn’t receive OTP? 
                    <span className="font-bold cursor-pointer pl-2 text-gray-800">
                        Resend
                    </span>
                </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-1 items-center justify-center bg-gray-50">
                <Image
                    src="/assets/LoginOtp.png" 
                    alt="Otp Illustration" 
                    className="object-contain max-w-full h-auto"
                    width={400}
                    height={300}
                />
            </div>
        </div>
    );
};

export default LoginOtp;
