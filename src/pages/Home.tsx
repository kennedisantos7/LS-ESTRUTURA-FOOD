import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Briefcase, Globe, TrendingUp, ArrowUpRight, Utensils, ChefHat, ShoppingBag, Users, Target, ShieldCheck } from 'lucide-react';
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
                <Heading level={1} className="!mb-4 !leading-[1.1] !font-sans !tracking-tight text-white normal-case !text-2xl md:!text-3xl lg:!text-4xl">
                  Estrutura comercial e digital para operações food que querem escalar com <span className="italic text-gold font-serif">previsibilidade</span> e <span className="text-white underline decoration-gold/30">margem real</span>
                </Heading>
                <p className="text-sm md:text-lg text-gray-400 max-w-md md:max-w-xl lg:max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
                  Implantamos o motor comercial, organizamos aquisição própria e estruturamos processos para transformar crescimento em lucro consistente.
                </p>
              </div>

              <Button to="/contact" variant="primary" className="w-full sm:w-auto !rounded-md !px-6 !py-3 !text-sm md:!px-10 md:!py-4 md:!text-base !lowercase first-letter:uppercase hover:scale-105 transition-transform">
                Solicitar Diagnóstico Estratégico
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
                    Mais de <span className="text-white font-bold">50 empresas</span> e negócios já evoluíram com a LS.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
              Estrutura Comercial, Aquisição Estratégica e <span className="text-terracotta">Gestão Operacional</span>
            </Heading>
            <div className="space-y-4 text-lg leading-relaxed text-dark/80">
              <p>
                Operações food não escalam por mais posts ou anúncios. Escalam quando comercial, aquisição e operação funcionam como um sistema.
              </p>
              <p>
                A LS Estrutura Food implanta o motor completo de crescimento da sua empresa. Do diagnóstico estratégico à organização de processos, tecnologia e equipe, estruturamos o modelo que sustenta escala com previsibilidade e margem real.
              </p>
              <p className="font-semibold text-dark">
                Não entregamos campanhas isoladas. Implantamos estrutura para transformar demanda em lucro consistente.
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Marketing 360 – Posicionamento e Aquisição',
                'Direção Empresarial – Da Operação à Escala',
                'Tecnologia e Automação'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center font-medium group text-sm uppercase tracking-wider text-dark">
                  <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center mr-4 group-hover:bg-terracotta transition-colors">
                    <Check className="text-terracotta group-hover:text-white" size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/services#metodo" variant="outline" className="!border-terracotta !text-terracotta hover:!bg-terracotta hover:!text-white group">
              Conheça Nosso Método de Estruturação <ArrowRight className="ml-2 inline group-hover:translate-x-2 transition-transform" size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section dark>
        <div className="text-center mb-12 lg:mb-20">
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
              title: 'Marketing 360',
              subtitle: 'Posicionamento e Aquisição',
              desc: 'Estruturamos a presença digital da sua marca para atrair, converter e fidelizar clientes.',
              icon: <Globe size={32} />,
              link: 'marketing'
            },
            {
              title: 'Direção Empresarial',
              subtitle: 'Da Operação à Escala',
              desc: 'Organizamos o crescimento da sua empresa do modelo operacional ao processo de vendas.',
              icon: <ChefHat size={32} />,
              link: 'direcao'
            },
            {
              title: 'Tecnologia e Automação',
              subtitle: 'Ativos Digitais Próprios',
              desc: 'Implantamos ativos digitais próprios que aumentam controle e margem.',
              icon: <TrendingUp size={32} />,
              link: 'tecnologia',
              features: [
                'Catálogo digital',
                'Sites e landing pages',
                'Automação de atendimento e CRM',
                'Integrações estratégicas',
                'Sistemas que reduzem esforço operacional'
              ]
            },
          ].map((service, index) => (
            <Link
              key={index}
              to={`/services#${service.link}`}
              className="group relative bg-[#071622] p-10 border border-white/5 hover:border-gold/40 transition-all duration-500 overflow-hidden flex flex-col h-full block"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:scale-110 transition-all duration-500 text-gold group-hover:text-dark">
                  <div className="transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>

                <Heading level={3} className="!text-xl !font-sans group-hover:text-gold transition-colors duration-300 !mb-1">
                  {service.title}
                </Heading>
                <div className="text-gold/80 text-sm font-medium mb-4 uppercase tracking-wider">
                  {service.subtitle}
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed font-light">
                  {service.desc}
                </p>

                {service.features && (
                  <ul className="mb-8 space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-[10px] text-gray-400 uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-gold/20 transition-colors">
                  <span className="inline-flex items-center text-[10px] tracking-[0.2em] font-medium uppercase text-gray-500 group-hover:text-white transition-all group-hover:translate-x-2">
                    Conhecer Detalhes <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={12} />
                  </span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold/5 rounded-tl-full translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Cases de Sucesso */}
      <Section cream className="relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 lg:mb-16 gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <span className="text-terracotta text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Experiência Aplicada em Estruturação e Crescimento</span>
            <Heading level={2} className="!mb-0 !text-4xl md:!text-5xl">
              Cases de <span className="text-terracotta italic font-serif">Sucesso</span>
            </Heading>
          </div>
          <Button to="/services#metodo" variant="outline" className="!border-terracotta !text-terracotta hover:!bg-terracotta hover:!text-white group !rounded-full !px-8 text-xs md:text-sm">
            Conhecer Nossa Metodologia <ArrowRight className="ml-2 inline group-hover:translate-x-2 transition-transform" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Operação Food com 4 Pontos e Indústria Própria',
              subtitle: 'Arquitetura Comercial + Marketing 360 + Tecnologia',
              category: 'Destaque',
              image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070',
              results: [
                'Estruturação completa',
                'Organização de funil próprio',
                'Consolidação digital',
                'Crescimento estruturado'
              ],
              btnText: 'Ver aplicação completa',
              anchor: 'operacao-food'
            },
            {
              title: 'Experiência em Expansão e Estrutura Comercial',
              subtitle: 'Atuação em operações com múltiplas unidades',
              category: 'Experiência Estratégica',
              image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070',
              results: [
                'Implantação de times e processos comerciais'
              ],
              btnText: 'Conhecer experiência',
              anchor: 'expansao'
            },
            {
              title: 'Crescimento estruturado com Marketing 360',
              subtitle: 'Posicionamento + Aquisição + Conteúdo Estratégico',
              category: 'Marketing 360',
              image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
              results: [],
              btnText: 'Entender como aplicamos',
              anchor: 'marketing-360'
            }
          ].map((project, index) => (
            <Link
              key={index}
              to={`/projects#${project.anchor}`}
              className="group flex flex-col bg-[#051119] rounded-sm overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-gold/30"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-gold text-dark text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-1 bg-gradient-to-b from-[#051119] to-[#020609]">
                <span className="text-gold/60 text-[10px] font-bold uppercase tracking-widest mb-3 block leading-relaxed">{project.subtitle}</span>
                <Heading level={3} className="!text-xl !mb-6 !leading-snug !text-white group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </Heading>

                {project.results && project.results.length > 0 && (
                  <div className="mb-8 space-y-3">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Resultados:</span>
                    <ul className="space-y-2">
                      {project.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start text-xs text-gray-300 font-light">
                          <Check className="text-gold mr-2 flex-shrink-0 mt-0.5" size={14} />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-gold transition-colors pr-4">{project.btnText}</span>
                  <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-dark transition-all duration-500 flex-shrink-0">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Stats/CTA Section - Refactored for High Impact */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-dark overflow-hidden border-t border-white/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <div className="text-[25rem] font-serif font-bold whitespace-nowrap -rotate-12 translate-y-32 text-white">
            LS FOOD LS FOOD
          </div>
        </div>

        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: 50, suffix: '+', label: 'Empresas Atendidas', icon: <Users size={24} /> },
              { prefix: '+', val: 10, suffix: '', label: 'Experiência de Mercado', icon: <TrendingUp size={24} /> },
              { val: 100, suffix: '%', label: 'Foco em Resultados', icon: <Target size={24} /> },
              { prefix: '', val: 24, suffix: '/7', label: 'Suporte Estratégico', icon: <ShieldCheck size={24} /> }
            ].map((stat, i) => (
              <div
                key={i}
                className={`group relative p-8 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-500 ${i < 2 ? 'hidden lg:block md:block' : ''}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-dark transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <Counter
                      end={stat.val}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      className="text-4xl md:text-5xl font-sans font-bold text-white group-hover:text-gold transition-colors"
                    />
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA section removed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
