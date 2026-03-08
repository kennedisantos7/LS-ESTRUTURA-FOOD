import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade-in-up' | 'zoom-in' | 'enter-left' | 'enter-right';
    delay?: number;
    threshold?: number;
    once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = '',
    animation = 'fade-in-up',
    delay = 0,
    threshold = 0.1,
    once = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            });
        }, { threshold });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [once, threshold]);

    const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

    return (
        <div
            ref={domRef}
            className={`${animationClass} ${className}`}
            style={{ animationDelay: isVisible ? `${delay}ms` : '0ms' }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
