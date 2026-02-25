import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
    darker?: boolean;
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    dark,
    darker
}) => {
    const bgClass = darker ? 'bg-darker' : dark ? 'bg-dark' : 'bg-dark';
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
