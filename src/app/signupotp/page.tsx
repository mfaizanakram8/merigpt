// src/app/signup-otp/page.tsx
'use client'
import React, { useEffect, useState } from 'react';
import LogoBack from '@/components/logoback';
import OTPInput from '@/components/otpinput';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

const SignupOtp: React.FC = () => {
    const router = useRouter();
    const [timer, setTimer] = useState<number>(10);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

    const handleBack = () => {
        router.back();
    };

    const handleSignup = () => {
        router.push('/herosection');
    };

    return (
        <div className="flex flex-col items-center p-4 md:p-8 lg:p-12">
            <div className="self-start md:self-center mb-4">
                <LogoBack onClick={handleBack} />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-950 text-center pt-4">Continue with your account</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-500 text-center font-normal pt-4">
                Enter the verification code we have sent you<br />
                to <span className="font-bold">youremail@gmail.com</span> to login
            </p>

            <div className="pt-8 flex justify-center">
                <OTPInput length={4} />
            </div>

            <div className="pt-8 flex justify-center">
                <Button onClick={handleSignup}>Log In</Button>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-gray-500 text-center font-normal pt-6">
                Didn’t receive OTP? <span className="font-bold cursor-pointer pl-2">Resend</span>
            </p>

            {/* Conditionally render the timer if it's greater than 0 */}
            {timer > 0 && (
                <p className="text-sm md:text-base lg:text-lg text-gray-400 text-center font-light pt-4">
                    Request for a new OTP available in<br />
                    {`00:${timer < 10 ? `0${timer}` : timer} Sec`}
                </p>
            )}

            {/* Show "Resend OTP via SMS" only after the timer reaches 0 */}
            {timer === 0 && (
                <p className="text-sm md:text-base lg:text-lg text-blue-950 text-center font-bold underline cursor-pointer pt-4">
                    Resend OTP via SMS
                </p>
            )}
        </div>
    );
};

export default SignupOtp;
