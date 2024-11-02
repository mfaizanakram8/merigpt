import React from 'react';
import Image from 'next/image';

interface LogoBackProps {
  onClick: () => void; 
}

const LogoBack: React.FC<LogoBackProps> = ({ onClick }) => {
  return (
    <div className=' '>
      <h2 className='text-4xl font-bold pl-1 md:pt-24 text-black mr-72 md:mr-0'><Image
                src="/assets/mt.png"
                alt="png"
                width={150}
                height={40}
                className="block mx-auto "
              /></h2> 

      <div className='flex items-center gap-3 pl-1 pt-3 md:ml-32 cursor-pointer' onClick={onClick}>
        <Image src='/assets/BackArrow.png' width={10} height={18} className='object-contain' alt='Back Arrow' />
        <p className='text-xl text-blue-950 font-bold'>Back</p>
      </div>
    </div>
  );
};

export default LogoBack;
