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
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] z-[9999] bg-[#051119] shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full w-full relative">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

                    {/* Header in Menu */}
                    <div className="flex justify-between p-6 h-20 items-center border-b border-white/5">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-gold/60">Menu</span>
                        <button
                            onClick={onClose}
                            className="p-2 text-white hover:text-gold transition-all duration-300 hover:rotate-90"
                            aria-label="Fechar menu"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 flex flex-col justify-center py-12 px-10 space-y-2">
                        {NAV_LINKS.map((link, index) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={onClose}
                                style={{
                                    transitionDelay: isOpen ? `${150 + index * 50}ms` : '0ms',
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)'
                                }}
                                className={`group flex items-center justify-between text-2xl font-serif uppercase tracking-[0.1em] py-4 border-b border-white/[0.03] transition-all duration-500 ${location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
                                    }`}
                            >
                                <span>{link.name}</span>
                                <div className={`w-1.5 h-1.5 rounded-full bg-gold transition-all duration-500 ${location.pathname === link.path ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'}`} />
                            </Link>
                        ))}

                        <div
                            className="pt-10 transition-all duration-500"
                            style={{
                                transitionDelay: isOpen ? `${150 + NAV_LINKS.length * 50}ms` : '0ms',
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
                            }}
                        >
                            <Button
                                to="/contato"
                                variant="primary"
                                className="w-full !py-5 !text-sm uppercase tracking-widest shadow-xl shadow-gold/5"
                                onClick={onClose}
                            >
                                Solicitar Diagnóstico
                            </Button>
                        </div>
                    </nav>

                    {/* Footer in Menu */}
                    <div className="p-10 border-t border-white/5 bg-black/20">
                        <div className="flex justify-center gap-6 mb-6">
                            {/* Sociais Simplificados */}
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all">
                                <span className="text-[10px] font-bold">IG</span>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all">
                                <span className="text-[10px] font-bold">WA</span>
                            </div>
                        </div>
                        <div className="text-center text-gray-500 text-[9px] uppercase tracking-[0.3em] font-medium leading-relaxed">
                            LS Estrutura e Estratégia<br />
                            &copy; {new Date().getFullYear()} — Todos os direitos reservados
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;
