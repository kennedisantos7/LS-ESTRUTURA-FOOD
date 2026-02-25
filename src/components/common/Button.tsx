import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    to,
    onClick,
    variant = 'primary',
    className = ''
}) => {
    const baseStyles = "px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 inline-block text-center";

    const variants = {
        primary: "bg-gold text-dark hover:bg-white",
        secondary: "bg-white text-dark hover:bg-gold",
        outline: "border border-gold text-gold hover:bg-gold hover:text-dark",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
};

export default Button;
