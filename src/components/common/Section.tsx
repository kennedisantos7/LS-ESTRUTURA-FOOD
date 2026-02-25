import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
    darker?: boolean;
    white?: boolean;
    cream?: boolean;
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    dark,
    darker,
    white,
    cream
}) => {
    const bgClass = darker ? 'bg-darker text-white' : dark ? 'bg-dark text-white' : white ? 'bg-white text-dark' : cream ? 'bg-cream text-dark' : 'bg-dark text-white';
    return (
        <section
            id={id}
            className={`py-20 ${bgClass} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
