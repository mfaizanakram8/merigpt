import React from 'react';
import Image from 'next/image';

interface LogoBackProps {
  onClick: () => void; // Define the type for onClick prop
}

const LogoBack: React.FC<LogoBackProps> = ({ onClick }) => {
  return (
    <div className='md:mr-[900px]'>
      <h2 className='text-4xl font-bold pl-1 pt-20 md:pt-0  text-black'><Image
                src="/assets/mt.png"
                alt="png"
                width={150}
                height={40}
                className="block mx-auto "
              /></h2> {/* Using Tailwind CSS for styling */}

      <div className='flex items-center gap-3 pl-1 pt-3 ml-2  cursor-pointer' onClick={onClick}>
        <Image src='/assets/BackArrow.png' width={10} height={18} className='object-contain' alt='Back Arrow' />
        <p className='text-xl text-blue-950 font-bold'>Back</p>
      </div>
    </div>
  );
};

export default LogoBack;
