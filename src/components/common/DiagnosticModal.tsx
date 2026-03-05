import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle, Building2, Mail, User, TrendingUp, Phone } from 'lucide-react';
import { useDiagnosticModal } from '../../context/DiagnosticModalContext';

const faturamentoOptions = [
    { value: 'ate_10k', label: 'Até R$ 10.000 / mês' },
    { value: '10k_30k', label: 'Entre R$ 10.000 e R$ 30.000 / mês' },
    { value: '50k_100k', label: 'Entre R$ 50.000 e R$ 100.000 / mês' },
    { value: 'mais_100k', label: 'Mais de R$ 100.000 / mês' },
];

const steps = [
    { id: 1, title: 'Dados da Empresa', sub: 'Nos apresente seu negócio', icon: <Building2 size={18} /> },
    { id: 2, title: 'Dados de Contato', sub: 'Como podemos te alcançar?', icon: <Mail size={18} /> },
    { id: 3, title: 'Faturamento', sub: 'Qual o porte do seu negócio?', icon: <TrendingUp size={18} /> },
];

const DiagnosticModal: React.FC = () => {
    const { isOpen, closeModal } = useDiagnosticModal();

    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ empresa: '', responsavel: '', email: '', telefone: '', faturamento: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});

    if (!isOpen) return null;

    const handleClose = () => {
        closeModal();
        setTimeout(() => { setStep(1); setSubmitted(false); setForm({ empresa: '', responsavel: '', email: '', telefone: '', faturamento: '' }); setErrors({}); }, 400);
    };

    const handleChange = (field: string, value: string) => {
        setForm(p => ({ ...p, [field]: value }));
        if (errors[field]) setErrors(p => ({ ...p, [field]: '' }));
    };

    const validateStep = () => {
        const e: Record<string, string> = {};
        if (step === 1) {
            if (!form.empresa.trim()) e.empresa = 'Informe o nome da empresa';
            if (!form.responsavel.trim()) e.responsavel = 'Informe o nome do responsável';
        }
        if (step === 2) {
            if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Informe um e-mail válido';
            if (!form.telefone.trim()) e.telefone = 'Informe um telefone / WhatsApp';
        }
        if (step === 3) {
            if (!form.faturamento) e.faturamento = 'Selecione uma faixa de faturamento';
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const next = () => { if (validateStep()) setStep(s => Math.min(s + 1, 3)); };
    const back = () => { setErrors({}); setStep(s => Math.max(s - 1, 1)); };

    const handleSubmit = () => {
        if (!validateStep()) return;
        const fatLabel = faturamentoOptions.find(o => o.value === form.faturamento)?.label || '';
        const phoneNumber = '5517991625639';
        const message = encodeURIComponent(
            `*Diagnóstico Estratégico — LS Estrutura Food*\n\n` +
            `*Empresa:* ${form.empresa}\n` +
            `*Responsável:* ${form.responsavel}\n` +
            `*E-mail:* ${form.email}\n` +
            `*Telefone:* ${form.telefone}\n` +
            `*Faturamento:* ${fatLabel}\n\n` +
            `Olá! Gostaria de agendar meu diagnóstico estratégico gratuito.`
        );
        setSubmitted(true);
        setTimeout(() => {
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            handleClose();
        }, 1800);
    };

    const progress = ((step - 1) / (steps.length - 1)) * 100;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" role="dialog" aria-modal="true">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

            {/* Card */}
            <div className="relative z-10 w-full max-w-md bg-[#071622] rounded-3xl shadow-[0_0_80px_rgba(196,160,90,0.12)] border border-gold/20 overflow-hidden animate-fade-in-up">

                {/* Golden accent top */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

                {/* Close */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all z-20"
                    aria-label="Fechar"
                >
                    <X size={16} />
                </button>

                {/* Header */}
                <div className="px-8 pt-7 pb-5">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                            <TrendingUp size={16} />
                        </div>
                        <span className="text-gold text-[9px] font-black uppercase tracking-[0.3em]">Diagnóstico Gratuito</span>
                    </div>
                    <h2 className="text-white text-xl md:text-2xl font-serif font-bold leading-tight">
                        Solicite seu <span className="text-gold italic">Diagnóstico</span> Estratégico
                    </h2>
                </div>

                {/* Step indicators */}
                <div className="px-8 pb-6">
                    {/* Labels */}
                    <div className="flex justify-between mb-3">
                        {steps.map(s => (
                            <div key={s.id} className={`flex flex-col items-center gap-1 flex-1 ${s.id === step ? 'opacity-100' : s.id < step ? 'opacity-60' : 'opacity-25'} transition-opacity duration-300`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 transition-all duration-500 ${s.id < step ? 'bg-gold border-gold text-dark' :
                                    s.id === step ? 'bg-gold/10 border-gold text-gold' :
                                        'bg-white/5 border-white/10 text-gray-500'
                                    }`}>
                                    {s.id < step ? <CheckCircle size={14} /> : s.id}
                                </div>
                                <span className={`text-[8px] font-black uppercase tracking-widest text-center leading-tight ${s.id === step ? 'text-gold' : 'text-gray-500'}`}>
                                    {s.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold/60 to-gold rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Form body */}
                <div className="px-8 pb-8">

                    {/* ── Step 1 ── Dados da Empresa */}
                    {step === 1 && !submitted && (
                        <div className="space-y-4 animate-fade-in-up">
                            <p className="text-gray-400 text-xs font-light leading-relaxed mb-5">Nos apresente seu negócio para personalizarmos seu diagnóstico.</p>

                            <div>
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 flex items-center gap-1.5">
                                    <Building2 size={11} /> Nome da Empresa
                                </label>
                                <input
                                    autoFocus
                                    type="text"
                                    value={form.empresa}
                                    onChange={e => handleChange('empresa', e.target.value)}
                                    placeholder="Ex: Chá das Cinco"
                                    className={`w-full bg-white/5 border ${errors.empresa ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/60 transition-all`}
                                />
                                {errors.empresa && <p className="text-red-400 text-[9px] mt-1 font-medium">{errors.empresa}</p>}
                            </div>

                            <div>
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 flex items-center gap-1.5">
                                    <User size={11} /> Nome do Responsável
                                </label>
                                <input
                                    type="text"
                                    value={form.responsavel}
                                    onChange={e => handleChange('responsavel', e.target.value)}
                                    placeholder="Ex: João Silva"
                                    onKeyDown={e => e.key === 'Enter' && next()}
                                    className={`w-full bg-white/5 border ${errors.responsavel ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/60 transition-all`}
                                />
                                {errors.responsavel && <p className="text-red-400 text-[9px] mt-1 font-medium">{errors.responsavel}</p>}
                            </div>
                        </div>
                    )}

                    {/* ── Step 2 ── Dados de Contato */}
                    {step === 2 && !submitted && (
                        <div className="space-y-4 animate-fade-in-up">
                            <p className="text-gray-400 text-xs font-light leading-relaxed mb-5">Como a nossa equipe pode entrar em contato com você?</p>

                            <div>
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 flex items-center gap-1.5">
                                    <Mail size={11} /> E-mail
                                </label>
                                <input
                                    autoFocus
                                    type="email"
                                    value={form.email}
                                    onChange={e => handleChange('email', e.target.value)}
                                    placeholder="contato@suaempresa.com.br"
                                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/60 transition-all`}
                                />
                                {errors.email && <p className="text-red-400 text-[9px] mt-1 font-medium">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 flex items-center gap-1.5">
                                    <Phone size={11} /> Telefone / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    value={form.telefone}
                                    onChange={e => handleChange('telefone', e.target.value)}
                                    placeholder="(11) 99999-9999"
                                    onKeyDown={e => e.key === 'Enter' && next()}
                                    className={`w-full bg-white/5 border ${errors.telefone ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/60 transition-all`}
                                />
                                {errors.telefone && <p className="text-red-400 text-[9px] mt-1 font-medium">{errors.telefone}</p>}
                            </div>
                        </div>
                    )}

                    {/* ── Step 3 ── Faturamento */}
                    {step === 3 && !submitted && (
                        <div className="animate-fade-in-up">
                            <p className="text-gray-400 text-xs font-light leading-relaxed mb-5">Selecione a faixa de faturamento mensal médio da sua operação:</p>

                            <div className="space-y-2.5">
                                {faturamentoOptions.map(option => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => handleChange('faturamento', option.value)}
                                        className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center justify-between group ${form.faturamento === option.value
                                            ? 'bg-gold/15 border-gold/60 text-gold'
                                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-gold/30 hover:text-white'
                                            }`}
                                    >
                                        <span>{option.label}</span>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300 ${form.faturamento === option.value ? 'border-gold bg-gold' : 'border-white/20'
                                            }`}>
                                            {form.faturamento === option.value && <div className="w-2 h-2 rounded-full bg-dark" />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            {errors.faturamento && <p className="text-red-400 text-[9px] mt-2 font-medium">{errors.faturamento}</p>}
                        </div>
                    )}

                    {/* ── Success state ── */}
                    {submitted && (
                        <div className="flex flex-col items-center justify-center py-8 animate-fade-in-up text-center">
                            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                                <CheckCircle size={36} className="text-green-400" />
                            </div>
                            <h3 className="text-white text-lg font-serif font-bold mb-2">Tudo certo, {form.responsavel.split(' ')[0]}!</h3>
                            <p className="text-gray-400 text-sm font-light">Abrindo o WhatsApp com seus dados pré-preenchidos…</p>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    {!submitted && (
                        <div className={`flex gap-3 mt-7 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={back}
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 text-xs font-black uppercase tracking-widest transition-all"
                                >
                                    <ChevronLeft size={16} /> Voltar
                                </button>
                            )}

                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={next}
                                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gold text-dark font-black uppercase tracking-[0.15em] text-xs rounded-xl hover:bg-gold-light transition-all hover:shadow-[0_0_20px_rgba(196,160,90,0.3)] group"
                                >
                                    Continuar <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gold text-dark font-black uppercase tracking-[0.15em] text-xs rounded-xl hover:bg-gold-light transition-all hover:shadow-[0_0_20px_rgba(196,160,90,0.3)] group"
                                >
                                    Enviar pelo WhatsApp <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            )}
                        </div>
                    )}

                    {!submitted && (
                        <p className="text-center text-gray-600 text-[9px] uppercase tracking-widest mt-4">
                            100% gratuito · Sem compromisso · Via WhatsApp
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiagnosticModal;
