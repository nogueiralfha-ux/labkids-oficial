import React, { useState } from 'react';
import { Sparkles, MonitorPlay, BrainCircuit, Star, PlayCircle, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

export function LabKidsLandingPage() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Top Warning Banner */}
      <div className="w-full bg-[#8B2BE2] text-white py-2 flex items-center justify-center text-xs sm:text-sm font-bold tracking-wide">
        <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
        OFERTA DE LANÇAMENTO LAB KIDS • 30 VÍDEOS + QUIZZES COM 70% OFF
        <span className="ml-4 bg-white/20 px-2 py-0.5 rounded-full font-mono text-xs">⏰ Encerra em: 03h : 59m : 00s</span>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-black text-[#8B2BE2] flex items-center gap-2">
            <span className="text-3xl">🔬</span> LabKIDS
          </div>
          <span className="hidden md:inline-flex bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            CIÊNCIA & DESCOBERTAS
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-slate-500 hover:text-slate-800">us English</button>
          <button className="hidden sm:block text-sm font-semibold text-slate-500 hover:text-slate-800">🔐 Entrar (Já sou Aluno)</button>
          <button 
            onClick={() => setIsCheckoutModalOpen(true)}
            className="bg-[#00D49C] text-white px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#00b887] transition-colors shadow-lg shadow-teal-200"
          >
            GARANTIR VAGA
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full max-w-5xl mx-auto px-4 py-16 text-center flex flex-col items-center">
        
        <div className="bg-purple-50 text-purple-600 border border-purple-200 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 mb-8 shadow-sm">
          <Star className="w-4 h-4" />
          O Melhor e Mais Completo Conteúdo Educativo Infantil do Brasil
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight font-brand">
          Aqui os Pequeninos Aprendem Sobre <span className="text-[#8B2BE2]">Ciência</span> e os <span className="text-[#8B2BE2]">Mistérios do Planeta</span> de Forma Divertida em...
        </h1>

        <h2 className="text-3xl md:text-4xl font-black text-orange-500 mb-6 flex items-center justify-center gap-3">
          🔬 30 VÍDEOS EDUCATIVOS FULL HD + 90 QUIZZES!
        </h2>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10 font-medium">
          Troque as telas vazias e vícios da internet por um universo interativo onde seu filho aprende sobre o corpo humano, espaço, animais e muito mais de maneira lúdica e segura.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => setIsCheckoutModalOpen(true)}
          className="bg-gradient-to-r from-[#00D49C] to-teal-500 text-white px-8 py-5 rounded-2xl font-black text-lg md:text-xl uppercase tracking-wider hover:scale-105 transition-transform shadow-2xl shadow-teal-300 flex items-center gap-3 border-b-4 border-teal-600 active:border-b-0 active:translate-y-1"
        >
          <PlayCircle className="w-8 h-8" />
          QUERO GARANTIR O ACESSO AGORA
        </button>
        
        <p className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-400">
          <Lock className="w-4 h-4" /> Compra 100% Segura e Acesso Imediato
        </p>

      </main>

      {/* Video / Preview Area */}
      <div className="w-full max-w-4xl mx-auto px-4 pb-20">
        <div className="aspect-video bg-slate-900 rounded-[32px] overflow-hidden relative shadow-2xl border-8 border-white">
          {/* Mockup do player de vídeo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-slate-900 flex flex-col items-center justify-center group cursor-pointer">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              <PlayCircle className="w-12 h-12 text-white" />
            </div>
            <p className="text-white font-bold mt-4 tracking-widest text-sm opacity-80">CLIQUE PARA ASSISTIR AO TRAILER</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-black text-center text-slate-800 mb-10 font-brand">Dúvidas Frequentes</h2>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between shadow-sm cursor-pointer hover:border-purple-300 transition-colors">
            <span className="font-bold text-slate-700">Existe alguma mensalidade ou cobrança recorrente?</span>
            <ChevronRight className="w-5 h-5 text-purple-500 rotate-90" />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between shadow-sm cursor-pointer hover:border-purple-300 transition-colors">
            <span className="font-bold text-slate-700">Funciona na Smart TV, Celular e Tablet?</span>
            <ChevronRight className="w-5 h-5 text-purple-500 rotate-90" />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between shadow-sm cursor-pointer hover:border-purple-300 transition-colors">
            <span className="font-bold text-slate-700">E se meu filho não gostar? Tenho garantia?</span>
            <ChevronRight className="w-5 h-5 text-purple-500 rotate-90" />
          </div>
        </div>
      </section>

      {/* Footer Exactly like Vercel Site */}
      <footer className="w-full bg-white border-t-4 border-amber-400 py-12 text-center text-xs text-slate-500 relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-sky-500"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div>

          <p className="font-black text-slate-800 font-brand text-lg uppercase">
            TOON TALES KIDS • A Bíblia em Áudio Infantil
          </p>

          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            "Histórias que ensinam, aventuras que transformam!" — Baseado fielmente nos textos bíblicos.<br/>
            Desenvolvido para crianças de 6 a 12 anos e suas famílias em Português Brasileiro (PT-BR).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-400 pt-6">
            <span className="hover:text-purple-600 cursor-pointer">Início</span>
            <span>•</span>
            <span className="hover:text-purple-600 cursor-pointer">Histórias</span>
            <span>•</span>
            <span className="hover:text-purple-600 cursor-pointer">Temporadas</span>
            <span>•</span>
            <span className="hover:text-purple-600 cursor-pointer">Personagens</span>
            <span>•</span>
            <span className="hover:text-purple-600 cursor-pointer">Heróis da Fé</span>
            <span>•</span>
            <span className="hover:text-purple-600 cursor-pointer">Área dos Pais</span>
            <span>•</span>
            <span className="hover:text-purple-600 cursor-pointer">Vitrine</span>
          </div>

        </div>

        {/* WhatsApp/Chat Widget Bubble from Screenshot */}
        <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#00D49C] rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-6 h-6 bg-white rounded-full relative">
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rotate-45"></div>
          </div>
        </div>
      </footer>

      {/* Checkout Modal (Mesmo de antes, mas no estilo LabKids) */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsCheckoutModalOpen(false)}></div>
          
          <div className="relative bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border-4 border-purple-200">
            <div className="text-center mb-6">
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black inline-block mb-3">🔒 CHECKOUT 100% SEGURO</div>
              <h3 className="text-2xl font-black text-slate-800">Finalizar Inscrição</h3>
              <p className="text-purple-600 font-bold mt-1">Plano LabKids Acesso Total</p>
              <p className="text-lg font-black text-slate-900">R$ 97,00 <span className="text-sm font-normal text-slate-500 line-through">R$ 297,00</span></p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Nome Completo</label>
                <input type="text" placeholder="Seu nome" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">E-mail para Acesso</label>
                <input type="email" placeholder="seu@email.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Forma de Pagamento</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-3 bg-teal-500 text-white rounded-xl font-bold text-sm">PIX</button>
                  <button className="py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm">Cartão</button>
                </div>
              </div>

              <button 
                onClick={async () => {
                  try {
                    const res = await fetch('/api/checkout', { method: 'POST' });
                    const data = await res.json();
                    if(data.success) window.location.href = data.redirectUrl || '/obrigado';
                  } catch(e) {
                    alert("Erro ao processar");
                  }
                }}
                className="w-full bg-[#00D49C] text-white py-4 rounded-xl font-black uppercase tracking-wider mt-4 hover:bg-teal-500 transition-colors"
              >
                Confirmar e Liberar Acesso
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
