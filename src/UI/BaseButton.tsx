import React from 'react';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'light' | 'dark';
    custom?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, variant = 'light', custom = false, className = '', ...props }) => {
    const baseClasses = 'w-full cursor-pointer justify-center rounded-lg px-1 py-2.5 transition-all duration-200 ease-in-out active:scale-95 font-light text-sm';

    const variantClasses = variant === 'dark' ? 'bg-[#3d3d3c] text-white' : 'bg-white text-gray-800';

    const customStyle = custom
        ? {
              fontFamily: 'Arimo',
              fontWeight: 300,
          }
        : {};

    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`} style={customStyle} {...props}>
            {children}
        </button>
    );
};

export default BaseButton;
