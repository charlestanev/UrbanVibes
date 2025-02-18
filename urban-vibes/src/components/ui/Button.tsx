import React from 'react';

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
    return (
        <button className="py-2 px-4 round-md border border-amber-500 bg-transparent hover:bg-amber-500 hover:text-white">
            {label}
        </button>
    );
};

export default Button;
