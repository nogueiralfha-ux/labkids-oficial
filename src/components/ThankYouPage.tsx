import React from 'react';
import { CheckCircle, ArrowRight, Gift } from 'lucide-react';

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#FFFBEB] text-slate-800 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl shadow-amber-200/50 p-8 md:p-12 text-center border-4 border-emerald-400 animate-fade-in relative overflow-hidden">
        
        {/* Confetti Background Effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

        <CheckCircle className="w-24 h-24 text-emerald-500 mx-auto mb-6 animate-bounce" />
        
        <h1 className="text-4xl md:text-5xl font-black font-brand text-slate-800 mb-4 tracking-tight">
          Parabéns! Sua compra foi confirmada! 🎉
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium">
          O acesso ao <strong>Lab Kids</strong> foi enviado para o seu e-mail. <br className="hidden md:block"/>
          Procure por nossa mensagem na sua caixa de entrada ou spam.
        </p>

        {/* Upsell Offer Area */}
        <div className="mt-8 bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl border-2 border-amber-300 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
            Oferta Exclusiva!
          </div>
          
          <Gift className="w-12 h-12 text-orange-500 mx-auto mb-3" />
          
          <h2 className="text-2xl font-black font-brand text-orange-600 mb-2">
            Complete a Diversão!
          </h2>
          <p className="text-slate-700 text-sm md:text-base mb-6 font-medium">
            Gostaria de adicionar os <strong>Livros Digitais para Colorir</strong> com todas as histórias da Bíblia por apenas <span className="font-black text-green-600">R$ 19,90</span>?
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black rounded-xl hover:scale-105 transition-transform shadow-lg shadow-green-200 flex items-center justify-center gap-2">
              SIM, QUERO ADICIONAR!
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 bg-transparent text-slate-500 font-bold hover:text-slate-700 transition-colors underline decoration-slate-300 underline-offset-4">
              Não, obrigado. Quero apenas o Lab Kids.
            </button>
          </div>
        </div>
        
        {/* Botão de Voltar para facilitar a navegação */}
        <div className="mt-8">
          <a href="/" className="text-purple-600 font-bold hover:text-purple-800 underline">
            &larr; Voltar para a Página Principal
          </a>
        </div>

      </div>
    </div>
  );
}
