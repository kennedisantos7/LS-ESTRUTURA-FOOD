import React from 'react';

interface HeadingProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4;
    className?: string;
    light?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    children,
    level = 2,
    className = '',
    light = false
}) => {
    const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

    const baseStyles = "font-serif font-bold";

    const sizes = {
        1: "text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6",
        2: "text-3xl md:text-4xl mb-6",
        3: "text-xl md:text-2xl mb-4",
        4: "text-lg md:text-xl mb-3",
    };

    const colorStyles = light ? "text-white" : "";

    return (
        <Tag className={`${baseStyles} ${sizes[level]} ${colorStyles} ${className}`}>
            {children}
        </Tag>
    );
};

export default Heading;
