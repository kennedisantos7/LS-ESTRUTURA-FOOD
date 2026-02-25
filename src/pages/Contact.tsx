import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import Button from '../components/common/Button';
import { CONTACT_INFO } from '../constants/navigation';

const Contact = () => {
  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-20 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/70 to-dark"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Heading level={1}>
            Entre em <span className="text-gold">Contato</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Estamos prontos para ouvir seus desafios e propor soluções sob medida para o seu negócio.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <div className="bg-darker p-10 rounded-sm shadow-2xl border border-white/5 relative">
            <div className="absolute top-0 left-0 w-1 h-20 bg-gold"></div>
            <Heading level={2} className="mb-10">
              Envie uma <span className="text-gold">Mensagem</span>
            </Heading>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark border border-white/5 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 placeholder:text-gray-700"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark border border-white/5 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 placeholder:text-gray-700"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-dark border border-white/5 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 placeholder:text-gray-700"
                  placeholder="Ex: Consultoria Estratégica"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-dark border border-white/5 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-gold/50 transition-all duration-300 resize-none placeholder:text-gray-700"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-dark font-bold uppercase tracking-[0.3em] text-xs py-5 hover:bg-white transition-all duration-500 flex items-center justify-center group"
              >
                Enviar Mensagem
                <Send size={14} className="ml-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <Heading level={2} className="mb-0">
                Informações de <span className="text-gold">Contato</span>
              </Heading>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Agende uma conversa com nossos especialistas. Estamos estrategicamente localizados para atender todo o território nacional.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center text-gold border border-gold/10 group-hover:bg-gold group-hover:text-dark transition-all duration-500 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-2">Endereço</h3>
                    <p className="text-gray-300 font-light leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center text-gold border border-gold/10 group-hover:bg-gold group-hover:text-dark transition-all duration-500 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-2">Canais Diretos</h3>
                    <p className="text-gray-300 font-light leading-relaxed">{CONTACT_INFO.phone}</p>
                    <p className="text-gray-500 text-sm italic">Atendimento via WhatsApp disponível</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center text-gold border border-gold/10 group-hover:bg-gold group-hover:text-dark transition-all duration-500 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-2">E-mail</h3>
                    <p className="text-gray-300 font-light leading-relaxed">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
