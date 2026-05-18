import React from 'react';

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  color?: 'orange' | 'red' | 'black' | 'yellow';
  isloading?: boolean;
}

export const Button = ({ 
  name, 
  color = 'black', 
  isloading, 
  children, 
  className = '', 
  ...props 
}: buttonProps) => {
  
  // Mapeo de colores con la paleta del proyecto
  const colorVariants = {
    orange: 'bg-[#FF7D29] hover:bg-[#FFBF78] focus:ring-[#FF7D29] text-white',
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white',
    black: 'bg-slate-900 hover:bg-slate-800 focus:ring-slate-900 text-white',
    yellow: 'bg-[#FFEEA9] hover:bg-[#FEFFD2] focus:ring-[#FFEEA9] text-[#FF7D29]',
  };

  return (
    <button 
      className={`
        inline-flex items-center justify-center font-semibold rounded-lg 
        transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
        disabled:opacity-50 disabled:pointer-events-none 
        text-sm px-4 py-2 sm:text-base sm:px-5 sm:py-2.5 md:px-6 md:py-3
        transform hover:scale-105 active:scale-95
        ${colorVariants[color]} ${className}
      `}
      disabled={isloading || props.disabled}
      {...props}
    >
      {children || name}
    </button>
  );
};