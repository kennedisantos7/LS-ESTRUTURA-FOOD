import React from 'react';

interface LogoProps {
    className?: string;
    scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', scrolled = false }) => {
    return (
        <div className={`flex items-center gap-3 transition-transform hover:scale-105 ${className}`}>
            <img
                src="https://i.imgur.com/Z8cYnwz.png"
                alt="LS Logo"
                className="h-10 transition-all duration-300"
                referrerPolicy="no-referrer"
            />
            <span className="text-base transition-all duration-300 tracking-tight">
                <span className="font-sans font-black text-white tracking-tighter">ESTRUTURA</span>
                <span className="font-serif text-gold ml-1.5">FOOD</span>
            </span>
        </div>
    );
};

export default Logo;
