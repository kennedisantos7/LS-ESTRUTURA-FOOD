import React from 'react';
import { Award, Users, Target, Check, Globe, TrendingUp, ShieldCheck, Database } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';

const About = () => {
  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0 text-center opacity-5 pointer-events-none select-none">
          <div className="text-[30rem] font-serif font-bold whitespace-nowrap -rotate-12 translate-y-20">ESTRUTURA</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Sobre a LS Estrutura Food</span>
          <Heading level={1} className="mb-4 !text-4xl md:!text-6xl max-w-4xl mx-auto">
            Estrutura estratégica aplicada ao crescimento de <span className="text-gold">operações alimentícias</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>
      </section>

      {/* Story & Experience */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                A LS Estrutura Food nasceu da experiência prática em expansão, gestão comercial e estruturação de negócios.
              </p>
              <p>
                Ao atuar diretamente em operações do setor alimentício, identificamos um padrão: empresas com bom produto, boa demanda e potencial de crescimento, mas sem estrutura comercial, digital e operacional para sustentar escala.
              </p>

              <div className="py-8 border-y border-white/10 flex flex-col gap-2">
                <span className="text-3xl font-serif italic text-white">"Não faltava venda. <span className="text-gold">Faltava sistema."</span></span>
              </div>

              <p>
                Foi a partir dessa lacuna que estruturamos um modelo próprio de crescimento integrado, unindo direção empresarial, marketing 360 e tecnologia aplicada para gerar previsibilidade e margem real.
              </p>
              <p>
                Hoje, atuamos na organização estratégica de operações food que desejam crescer com controle, dados e estrutura.
              </p>

              <p className="text-white font-bold uppercase tracking-widest text-sm pt-4">
                Não somos agência. <span className="text-gold">Somos arquitetura de crescimento aplicada.</span>
              </p>
            </div>
          </div>

          <div className="bg-[#0a1a29] p-8 md:p-12 border border-white/5 relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full translate-x-12 -translate-y-12"></div>

            <Heading level={2} className="!text-2xl mb-8">
              Experiência <span className="text-gold">Acumulada</span>
            </Heading>

            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-10 block">10+ anos de atuação em:</span>

            <ul className="space-y-6 mb-12">
              {[
                'Expansão e estruturação empresarial',
                'Implantação de processos comerciais',
                'Marketing digital orientado a ROI',
                'Gestão e organização de equipes',
                'Estruturação para múltiplas unidades e expansão'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-1 group-hover:bg-gold transition-colors">
                    <Check className="text-gold group-hover:text-dark" size={12} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm italic text-gray-500">
                Nossa atuação integra visão empresarial e execução digital.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section cream>
        <div className="text-center mb-12 lg:mb-20">
          <span className="text-terracotta text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Fundamentos</span>
          <Heading level={2} className="!text-dark">
            Princípios que guiam nosso <span className="text-terracotta">Trabalho</span>
          </Heading>
          <div className="w-20 h-1 bg-terracotta mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck size={40} />,
              title: 'Resultado com Estrutura',
              desc: 'Crescimento sustentável exige processo, indicadores e controle de margem.'
            },
            {
              icon: <Users size={40} />,
              title: 'Parceria Estratégica',
              desc: 'Não atuamos como fornecedor. Atuamos como extensão estratégica da operação.'
            },
            {
              icon: <Database size={40} />,
              title: 'Decisão Baseada em Dados',
              desc: 'Toda estrutura é construída com base em indicadores reais, não suposições.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-12 border border-dark/5 hover:border-terracotta/20 transition-all duration-500 group shadow-sm hover:shadow-xl flex flex-col items-center text-center">
              <div className="text-terracotta mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <Heading level={3} className="!text-xl !text-dark group-hover:text-terracotta transition-colors mb-4">
                {item.title}
              </Heading>
              <p className="text-dark/60 leading-relaxed font-light text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section dark>
        <div className="text-center mb-12 lg:mb-20">
          <Heading level={2}>
            Nosso Time de <span className="text-gold">Especialistas</span>
          </Heading>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
            Conheça quem coordena o time LS Estrutura Food.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Lucas Silveira',
              role: 'CEO e Estrategista Empresarial',
              image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
              bio: 'Especialista em gestão de alta performance e expansão de unidades, focado em transformar gargalos operacionais em lucro real.'
            },
            {
              name: 'Kenidi Anderson',
              role: 'Co-fundador e Head de Tráfego e Tecnologia',
              image: 'https://i.imgur.com/oDX7U5b.png',
              bio: 'Arquiteto de stack tecnológica e aquisição direta, domina a engenharia de tráfego focada em escala de delivery e ativação de leads.'
            },
            {
              name: 'Sarah Frutuoso',
              role: 'Head de Marketing Digital e Posicionamento',
              image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
              bio: 'Estrategista de marca responsável por criar o posicionamento que diferencia operações food no mercado e constrói autoridade digital.'
            },
            {
              name: 'Mariane Aro',
              role: 'Head de Vendas',
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
              bio: 'Lidera a estruturação da célula comercial, padronizando o atendimento e a conversão do WhatsApp para gerar faturamento recorrente.'
            },
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-sm aspect-[4/5] bg-darker border border-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
              <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">{member.role}</p>
              <div className="h-0.5 w-8 bg-gold/30 mb-4 group-hover:w-full transition-all duration-500"></div>
              <p className="text-gray-400 text-xs leading-relaxed font-light opacity-80">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
