import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingUp, Globe, ChefHat, Check, Search, Settings, Tag, Rocket, BarChart3 } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import Button from '../components/common/Button';
import { useDiagnosticModal } from '../context/DiagnosticModalContext';
import AnimatedSection from '../components/common/AnimatedSection';

const Services = () => {
  const { hash } = useLocation();
  const { openModal } = useDiagnosticModal();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const services = [
    {
      id: 'marketing',
      title: 'Marketing 360',
      subtitle: 'Posicionamento e Aquisição',
      desc: 'Estruturamos a presença digital completa da sua marca. Não fazemos apenas posts; criamos um ecossistema de aquisição focado em atrair, converter e fidelizar o público certo para o seu negócio food.',
      icon: <Globe size={40} />,
      image: '/images/marketing-digital-sites.png',
      features: [
        'Tráfego Pago focado em ROI Direto',
        'Estratégia de Posicionamento e Branding',
        'Social Media com foco em Conversão',
        'Marketing de Influência e Parcerias',
        'Gestão de Presença em Marketplaces'
      ]
    },
    {
      id: 'direcao',
      title: 'Direção Empresarial',
      subtitle: 'Da Operação à Escala',
      desc: 'Organizamos o crescimento da sua empresa de dentro para fora. Do diagnóstico detalhado de margens à estruturação de processos e treinamento de equipe, preparamos seu negócio para escalar sem perder o controle.',
      icon: <ChefHat size={40} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
      features: [
        'Diagnóstico Estratégico de Margens e Custo',
        'Padronização de Processos (SOP)',
        'Treinamento e Recrutamento Comercial',
        'Mentoria em Gestão de Equipes',
        'Planejamento de Expansão e Franquias'
      ]
    },
    {
      id: 'tecnologia',
      title: 'Tecnologia e Automação',
      subtitle: 'Ativos Digitais Próprios',
      desc: 'Liberte-se da dependência total de terceiros. Implantamos tecnologia e automação para otimizar o atendimento, aumentar a margem real e dar total controle sobre os dados do seu cliente.',
      icon: <TrendingUp size={40} />,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2032',
      features: [
        'Catálogo Digital e Cardápio Inteligente',
        'Landing Pages de Alta Conversão',
        'Automação de WhatsApp e CRM',
        'Dashboards de Business Intelligence',
        'Integração de Sistemas e Meios de Pagamento'
      ]
    },
  ];

  return (
    <div className="bg-dark text-white font-sans">
      {/* Hero */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-[#020609] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-[0.15] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020609] via-transparent to-[#020609]"></div>
        </div>
        <AnimatedSection animation="zoom-in" className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 text-terracotta text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-5">
            <span className="w-8 h-px bg-terracotta/60 inline-block" />
            Arquitetura de Crescimento
            <span className="w-8 h-px bg-terracotta/60 inline-block" />
          </span>
          <Heading level={1} className="!text-white mb-4 !font-serif">
            O Nosso <span className="text-terracotta italic">Método</span>
          </Heading>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Uma jornada estruturada para tirar sua operação do improviso e colocá-la na rota da escala lucrativa.
          </p>
        </AnimatedSection>
      </section>

      {/* Metodo Section – logo após o hero */}
      <section id="metodo" className="relative bg-dark overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-24 scroll-mt-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.025] overflow-hidden">
          <span className="text-[18rem] font-serif font-bold text-white whitespace-nowrap -rotate-6">MÉTODO</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            <div className="hidden lg:block absolute top-[3.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {[
                { step: '01', title: 'Imersão', desc: 'Diagnóstico profundo de margens, gargalos e oportunidades reais.', icon: <Search size={22} />, iconBg: 'bg-gold/15', iconColor: 'text-gold', border: 'border-gold/30 hover:border-gold/60', dotColor: 'bg-gold', grad: 'from-gold/[0.15] to-transparent' },
                { step: '02', title: 'Estrutura', desc: 'Implantação de processos comerciais e CRM orientado a conversão.', icon: <Settings size={22} />, iconBg: 'bg-terracotta/15', iconColor: 'text-terracotta', border: 'border-terracotta/30 hover:border-terracotta/60', dotColor: 'bg-terracotta', grad: 'from-terracotta/[0.15] to-transparent' },
                { step: '03', title: 'Oferta', desc: 'Ajuste de mix e valor para elevar ticket médio e margem real.', icon: <Tag size={22} />, iconBg: 'bg-gold/15', iconColor: 'text-gold', border: 'border-gold/30 hover:border-gold/60', dotColor: 'bg-gold', grad: 'from-gold/[0.15] to-transparent' },
                { step: '04', title: 'Escala', desc: 'Expansão via tráfego pago, canais proprietários e aquisição direta.', icon: <Rocket size={22} />, iconBg: 'bg-terracotta/15', iconColor: 'text-terracotta', border: 'border-terracotta/30 hover:border-terracotta/60', dotColor: 'bg-terracotta', grad: 'from-terracotta/[0.15] to-transparent' },
                { step: '05', title: 'Gestão', desc: 'Análise contínua de indicadores para crescimento previsível e consistente.', icon: <BarChart3 size={22} />, iconBg: 'bg-gold/15', iconColor: 'text-gold', border: 'border-gold/30 hover:border-gold/60', dotColor: 'bg-gold', grad: 'from-gold/[0.15] to-transparent' },
              ].map((phase, i) => (
                <AnimatedSection
                  key={i}
                  animation="zoom-in"
                  delay={i * 150}
                  className="group relative flex lg:flex-col gap-3 lg:gap-0 items-start lg:items-center h-full"
                >
                  {i < 4 && (
                    <div className="lg:hidden absolute left-[1.2rem] top-12 w-px h-[calc(100%+1.5rem)] bg-gradient-to-b from-white/20 via-white/10 to-transparent z-0" />
                  )}

                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full ${phase.iconBg} border ${phase.border} flex items-center justify-center ${phase.iconColor} group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-sm`}>
                      {phase.icon}
                    </div>
                    <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full ${phase.dotColor} flex items-center justify-center shadow-lg border-2 border-dark`}>
                      <span className="text-[9px] font-black text-dark leading-none">{i + 1}</span>
                    </div>
                  </div>

                  <div className={`lg:mt-6 flex-1 w-full bg-gradient-to-b ${phase.grad} border ${phase.border} rounded-xl p-5 lg:p-6 transition-all duration-500 group-hover:-translate-y-1 lg:group-hover:-translate-y-2 group-hover:shadow-2xl lg:text-center backdrop-blur-[2px] h-full`}>
                    <div className="text-4xl lg:text-5xl font-serif italic font-bold text-white/[0.08] group-hover:text-white/[0.12] transition-colors duration-500 leading-none mb-1 select-none">
                      {phase.step}
                    </div>
                    <h4 className={`${phase.iconColor} font-black text-[11px] uppercase tracking-[0.25em] mb-2`}>
                      {phase.title}
                    </h4>
                    <p className="text-gray-200 text-sm leading-relaxed font-normal group-hover:text-white transition-colors duration-300">
                      {phase.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="mt-14 md:mt-20 text-center">
            <div className="inline-block px-6 py-3 border border-white/5 rounded-full bg-white/[0.02]">
              <p className="text-gray-500 text-xs font-light tracking-wide italic">
                Cada etapa é implementada com método, dados e visão de longo prazo.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* Services List */}
      <Section dark>
        <AnimatedSection animation="zoom-in" className="text-center mb-12 lg:mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.35em] mb-4 block">Soluções Integradas</span>
          <Heading level={2} className="!text-4xl md:!text-5xl lg:!text-6xl">
            Nossas <span className="text-gold">Soluções</span>
          </Heading>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Cada solução é uma peça da nossa arquitetura de crescimento, aplicada de forma integrada à sua operação.
          </p>
        </AnimatedSection>

        <div className="space-y-24 lg:space-y-40">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 scroll-mt-24 lg:scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <AnimatedSection animation={index % 2 === 0 ? 'enter-left' : 'enter-right'} className="w-full lg:w-1/2">
                <div className="relative group p-4 border border-gold/10 bg-gold/5 rounded-sm">
                  <div className="relative overflow-hidden aspect-[4/3] rounded-sm">
                    <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold/20 -z-10 group-hover:border-gold/40 transition-colors"></div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation={index % 2 === 0 ? 'enter-right' : 'enter-left'} className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-gold mb-2">
                  <div className="p-3 bg-gold/10 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">{service.subtitle}</span>
                </div>

                <Heading level={2} className="!mb-4 !text-4xl">
                  {service.title}
                </Heading>

                <p className="text-gray-400 leading-relaxed text-lg font-light">
                  {service.desc}
                </p>

                <ul className="space-y-3 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-white/80 group">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mr-3 group-hover:bg-gold transition-colors">
                        <Check className="text-gold group-hover:text-dark" size={10} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark className="text-center bg-[#020609]">
        <AnimatedSection animation="zoom-in" className="max-w-4xl mx-auto py-12">
          <Heading level={2} className="mb-6 !text-5xl">
            Sua Operação com <span className="text-gold italic font-serif">Previsibilidade</span>
          </Heading>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-xl font-light">
            Agende um diagnóstico estratégico gratuito e descubra agora como transformar sua operação food em um motor de lucro.
          </p>
          <Button onClick={openModal} variant="primary" className="!px-12 !py-5 !text-lg shadow-xl shadow-gold/5">
            Solicitar Diagnóstico Estratégico
          </Button>
        </AnimatedSection>
      </Section>
    </div>
  );
};

export default Services;
