import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingUp, ShoppingBag, ChefHat, Check } from 'lucide-react';
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
      id: 'diagnostico',
      title: 'Diagnóstico e Padronização Operacional',
      desc: 'Análise profunda de margens, desperdícios e processos. Criamos os manuais de execução que permitem sua operação rodar com precisão, garantindo que a qualidade e o lucro não dependam da sorte ou do talento individual.',
      icon: <ChefHat size={40} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
    },
    {
      id: 'trafego',
      title: 'Tráfego Pago p/ Delivery (ROI Direto)',
      desc: 'Estratégias de aquisição focadas no raio de atuação do seu negócio. Otimizamos suas campanhas para reduzir o custo por pedido e elevar seu ticket médio, direcionando o tráfego para seus canais diretos de venda.',
      icon: <ShoppingBag size={40} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    },
    {
      id: 'comercial',
      title: 'Implantação de Equipe de Vendas',
      desc: 'Transformamos seu WhatsApp em um canal de faturamento previsível. Montamos, recrutamos e treinamos sua equipe comercial para converter cada lead em faturamento e recorrência de pedidos.',
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
            className="w-full h-full object-cover opacity-20 scale-110"
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
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
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

      {/* Programa Estrutura Food */}
      <Section cream id="metodo" className="border-y border-dark/5">
        <div className="text-center mb-20">
          <span className="text-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-4 block">O Caminho para a Escala</span>
          <Heading level={2}>
            O Programa <span className="text-terracotta italic font-serif">Estrutura Food</span>
          </Heading>
          <p className="text-dark/60 max-w-2xl mx-auto mt-6 text-lg font-light">
            Um método de 5 etapas desenhado exclusivamente para negócios que faturam, mas ainda não têm domínio total da sua margem e operação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Diagnóstico', desc: 'Mapeamento de gargalos e margens reais.' },
            { step: '02', title: 'Estrutura', desc: 'Implantação da célula de vendas e CRM.' },
            { step: '03', title: 'Ticket Médio', desc: 'Ajuste de oferta para elevar lucratividade.' },
            { step: '04', title: 'Tráfego', desc: 'Escala de pedidos via canais diretos.' },
            { step: '05', title: 'Expansão', desc: 'Formatação para franquias ou novas unidades.' }
          ].map((phase, i) => (
            <div key={i} className="bg-white p-8 rounded-sm border border-dark/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <span className="text-5xl font-black text-dark/5 absolute -top-2 -right-2 group-hover:text-terracotta/10 transition-colors">{phase.step}</span>
              <h4 className="text-dark font-bold text-sm uppercase tracking-widest mb-4 relative z-10">{phase.title}</h4>
              <p className="text-dark/60 text-xs leading-relaxed relative z-10">{phase.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section darker className="text-center">
        <Heading level={2} className="mb-6">
          Sua Operação com <span className="text-gold italic font-serif">Previsibilidade</span>
        </Heading>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Agende um diagnóstico gratuito e descubra os pontos cegos que estão travando a sua lucratividade.
        </p>
        <Button to="/contact" variant="primary">
          Solicitar Diagnóstico Estrutural
        </Button>
      </Section>
    </div>
  );
};

export default Services;
