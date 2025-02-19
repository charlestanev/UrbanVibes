import React from 'react';

interface ButtonProps {
    label: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }: ButtonProps) => {
    return (
        <button
            className={`py-2 px-4 round-md border border-amber-500 bg-transparent text-amber-500 hover:text-white transition-all ${className}`}>
            {label}
        </button>
    );
};

export default Button;
