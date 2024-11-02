import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <button
      className={`w-[200px] md:w-[300px] h-[50px] bg-blue-950 rounded-full text-white text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-800 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
