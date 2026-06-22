import React from 'react';
import { 
  Check, Stethoscope, FlaskConical, 
  Smile, Heart, Gift, Clock
} from 'lucide-react';

export default function AmasPlanosPage({ setPaginaAtiva }) {
  // Base do número da AMAS (Mantido sem mensagem padrão global)
  const WHATSAPP_BASE_URL = "https://wa.me/552136683100";

  const PLANOS = [
    {
      nome: "Amas Prático",
      preco: "33",
      corBorda: "border-blue-600",
      corTopo: "bg-blue-600",
      popular: false,
      beneficios: [
        "Consultas a partir de R$ 30,00",
        "Exames básicos a partir de R$ 24,00",
        "Exames especializados com 24% de desconto",
        "Psicologia — R$ 30/sessão (15 sessões)",
        "Dentista — Flúor, Raspagem e Radiografia grátis",
        "Assistência Funeral completa inclusa"
      ]
    },
    {
      nome: "Amas Cuidado",
      preco: "88",
      corBorda: "border-teal-500",
      corTopo: "bg-teal-500",
      popular: false,
      beneficios: [
        "Consultas a partir de R$ 15,00",
        "Exames básicos a partir de R$ 12,00",
        "Exames especializados com 25% de desconto",
        "Psicologia — R$ 50/sessão (10 sessões)",
        "Dentista — Flúor, Raspagem e Radiografia grátis",
        "Assistência Funeral completa inclusa"
      ]
    },
    {
      nome: "Amas Bem-Estar",
      preco: "100",
      corBorda: "border-[#ff6b00]",
      corTopo: "bg-[#ff6b00]",
      popular: true,
      beneficios: [
        "Consultas a partir de R$ 15,00",
        "Exames básicos a partir de R$ 12,00",
        "Ecocardiograma R$ 70 · Ultrassom R$ 60",
        "Psicologia — R$ 15/sessão (25 sessões)",
        "Dentista — Flúor, Raspagem e Radiografia grátis",
        "Assistência Funeral completa inclusa"
      ]
    },
    {
      nome: "Amas Conforto",
      preco: "145",
      corBorda: "border-purple-600",
      corTopo: "bg-purple-600",
      popular: false,
      beneficios: [
        "Consultas a partir de R$ 15,00",
        "Exames básicos a partir de R$ 12,00",
        "Tomografia R$ 120 · Colonoscopia R$ 140",
        "Psicologia — R$ 15/sessão (35 sessões)",
        "Dentista — Flúor, Raspagem e Radiografia grátis",
        "Assistência Funeral completa inclusa"
      ]
    },
    {
      nome: "Amas Família Plus",
      preco: "240",
      corBorda: "border-emerald-600",
      corTopo: "bg-emerald-600",
      popular: false,
      beneficios: [
        "Consultas básicas Grátis (14 especialidades)",
        "Exames laboratoriais básicos Grátis",
        "Exames especializados com 20% de desconto",
        "Mapeamento de Retina e Audiometria grátis",
        "Dentista — Flúor, Raspagem e Radiografia grátis",
        "Assistência Funeral completa inclusa"
      ]
    }
  ];

  return (
    <div className="bg-[#f8fafc] pb-20 font-sans text-[#2c3e50] antialiased">
      
      {/* SEÇÃO DE INTRODUÇÃO */}
      <section className="text-center pt-12 pb-8 px-4 max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-[#0b1f52] tracking-tight">
          Nossos Planos
        </h1>
        <p className="text-gray-500 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
          Escolha o plano ideal para você e sua família. Todos incluem assistência funeral, odontologia e sorteios mensais.
        </p>
      </section>

      {/* GRADE DE CARDS */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 pt-6">
        <div className="flex flex-wrap justify-center gap-8">
          {PLANOS.map((plano, idx) => {
            
            {/* GERAÇÃO DINÂMICA DA MENSAGEM DO WHATSAPP CONFORME SOLICITADO */}
            const textoMensagem = `Eu visitei o site cartaoamas.com.br e quero saber mais informações sobre o plano ${plano.nome}.`;
            const urlWhatsappDinamica = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(textoMensagem)}`;

            return (
              <div 
                key={idx}
                className={`bg-white rounded-3xl border-2 ${plano.corBorda} shadow-sm w-full sm:w-[360px] flex flex-col justify-between overflow-hidden relative transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  plano.popular ? 'lg:scale-105 z-10' : ''
                }`}
              >
                {/* Tag Superior de Mais Popular */}
                {plano.popular && (
                  <div className="bg-[#ff6b00] text-white text-xs font-black uppercase tracking-widest text-center py-2 absolute top-0 left-0 right-0">
                    Mais Popular
                  </div>
                )}

                {/* Cabeçalho do Card */}
                <div className={`p-6 pt-10 border-b border-gray-100 text-center ${plano.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-black text-[#0b1f52] tracking-tight">{plano.nome}</h3>
                  <div className="mt-4 flex items-baseline justify-center text-gray-500 font-medium text-sm">
                    <span>A partir de</span>
                    <span className="text-4xl font-black text-[#0b1f52] mx-1">R$ {plano.preco}</span>
                    <span>/mês</span>
                  </div>
                </div>

                {/* Lista de Benefícios */}
                <div className="p-6 sm:p-8 space-y-4 flex-grow bg-white">
                  {plano.beneficios.map((ben, i) => (
                    <div key={i} className="flex items-start space-x-3 text-sm font-medium text-gray-600 leading-tight">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                {/* Botão Inferior de Assinatura Dinâmico */}
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <a 
                    href={urlWhatsappDinamica}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full block text-center py-3.5 rounded-xl font-extrabold text-sm tracking-wide transition-all shadow-md cursor-pointer ${
                      plano.popular 
                        ? 'bg-[#ff6b00] hover:bg-[#e05e00] text-white' 
                        : 'bg-[#0b1f52] hover:bg-[#112d75] text-white'
                    }`}
                  >
                    Assinar Agora
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* MINI TAGS DE VANTAGENS */}
      <section className="max-w-5xl mx-auto px-4 pt-16 flex flex-wrap justify-center gap-3">
        {["Orientação Jurídica", "Desconto em Óticas", "Desconto em Farmácias", "E muito mais..."].map((tag, i) => (
          <span key={i} className="bg-orange-50 border border-orange-100 text-[#ff6b00] font-bold text-xs px-4 py-2 rounded-xl shadow-sm">
            ✓ {tag}
          </span>
        ))}
      </section>

      {/* REDE DE ATENDIMENTO */}
      <section className="max-w-5xl mx-auto px-4 pt-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f52] tracking-tight">Rede de Atendimento</h2>
        <p className="text-gray-400 text-sm font-medium mt-1">Todos os planos dão acesso à nossa ampla rede credenciada com benefícios exclusivos.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 text-left">
          {[
            { icon: <Stethoscope className="w-5 h-5 text-white" />, title: "Consultas Médicas", desc: "Mais de 30 especialidades com valores reduzidos e sem carência." },
            { icon: <FlaskConical className="w-5 h-5 text-white" />, title: "Exames e Terapias", desc: "Laboratoriais, imagem e especializados com até 25% de desconto." },
            { icon: <Smile className="w-5 h-5 text-white" />, title: "Odontologia", desc: "Flúor, raspagem e radiografia grátis em todos os planos." },
            { icon: <Heart className="w-5 h-5 text-white" />, title: "Assistência Funeral", desc: "Cobertura completa inclusa para o titular e dependentes." },
            { icon: <Gift className="w-5 h-5 text-white" />, title: "Sorteios Mensais", desc: "Concorra a R$ 5.000, cesta básica e eletrodomésticos todo mês." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-[#ff6b00] rounded-xl flex items-center justify-center shadow-md shadow-orange-500/10">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg text-[#0b1f52] tracking-tight">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARÊNCIAS GERAIS */}
      <section className="max-w-5xl mx-auto px-4 pt-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f52] tracking-tight">Carências Gerais</h2>
        <p className="text-gray-400 text-sm font-medium mt-1">Período até cada benefício ficar disponível após a adesão.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 text-left">
          {[
            { title: "Consultas e Odontologia", tempo: "Imediato" },
            { title: "Exames e Fisioterapia", tempo: "30 dias" },
            { title: "Tomografia e Colonoscopia", tempo: "120 dias" },
            { title: "Cirurgias e Cirurgia Plástica", tempo: "180 dias" },
            { title: "Assistência Funeral (até 60 anos)", tempo: "120 dias" },
            { title: "Assistência Funeral (acima de 60 anos)", tempo: "180 dias" }
          ].map((car, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4">
              <div className="p-3 bg-orange-50 text-[#ff6b00] rounded-xl">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-[#0b1f52] tracking-tight">{car.title}</h5>
                <span className="text-xs font-black text-[#ff6b00] uppercase tracking-wide">{car.tempo}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto pt-10">
          Valores atualizados em 25/03/2026. O Cartão Amas não possui registro na ANS. Os valores podem sofrer alteração sem aviso prévio. Valores em % referem-se a desconto sobre o valor particular.
        </p>
      </section>

    </div>
  );
}