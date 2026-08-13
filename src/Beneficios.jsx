import React, { useState } from 'react';
import {
  ChevronRight, Pill, GraduationCap, Sparkles,
  HeartPulse, Glasses, Scissors, LayoutGrid
} from 'lucide-react';

// 2. DATA: PARCEIROS DE VANTAGENS EXTRAÍDOS DOS FOLHETOS (REDE CONVENIADA)
const LISTA_PARCEIROS = [
  {
    nome: "Droga Raia",
    categoria: "Farmácia",
    desconto: "Até 50%",
    sufixoDesconto: "de desconto",
    descricao: "Ser AMAS é cuidar da sua saúde com mais economia, benefícios e praticidade nas unidades da Raia.",
    icone: <Pill className="w-8 h-8 text-red-600" />
  },
  {
    nome: "Drogarias PoupeRio — Pavuna",
    categoria: "Farmácia",
    desconto: "Até 70%",
    sufixoDesconto: "de desconto",
    descricao: "Quem é AMAS encontra aqui mais cuidado, economia e praticidade para a saúde e o bem-estar do dia a dia.",
    icone: <Pill className="w-8 h-8 text-red-500" />
  },
  {
    nome: "Drogarias Pacheco",
    categoria: "Farmácia",
    desconto: "Até 50%",
    sufixoDesconto: "de desconto",
    descricao: "Ser AMAS é ter acesso a mais cuidado, conveniência e benefícios em saúde nas unidades da Drogarias Pacheco.",
    icone: <Pill className="w-8 h-8 text-blue-500" />
  },
  {
    nome: "Pharma Zoe",
    categoria: "Farmácia",
    desconto: "10%",
    sufixoDesconto: "de desconto",
    descricao: "Quem tem AMAS tem acesso a cuidado personalizado na Pharma Zoe, com soluções feitas sob medida para você.",
    icone: <Pill className="w-8 h-8 text-pink-500" />
  },
  {
    nome: "Colégio Mercúrio",
    categoria: "Educação",
    desconto: "Até 40%",
    sufixoDesconto: "de desconto",
    descricao: "Com AMAS, a educação ganha mais acesso, qualidade e oportunidades no Colégio Mercúrio.",
    icone: <GraduationCap className="w-8 h-8 text-amber-700" />
  },
  {
    nome: "Digital Nave",
    categoria: "Educação",
    desconto: "50%",
    sufixoDesconto: "de desconto na matrícula",
    descricao: "Os associados AMAS ampliam sua capacitação profissional de forma completa, online e acessível no Digital Nave.",
    icone: <GraduationCap className="w-8 h-8 text-indigo-600" />
  },
  {
    nome: "YES! Idiomas",
    categoria: "Educação",
    desconto: "Bolsa de 50%",
    sufixoDesconto: "de desconto",
    descricao: "Com AMAS, o aprendizado de idiomas alcança uma excelência e comunicação prática desde a primeira aula na Yes! Idiomas.",
    icone: <GraduationCap className="w-8 h-8 text-red-600" />
  },
  {
    nome: "Saúde Pés e Mãos",
    categoria: "Bem-estar e Saúde",
    desconto: "15%",
    sufixoDesconto: "de desconto",
    descricao: "Ser AMAS garante mais cuidado, prevenção e saúde completa para mãos e pés na Saúde Pés e Mãos.",
    icone: <Sparkles className="w-8 h-8 text-emerald-600" />
  },
  {
    nome: "Ative Life Cosméticos",
    categoria: "Bem-estar e Saúde",
    desconto: "Até 20%",
    sufixoDesconto: "de desconto",
    descricao: "Ter AMAS é desfrutar de cuidado e relaxamento que transformam a rotina em um verdadeiro ritual de SPA com a Ative Life.",
    icone: <Sparkles className="w-8 h-8 text-purple-600" />
  },
  {
    nome: "Ótica Boa Visão",
    categoria: "Ótica",
    desconto: "A partir de 15%",
    sufixoDesconto: "de desconto",
    descricao: "Quem tem AMAS tem mais cuidado com a visão, qualidade e bem-estar na Ótica Boa Visão de Meriti.",
    icone: <Glasses className="w-8 h-8 text-blue-600" />
  },
  {
    nome: "Hospital Daniel Lipp",
    categoria: "Emergência",
    desconto: "20%",
    sufixoDesconto: "de desconto",
    descricao: "Quem tem AMAS conta com atendimento de emergência a qualquer hora com segurança e cuidado no Hospital Daniel Lipp.",
    icone: <HeartPulse className="w-8 h-8 text-cyan-700" />
  },
  {
    nome: "Raquel Groomer",
    categoria: "Pet Service",
    desconto: "Até 20%",
    sufixoDesconto: "de desconto",
    descricao: "Ser AMAS é cuidado contínuo e bem-estar para o seu pet com carinho e excelência na Raquel Groomer.",
    icone: <Scissors className="w-8 h-8 text-gray-700" />
  }
];

