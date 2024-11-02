// src/components/OTPInput.tsx
'use client';
import React, { useState } from 'react';

interface OTPInputProps {
    length: number;
}

const OTPInput: React.FC<OTPInputProps> = ({ length }) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const element = e.target;
        if (isNaN(Number(element.value))) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus on the next input if the current one is not empty
        if (element.nextElementSibling && element.value !== '') {
            (element.nextElementSibling as HTMLInputElement).focus();
        }
    };

    return (
        <div className="flex gap-4">
            {otp.map((data, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder='_'
                    maxLength={1}
                    className="w-16 h-16 text-2xl text-center border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none"
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                    onFocus={(e) => e.target.select()}
                />
            ))}
        </div>
    );
};

export default OTPInput;
