import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingUp, Briefcase, Globe } from 'lucide-react';
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
      id: 'consultoria',
      title: 'Consultoria Especializada',
      desc: 'Análise e estruturação estratégica completa para o crescimento sustentável do seu negócio. Identificamos gargalos operacionais e oportunidades de mercado para otimizar seus processos e maximizar a lucratividade no ramo alimentício.',
      icon: <Briefcase size={40} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
    },
    {
      id: 'marketing',
      title: 'Marketing Digital 360º',
      desc: 'Uma gestão integrada e multicanal de toda sua presença digital. Unimos tráfego pago estratégico, gestão profissional de redes sociais, branding e automação para criar um ecossistema focado em atração e conversão de clientes.',
      icon: <Globe size={40} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    },
    {
      id: 'comercial',
      title: 'Equipe Comercial',
      desc: 'Recrutamento, treinamento e gestão de times de vendas de alta performance. Implementamos processos eficientes de CRM e técnicas avançadas de negociação para transformar leads em clientes fiéis e escalar seu faturamento.',
      icon: <TrendingUp size={40} />,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2032',
    },
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-20 scale-110 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/70 to-dark"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Heading level={1} className="mb-4">
            Nossos <span className="text-gold">Serviços</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Estratégias completas e personalizadas para acelerar o crescimento do seu negócio no mercado alimentício.
          </p>
        </div>
      </section>

      {/* Services List */}
      <Section dark>
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`flex flex-col lg:flex-row items-center gap-16 scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-sm shadow-2xl border border-white/5 aspect-video">
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-flex items-center justify-center p-4 bg-darker rounded-sm border border-gold/20 text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                  {service.icon}
                </div>
                <Heading level={2} className="mb-0">
                  {service.title}
                </Heading>
                <p className="text-gray-400 leading-relaxed text-lg font-light">
                  {service.desc}
                </p>
                <div className="pt-4">
                  <Button to="/contact" variant="outline" className="px-6 py-2 text-xs">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section darker className="text-center">
        <Heading level={2} className="mb-6">
          Pronto para <span className="text-gold">Escalar?</span>
        </Heading>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Agende uma consultoria gratuita e descubra o potencial de crescimento do seu negócio.
        </p>
        <Button to="/contact" variant="primary">
          Falar com um Especialista
        </Button>
      </Section>
    </div>
  );
};

export default Services;
