import React from "react";

interface ButtonProps {
    label: string;
    className?: string;
    variant?: "outline" | "solid";
}

const Button: React.FC<ButtonProps> = ({ label, className, variant = "outline" }) => {
    const baseStyles = "py-2 px-4 rounded-md transition-all";

    const variants = {
        outline: "border border-amber-500 bg-transparent text-amber-500 hover:bg-amber-500 hover:text-white",
        solid: "bg-amber-500 text-white hover:bg-amber-600",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`}>
            {label}
        </button>
    );
};

export default Button;
