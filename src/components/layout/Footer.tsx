import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../constants/navigation';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-darker border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="https://i.imgur.com/Z8cYnwz.png" alt="LS Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
                            <span className="text-base transition-all duration-300 tracking-tight">
                                <span className="font-sans font-black text-white tracking-tighter">ESTRUTURA</span>
                                <span className="font-serif text-gold ml-1.5">FOOD</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Especialistas em estruturação e crescimento para negócios do ramo alimentício. Transformamos sua paixão em lucro real.
                        </p>
                        <div className="flex gap-4">
                            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold hover:text-dark transition-all duration-300 rounded-full text-gray-400">
                                <Instagram size={18} />
                            </a>
                            <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold hover:text-dark transition-all duration-300 rounded-full text-gray-400">
                                <MessageSquare size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif font-bold mb-6 uppercase tracking-widest text-sm text-gold">Links Rápidos</h4>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-serif font-bold mb-6 uppercase tracking-widest text-sm text-gold">Serviços</h4>
                        <ul className="space-y-4 text-sm text-gray-400 uppercase tracking-widest">
                            <li><Link to="/services#consultoria" className="hover:text-white transition-colors">Consultoria Especializada</Link></li>
                            <li><Link to="/services#marketing" className="hover:text-white transition-colors">Marketing Digital 360º</Link></li>
                            <li><Link to="/services#comercial" className="hover:text-white transition-colors">Equipe Comercial</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-serif font-bold mb-6 uppercase tracking-widest text-sm text-gold">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <Phone className="text-gold mt-1 group-hover:scale-110 transition-transform" size={16} />
                                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{CONTACT_INFO.phone}</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Mail className="text-gold mt-1 group-hover:scale-110 transition-transform" size={16} />
                                <span className="text-gray-400 group-hover:text-white transition-colors text-sm break-all">{CONTACT_INFO.email}</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <MapPin className="text-gold mt-1 group-hover:scale-110 transition-transform" size={16} />
                                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-500 uppercase tracking-[0.2em]">
                    <p>© {currentYear} LS Estrutura Food. Todos os direitos reservados.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
