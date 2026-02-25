import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import Counter from '../components/common/Counter';

const Home = () => {

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <section className="relative h-auto md:h-[90vh] flex items-start justify-center overflow-hidden pt-32 pb-20 md:items-center md:pt-20 md:pb-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2070"
            alt="Industrial Kitchen"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={1} className="animate-fade-in-up">
            ESTRUTURAÇÃO E <span className="text-gold">CRESCIMENTO</span> <br className="lg:hidden" /> PARA SEU NEGÓCIO
          </Heading>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide animate-fade-in-up delay-200">
            Tráfego Pago, Social Media, Consultoria Estratégica e Equipes Comerciais para escalar seus resultados no ramo alimentício.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-400">
            <Button to="/services" variant="primary" className="min-w-[200px]">
              Nossos Serviços
            </Button>
            <Button to="/contact" variant="outline" className="min-w-[200px]">
              Fale Conosco
            </Button>
          </div>

        </div>
      </section>

      {/* About Preview */}
      <Section darker>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/30 group-hover:border-gold/60 transition-colors duration-500"></div>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                alt="About Us"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold/30 group-hover:border-gold/60 transition-colors duration-500"></div>
          </div>
          <div className="space-y-6">
            <Heading level={2}>
              Estratégia e <span className="text-gold">Resultados</span>
            </Heading>
            <p className="text-gray-400 text-lg leading-relaxed">
              A LS Estrutura Food é especialista em estruturação e crescimento de empresas do ramo alimentício. Oferecemos soluções completas em marketing digital, consultoria e gestão comercial para levar seu negócio ao próximo nível.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Estratégias de Tráfego Pago',
                'Gestão de Social Media',
                'Consultoria e Equipes Comerciais'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-300 group">
                  <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center mr-4 group-hover:border-gold transition-colors">
                    <Check className="text-gold" size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/about" variant="outline" className="border-none px-0 text-gold hover:bg-transparent hover:text-white group">
              Saiba Mais <ArrowRight className="ml-2 inline group-hover:translate-x-2 transition-transform" size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section dark>
        <div className="text-center mb-20">
          <Heading level={2}>
            Nossas <span className="text-gold">Soluções</span>
          </Heading>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Oferecemos um portfólio completo de serviços para acelerar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Tráfego Pago',
              desc: 'Campanhas estratégicas para atrair mais clientes e aumentar suas vendas.',
              icon: '📈',
            },
            {
              title: 'Social Media',
              desc: 'Gestão profissional de redes sociais para fortalecer sua marca.',
              icon: '📱',
            },
            {
              title: 'Consultoria',
              desc: 'Análise e estruturação completa para o crescimento do seu negócio.',
              icon: '🤝',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-darker p-10 border border-white/5 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {service.icon}
              </div>
              <Heading level={3} className="group-hover:text-gold transition-colors relative z-10">
                {service.title}
              </Heading>
              <p className="text-gray-400 mb-8 text-base leading-relaxed relative z-10">
                {service.desc}
              </p>
              <Button to="/services" variant="outline" className="px-0 py-0 text-xs border-none hover:bg-transparent relative z-10 text-gray-500 hover:text-white group-hover:translate-x-2">
                Conhecer Detalhes <ArrowRight className="ml-2 inline" size={14} />
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats/CTA */}
      <section className="py-24 bg-gold text-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
          <div className="text-[20rem] font-serif font-bold whitespace-nowrap -rotate-12 translate-y-20">LS FOOD LS FOOD</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: 50, suffix: '+', label: 'Empresas Atendidas' },
              { val: 200, suffix: '%', label: 'Crescimento Médio' },
              { val: 100, suffix: '%', label: 'Foco em Resultados' },
              { val: 24, suffix: '/7', label: 'Suporte Estratégico' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <Counter end={stat.val} suffix={stat.suffix} />
                <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;
