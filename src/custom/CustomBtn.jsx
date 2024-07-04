import React from 'react';

const CustomBtn = ({ children, className,style, ...props }) => {
  return (
    <button
      className={`bg-primary text-black rounded hover:border-hidden border transition-colors duration-300 py-2 px-4 md:py-4 md:px-6 ${className}`}
      {...props}
      style={style}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
