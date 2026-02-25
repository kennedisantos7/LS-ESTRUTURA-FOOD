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
            <span className="font-serif font-bold tracking-wider text-white text-xl transition-all duration-300">
                <span className="text-gold">ESTRUTURA</span> FOOD
            </span>
        </div>
    );
};

export default Logo;
