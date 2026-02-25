import React from 'react';
import { Award, Users, Target } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';

const About = () => {
  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
            alt="About Hero"
            className="w-full h-full object-cover opacity-20 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/70 to-dark"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Heading level={1} className="mb-4">
            Sobre <span className="text-gold">Nós</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Uma história de dedicação, inovação e compromisso com a excelência no ramo alimentício.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <Heading level={2}>
              Nossa <span className="text-gold">História</span>
            </Heading>
            <p className="text-gray-400 text-lg leading-relaxed">
              A LS Estrutura Food nasceu com o propósito de revolucionar o mercado de alimentação através de estratégias digitais e gestão eficiente. Identificamos que muitos negócios do setor tinham excelentes produtos, mas falhavam em alcançar seu público e escalar suas vendas.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Hoje, somos referência em estruturação e crescimento de empresas alimentícias. Nossa equipe multidisciplinar combina expertise em marketing digital, tráfego pago, social media e gestão comercial para entregar resultados reais e mensuráveis aos nossos parceiros.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                  alt="Strategy Meeting"
                  className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-gold p-6 text-dark text-center rounded-sm">
                  <div className="text-3xl font-bold font-serif">10+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest">Anos de Experiência</div>
                </div>
              </div>
              <div className="pt-12">
                <img
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000"
                  alt="Digital Growth"
                  className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section darker>
        <div className="text-center mb-20">
          <Heading level={2}>
            Nossos <span className="text-gold">Valores</span>
          </Heading>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Award size={40} />,
              title: 'Resultados',
              desc: 'Nosso foco é gerar crescimento real e mensurável para o seu negócio a cada etapa do processo.'
            },
            {
              icon: <Users size={40} />,
              title: 'Parceria',
              desc: 'Atuamos como uma extensão da sua equipe, totalmente comprometidos com os seus objetivos.'
            },
            {
              icon: <Target size={40} />,
              title: 'Estratégia',
              desc: 'Utilizamos dados e inteligência de mercado para tomar as melhores decisões para o seu crescimento.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-dark p-12 border border-white/5 hover:border-gold/30 transition-all duration-500 group">
              <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <Heading level={3} className="text-white group-hover:text-gold transition-colors">
                {item.title}
              </Heading>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section dark>
        <div className="text-center mb-20">
          <Heading level={2}>
            Nossa <span className="text-gold">Equipe</span>
          </Heading>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Conheça os especialistas que lideram a transformação do seu negócio no mercado alimentício.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              name: 'Carlos Silva',
              role: 'CEO & Estrategista',
              image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
            },
            {
              name: 'Ana Oliveira',
              role: 'Diretora de Marketing',
              image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
            },
            {
              name: 'Kennidi Anderson',
              role: 'Head de Tráfego',
              image: 'https://i.imgur.com/oDX7U5b.png',
            },
            {
              name: 'Juliana Costa',
              role: 'Gestora Comercial',
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
            },
          ].map((member, index) => (
            <div key={index} className="overflow-hidden">
              <div className="relative mb-6 overflow-hidden rounded-sm aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
