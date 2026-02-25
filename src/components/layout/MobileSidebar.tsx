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
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-dark border-l border-white/10 z-[70] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end p-6">
                    <button onClick={onClose} className="text-white hover:text-gold transition-colors">
                        <X size={28} />
                    </button>
                </div>

                <nav className="px-6 py-4 space-y-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={onClose}
                            className={`block py-4 text-base font-medium uppercase tracking-widest border-b border-white/5 transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-gray-300 hover:text-gold'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="pt-8">
                        <Button to="/contact" variant="outline" className="w-full" onClick={onClose}>
                            Orçamento
                        </Button>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default MobileSidebar;
