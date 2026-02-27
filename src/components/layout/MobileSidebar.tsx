import React from 'react';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/navigation';
import Button from '../common/Button';

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
    const location = useLocation();

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#051119] transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="flex flex-col h-full w-full">
                {/* Header in Menu */}
                <div className="flex justify-end p-6 h-20 items-center">
                    <button
                        onClick={onClose}
                        className="p-2 text-white hover:text-gold transition-all duration-300"
                        aria-label="Fechar menu"
                    >
                        <X size={32} />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={onClose}
                            className={`text-2xl font-serif uppercase tracking-[0.2em] transition-all duration-300 ${location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="pt-12">
                        <Button
                            to="/contact"
                            variant="primary"
                            className="!px-12 !py-4"
                            onClick={onClose}
                        >
                            Diagnóstico
                        </Button>
                    </div>
                </nav>

                {/* Footer in Menu */}
                <div className="p-12 text-center text-gray-400 text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
                    LS Estrutura e Estratégia &copy; {new Date().getFullYear()}
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;
