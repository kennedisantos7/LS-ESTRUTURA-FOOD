import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Briefcase, Globe, TrendingUp, ArrowUpRight, Utensils, ChefHat, ShoppingBag } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import Counter from '../components/common/Counter';

const Home = () => {

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-0 md:pt-40 md:pb-24 bg-dark">
        {/* Subtle Background Pattern/Logo */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none select-none hidden lg:block">
          <div className="text-[40rem] font-serif font-bold -rotate-12 translate-x-1/4 -translate-y-1/4">LS</div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-start">

            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start space-y-8 animate-fade-in-up text-center lg:text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gold/30 text-gold text-[10px] md:text-xs font-bold uppercase tracking-widest bg-gold/5">
                Consultoria e Gestão
              </div>

              <div className="space-y-4 w-full">
                <h2 className="text-white text-lg md:text-2xl font-serif font-medium tracking-wide uppercase opacity-90">
                  LS ESTRUTURA E ESTRATÉGIA
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent opacity-50 mx-auto lg:mx-0"></div>
                <Heading level={1} className="!mb-4 !leading-[1.1] !font-sans !tracking-tight text-white normal-case !text-4xl md:!text-6xl lg:!text-6xl">
                  Sua operação food com <span className="italic text-gold font-serif">previsibilidade</span> e <span className="text-white underline decoration-gold/30">margem real</span>
                </Heading>
                <p className="text-sm md:text-lg text-gray-400 max-w-md md:max-w-xl lg:max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
                  Não somos apenas uma agência. Implantamos o motor comercial, organizamos seus processos e escalamos empresa Food com foco total em ticket médio e lucro.
                </p>
              </div>

              <Button to="/contact" variant="primary" className="w-full sm:w-auto !rounded-md !px-10 !py-4 !text-base !lowercase first-letter:uppercase hover:scale-105 transition-transform">
                Aproveitar oportunidade
              </Button>

              {/* Stats/Info Section - Hidden or Stacked on Mobile if it takes too much space, or shown below CTA */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10 w-full">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Check className="text-gold" size={16} />
                  </div>
                  <p className="text-xs text-gray-400 leading-snug">
                    <span className="text-white font-bold">Líderes e Gestores</span> de empresas com faturamento em escala.
                  </p>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <ArrowRight className="text-gold" size={16} />
                  </div>
                  <p className="text-xs text-gray-400 leading-snug">
                    Mais de <span className="text-white font-bold">50 empresas</span> e negócios que evoluíram com a LS.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Content - Responsive Behavior */}
            <div className="relative w-full mt-8 lg:mt-0 animate-fade-in-up delay-300 max-w-[320px] md:max-w-sm lg:max-w-[350px] mx-auto lg:ml-auto">
              <div className="relative z-10 w-full aspect-[4/5] flex items-end justify-center overflow-hidden lg:rounded-lg shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000"
                  alt="Team"
                  className="w-full h-full object-cover transition-all duration-700 object-top"
                />
                {/* Overlay Gradient for mobile "team below" look */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
              </div>

              {/* Pagination Dots (Style Reference) */}
              <div className="flex justify-center gap-2 mt-4 lg:hidden">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-4 h-1.5 rounded-full bg-gold"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </div>

              {/* Decorative elements - Desktop Only */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-gold/20 hidden lg:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-r-4 border-t-4 border-gold/20 hidden lg:block"></div>
            </div>

          </div>
        </div>
      </section>

      {/* About Preview */}
      <Section cream>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-terracotta group-hover:border-terracotta/60 transition-colors duration-500"></div>
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://i.imgur.com/va0lZ8H.png"
                alt="Estrutura Food Operacional"
                className="w-full h-auto transition-all duration-700 transform hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-terracotta group-hover:border-terracotta/60 transition-colors duration-500"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-4">Arquitetura de Crescimento</h2>
            <Heading level={2}>
              Estrutura Comercial e <span className="text-terracotta">Gestão Operacional</span>
            </Heading>
            <p className="text-lg leading-relaxed text-dark/80">
              A LS Estrutura Food não entrega apenas posts ou anúncios. Nós implantamos o motor de vendas do seu negócio. Do diagnóstico de processos à formação de equipes, criamos o modelo escalável que sua marca food precisa para expandir.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Padronização de Processos de Venda',
                'Tráfego Pago com foco em ROI e Ticket Médio',
                'Implantação de Equipes Comerciais (Internas ou 3ª)',
                'Formatação de Modelo para Franquias/Expansão'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center font-medium group text-sm uppercase tracking-wider text-dark">
                  <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center mr-4 group-hover:bg-terracotta transition-colors">
                    <Check className="text-terracotta group-hover:text-white" size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/about" variant="outline" className="!border-terracotta !text-terracotta hover:!bg-terracotta hover:!text-white group">
              Nossa História <ArrowRight className="ml-2 inline group-hover:translate-x-2 transition-transform" size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      < Section dark >
        <div className="text-center mb-20">
          <Heading level={2}>
            Nossas <span className="text-gold">Soluções</span>
          </Heading>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Oferecemos um portfólio completo de serviços para acelerar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Diagnóstico e Estrutura',
              desc: 'Identificação de gargalos operacionais e desenho da estratégia de escala para o modelo food.',
              icon: <ChefHat size={32} />,
            },
            {
              title: 'Tráfego e Conversão Delivery',
              desc: 'Aquisição hiper-segmentada focada em aumentar o volume de pedidos e o ticket médio direto.',
              icon: <ShoppingBag size={32} />,
            },
            {
              title: 'Implantação de Equipe Vendas',
              desc: 'Montagem e treinamento de times focados em converter leads em faturamento recorrente.',
              icon: <TrendingUp size={32} />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#071622] p-10 border border-white/5 hover:border-gold/40 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:scale-110 transition-all duration-500 text-gold group-hover:text-dark">
                  <div className="transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>

                <Heading level={3} className="!text-2xl !font-sans group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </Heading>

                <p className="text-gray-400 mb-8 text-base leading-relaxed font-light">
                  {service.desc}
                </p>

                <Button to="/services" variant="outline" className="!px-0 !py-0 !border-none !text-xs !tracking-[0.2em] !bg-transparent hover:!text-white text-gray-500 group-hover:translate-x-2 transition-all">
                  Conhecer Detalhes <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={14} />
                </Button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold/5 rounded-tl-full translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cases de Sucesso */}
      <Section cream className="overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-4">Crescimento Comprovado</h2>
            <Heading level={2} className="mb-0">
              Cases de <span className="text-terracotta italic font-serif">Sucesso</span>
            </Heading>
          </div>
          <Button to="/projects" variant="outline" className="!border-terracotta !text-terracotta hover:!bg-terracotta hover:!text-white group">
            Ver todos os cases <ArrowRight className="ml-2 inline group-hover:translate-x-2 transition-transform" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Posicionamento e Branding',
              client: 'Chá das Cinco',
              category: 'Estratégia de Marca',
              image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070',
              stat: 'Premium',
              anchor: 'cha-das-cinco'
            },
            {
              title: 'Estruturação de Equipes',
              client: 'Franquias BK',
              category: 'Consultoria Especializada',
              image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070',
              stat: 'Escalável',
              anchor: 'franquias-bk'
            },
            {
              title: 'Crescimento de 300% em Vendas',
              client: 'Pizza Hut Marketing',
              category: 'Marketing Digital 360º',
              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2070',
              stat: '+300%',
              anchor: 'pizza-hut'
            }
          ]
            .map((project, index) => (
              <Link
                key={index}
                to={`/projects#${project.anchor}`}
                className="group relative aspect-[4/5] overflow-hidden bg-dark block cursor-pointer"
              >
                {/* Image with Grayscale to Color Transition */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent group-hover:opacity-60 transition-opacity"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-gold text-dark text-[10px] font-bold uppercase tracking-widest mb-4">
                      {project.category}
                    </span>
                    <Heading level={3} className="!text-2xl !leading-tight text-white mb-2">
                      {project.title}
                    </Heading>
                    <p className="text-gray-400 text-sm font-light">
                      {project.client}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">Resultado</span>
                      <span className="text-gold font-bold">{project.stat}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </Section>

      {/* Stats/CTA */}
      < section className="py-24 bg-gold text-dark relative overflow-hidden" >
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
          <div className="text-[20rem] font-serif font-bold whitespace-nowrap -rotate-12 translate-y-20">LS FOOD LS FOOD</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: 50, suffix: '+', label: 'Empresas Atendidas' },
              { val: 50, suffix: '%', label: 'Crescimento Médio' },
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

      </section >
    </div >
  );
};

export default Home;
