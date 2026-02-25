import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navigation';
import MobileSidebar from './MobileSidebar';
import Button from '../common/Button';
import Logo from '../common/Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="fixed w-full z-50 bg-dark/95 backdrop-blur-md h-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link to="/">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative group ${location.pathname === link.path ? 'text-gold' : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''
                                    }`} />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA/Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <Button to="/contact" variant="outline" className="px-6 py-2 text-[10px]">
                                Orçamento
                            </Button>
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
                            aria-label="Menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>

            <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </header>
    );
};

export default Header;
