import React from 'react';
import { TrendingUp, Smartphone, Users, Briefcase, BarChart } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import Button from '../components/common/Button';

const Services = () => {
  const services = [
    {
      title: 'Tráfego Pago',
      desc: 'Gestão estratégica de anúncios no Google, Facebook, Instagram e TikTok. Criamos campanhas focadas em atrair o público certo e maximizar seu retorno sobre investimento (ROI).',
      icon: <TrendingUp size={40} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    },
    {
      title: 'Social Media',
      desc: 'Gerenciamento completo de redes sociais. Produção de conteúdo, design, agendamento e interação com seguidores para fortalecer sua marca e criar uma comunidade engajada.',
      icon: <Smartphone size={40} />,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2074',
    },
    {
      title: 'Consultoria Estratégica',
      desc: 'Diagnóstico completo do seu negócio e elaboração de planos de ação para crescimento. Identificamos gargalos e oportunidades para otimizar sua operação e aumentar lucros.',
      icon: <BarChart size={40} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
    },
    {
      title: 'Equipe Comercial',
      desc: 'Estruturação e treinamento de times de vendas. Implementamos processos eficientes de CRM e técnicas de negociação para converter leads em clientes fiéis.',
      icon: <Users size={40} />,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2032',
    },
    {
      title: 'Marketing Digital 360º',
      desc: 'Uma abordagem integrada que une SEO, E-mail Marketing, Inbound e Branding para criar uma presença digital sólida e consistente para sua empresa.',
      icon: <Briefcase size={40} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    },
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1553877615-216b4234bcfb?auto=format&fit=crop&q=80&w=2070"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/70 to-dark"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Heading level={1}>
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
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
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
