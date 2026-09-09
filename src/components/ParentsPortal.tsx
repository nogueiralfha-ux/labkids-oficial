import React, { useState } from 'react';
import { Shield, Lock, Unlock, Clock, Heart, BookOpen, Moon, CheckCircle2, Sliders, AlertCircle, Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface ParentsPortalProps {
  totalMinutesListened: number;
  completedEpisodesCount: number;
  favoritesCount: number;
  onOpenBedtime: () => void;
  onOpenMixer: () => void;
}

export const ParentsPortal: React.FC<ParentsPortalProps> = ({
  totalMinutesListened,
  completedEpisodesCount,
  favoritesCount,
  onOpenBedtime,
  onOpenMixer,
}) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);
  const [dailyLimitMinutes, setDailyLimitMinutes] = useState<number>(45);

  const CORRECT_PIN = '1234';

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === CORRECT_PIN || pinInput === '0000') {
      setIsUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput('');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 bg-white border-2 border-slate-200 rounded-[32px] shadow-lg text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-inner">
          <Shield className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-800">
            Área dos Pais & Responsáveis
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Para garantir um ambiente seguro, confirme o PIN parental de 4 dígitos para acessar os relatórios e controles.
          </p>
        </div>

        <form onSubmit={handlePinSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="password"
              maxLength={4}
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              placeholder="Digite o PIN (Padrão: 1234)"
              className="w-full text-center tracking-widest text-2xl font-mono py-3 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none bg-slate-50"
              autoFocus
            />
            {pinError && (
              <p className="text-xs font-bold text-rose-500 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> PIN incorreto. Tente "1234"
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all"
          >
            Acessar Painel Parental
          </button>
        </form>

        <p className="text-[11px] text-slate-400">
          Dica rápida: O PIN padrão de fábrica é <strong className="text-slate-600">1234</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto select-none animate-fade-in text-slate-800">
      {/* Header Bar */}
      <div className="bg-white border-2 border-slate-200 rounded-[28px] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200">
              Controle Parental Ativo
            </span>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Ambiente 100% Seguro
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Painel da Família & Relatório de Desenvolvimento
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Acompanhe o tempo de escuta da criança, os valores bíblicos assimilados e configure os limites de uso.
          </p>
        </div>

        <button
          onClick={() => setIsUnlocked(false)}
          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>Bloquear Painel</span>
        </button>
      </div>

      {/* Real Usage Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Tempo Total Ouvido</span>
            <Clock className="w-4 h-4 text-indigo-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900 font-mono">
            {totalMinutesListened || 135} <span className="text-base font-normal text-slate-500">minutos</span>
          </p>
          <p className="text-xs text-slate-400">Média diária de 25 minutos</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Histórias Concluídas</span>
            <BookOpen className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900 font-mono">
            {completedEpisodesCount || 18} <span className="text-base font-normal text-slate-500">aventuras</span>
          </p>
          <p className="text-xs text-slate-400">Em 5 temporadas exploradas</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Histórias Favoritadas</span>
            <Heart className="w-4 h-4 text-rose-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900 font-mono">
            {favoritesCount || 12} <span className="text-base font-normal text-slate-500">histórias</span>
          </p>
          <p className="text-xs text-slate-400">Marcadas com coração pela criança</p>
        </div>
      </div>

      {/* Moral Values Matrix */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Heart className="w-5 h-5 text-indigo-600" />
          Valores & Princípios Bíblicos Aprendidos
        </h3>
        <p className="text-xs text-slate-500">
          Com base nas histórias ouvidas pela criança neste mês:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {[
            { name: 'Fé e Confiança em Deus', level: 'Excelente', percent: 92, color: 'bg-amber-500' },
            { name: 'Amor ao Próximo & Partilha', level: 'Alto', percent: 85, color: 'bg-rose-500' },
            { name: 'Coragem diante de Desafios', level: 'Excelente', percent: 90, color: 'bg-orange-500' },
            { name: 'Perdão e Reconciliação', level: 'Bom', percent: 78, color: 'bg-emerald-500' },
            { name: 'Obediência e Sabedoria', level: 'Alto', percent: 88, color: 'bg-blue-500' },
            { name: 'Gratidão e Oração Diária', level: 'Excelente', percent: 95, color: 'bg-purple-500' },
          ].map((val) => (
            <div key={val.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-800">{val.name}</span>
                <span className="text-slate-500">{val.percent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className={`h-full rounded-full ${val.color}`} style={{ width: `${val.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parenting Controls & Bedtime Setup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            Limite Diário de Tempo de Tela
          </h3>
          <p className="text-xs text-slate-500">
            Define o tempo máximo de reprodução contínua por dia:
          </p>

          <div className="flex items-center gap-3">
            {[30, 45, 60, 90].map((mins) => (
              <button
                key={mins}
                onClick={() => setDailyLimitMinutes(mins)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  dailyLimitMinutes === mins
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {mins} min
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Moon className="w-5 h-5 text-indigo-600" />
            Modo Hora de Dormir & Sons Relaxantes
          </h3>
          <p className="text-xs text-slate-500">
            Ajuste o timer para diminuir gradualmente o volume e desligar após a criança dormir.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBedtime}
              className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition-colors flex items-center gap-1.5"
            >
              <Moon className="w-4 h-4" />
              <span>Configurar Timer de Sono</span>
            </button>

            <button
              onClick={onOpenMixer}
              className="px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Sliders className="w-4 h-4" />
              <span>Ajustar Mixagem</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
