import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingUp, Globe, ChefHat, Check } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import Button from '../components/common/Button';

const Services = () => {
  const { hash } = useLocation();

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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070',
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Heading level={1} className="!text-white mb-4 !font-serif">
            Nossas <span className="text-gold italic">Soluções</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Implantamos o motor comercial e tecnológico para operações food que buscam escala previsível e lucratividade real.
          </p>
        </div>
      </section>

      {/* Services List */}
      <Section dark>
        <div className="space-y-24 lg:space-y-40">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 scroll-mt-24 lg:scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className="w-full lg:w-1/2">
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
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
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
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Metodo Section Re-styled */}
      <Section cream id="metodo" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="text-center mb-16 lg:mb-24">
          <span className="text-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Arquitetura de Crescimento</span>
          <Heading level={2} className="!text-dark !text-5xl">
            O Nosso <span className="text-terracotta italic font-serif">Método</span>
          </Heading>
          <p className="text-dark/60 max-w-2xl mx-auto mt-6 text-lg font-light">
            Uma jornada estruturada para tirar sua operação do improviso e colocá-la na rota da escala lucrativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: '01', title: 'Imersão', desc: 'Diagnóstico profundo de margens e gargalos.' },
            { step: '02', title: 'Estrutura', desc: 'Implantação de processos e CRM comercial.' },
            { step: '03', title: 'Oferta', desc: 'Ajuste de mix e valor para elevar ticket médio.' },
            { step: '04', title: 'Escala', desc: 'Expansão via tráfego e canais proprietários.' },
            { step: '05', title: 'Gestão', desc: 'Análise de dados para crescimento contínuo.' }
          ].map((phase, i) => (
            <div key={i} className="group relative">
              <div className="text-6xl font-serif italic text-dark/5 absolute -top-8 left-0 group-hover:text-terracotta/10 transition-colors">{phase.step}</div>
              <div className="relative pt-4 border-t border-dark/10 group-hover:border-terracotta transition-colors duration-500">
                <h4 className="text-dark font-bold text-xs uppercase tracking-widest mb-3">{phase.title}</h4>
                <p className="text-dark/70 text-sm leading-relaxed font-light">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark className="text-center bg-[#020609]">
        <div className="max-w-4xl mx-auto py-12">
          <Heading level={2} className="mb-6 !text-5xl">
            Sua Operação com <span className="text-gold italic font-serif">Previsibilidade</span>
          </Heading>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-xl font-light">
            Agende um diagnóstico estratégico gratuito e descubra agora como transformar sua operação food em um motor de lucro.
          </p>
          <Button to="/contact" variant="primary" className="!px-12 !py-5 !text-lg shadow-xl shadow-gold/5">
            Solicitar Diagnóstico Estratégico
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Services;
