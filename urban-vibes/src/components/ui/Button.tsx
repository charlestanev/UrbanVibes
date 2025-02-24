import React from "react";

interface ButtonProps {
    label: string;
    className?: string;
    variant?: "outline" | "solid";
    icon?: string;
    iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({ label, className, variant = "outline", icon, iconPosition = "left" }) => {
    const baseStyles = "py-2 px-4 rounded-md transition-all flex items-center justify-center gap-2";

    const variants = {
        outline: "border border-amber-500 bg-transparent text-amber-500 hover:bg-amber-500 hover:text-white",
        solid: "bg-amber-500 text-white hover:bg-amber-600",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`}>
            {icon && iconPosition === "left" && (
                <span className="material-icons align-middle">{icon}</span>
            )}
            {label}
            {icon && iconPosition === "right" && (
                <span className="material-icons align-middle">{icon}</span>
            )}
        </button>
    );
};

export default Button;