export default function AmasBeneficiosPage({ setPaginaAtiva }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const categorias = ['Todos', 'Farmácia', 'Educação', 'Bem-estar e Saúde', 'Ótica', 'Pet Service'];

  const parceirosFiltrados = categoriaAtiva === 'Todos'
    ? LISTA_PARCEIROS
    : LISTA_PARCEIROS.filter((parceiro) => parceiro.categoria === categoriaAtiva);

  return (
    <div className="bg-[#f4f6f9] pb-16 font-sans text-[#2c3e50] antialiased">

      {/* BANNER */}
      <section className="bg-[#0b1f52] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative text-center sm:text-left">
        <div className="max-w-5xl mx-auto space-y-2">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 font-medium">
            <span onClick={() => setPaginaAtiva('inicio')} className="hover:text-white transition-colors cursor-pointer">Início</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#ff6b00] font-semibold">Benefícios</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Vantagens e Benefícios</h1>
          <p className="text-gray-300 text-xs sm:text-base max-w-xl font-normal">
            Aproveite descontos exclusivos em nossa ampla rede de parceiros conveniados.
          </p>
        </div>
      </section>

      {/* SECÇÃO 2: PARCEIROS DE VANTAGENS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="w-full overflow-x-auto pb-2 scrollbar-none">
          <div className="flex w-max min-w-full items-center justify-start sm:justify-center gap-1.5">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  categoriaAtiva === cat
                    ? 'bg-[#0b1f52] text-white border-[#0b1f52] shadow-sm'
                    : 'bg-white text-[#0b1f52] border-gray-200 hover:border-[#ff6b00] hover:text-[#ff6b00]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {parceirosFiltrados.map((parceiro, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <div className="p-6 flex flex-col items-center text-center justify-center bg-white flex-grow min-h-[140px]">
                <div className="p-3.5 bg-gray-50 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  {parceiro.icone}
                </div>
                <h3 className="mt-3 font-bold text-lg text-[#0b1f52] tracking-tight">
                  {parceiro.nome}
                </h3>
              </div>

              <div className="flex justify-center -mb-3 relative z-10">
                <span className="bg-[#0b1f52] text-white font-bold text-[11px] px-4 py-1 rounded-full shadow-sm">
                  {parceiro.categoria}
                </span>
              </div>

              <div className="bg-[#ff6b00] text-white p-5 pt-6 flex flex-col items-center text-center space-y-2">
                <div className="text-white font-medium text-xs">
                  Até <span className="text-2xl font-black mx-0.5 tracking-tighter text-white">{parceiro.desconto.replace('Até ', '')}</span> {parceiro.sufixoDesconto}
                </div>
                <p className="text-[11px] text-orange-50 leading-relaxed max-w-xs opacity-90">
                  {parceiro.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {parceirosFiltrados.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 max-w-sm mx-auto mt-6 space-y-2">
            <LayoutGrid className="w-8 h-8 text-gray-300 mx-auto" />
            <p className="text-gray-400 font-medium text-sm">Nenhum parceiro nesta categoria.</p>
          </div>
        )}
      </section>

    </div>
  );
}
