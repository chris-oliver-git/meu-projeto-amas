import { useState } from 'react';
import { ChevronRight, LayoutGrid } from 'lucide-react';

// Benefícios conferidos com o guia atualizado em 21/10/2026.
const LISTA_PARCEIROS = [
  {
    "nome": "Droga Raia",
    "categoria": "Farmácia",
    "desconto": "Até 50%",
    "sufixoDesconto": "de desconto",
    "descricao": "Até 50% em medicamentos e itens de perfumaria. Consulte as orientações no atendimento da farmácia.",
    "url": "https://www.drogaraia.com.br/",
    "logo": "/logos-parceiros/droga-raia.jpg",
    "enquadramentoLogo": {
      "width": 239.645,
      "height": 299.556,
      "left": -16.864,
      "top": -82.13
    }
  },
  {
    "nome": "Drogarias PoupeRio — Pavuna",
    "categoria": "Farmácia",
    "desconto": "Até 70%",
    "sufixoDesconto": "de desconto",
    "descricao": "Até 70% em genéricos, até 25% em medicamentos isentos de prescrição e até 5% em perfumaria. Condições na unidade Pavuna.",
    "url": "https://instagram.com/drogariapouperiopavuna/",
    "logo": "/logos-parceiros/poupe-rio-pavuna.jpg",
    "enquadramentoLogo": {
      "width": 212.878,
      "height": 266.097,
      "left": -7.556,
      "top": -65.861
    }
  },
  {
    "nome": "Drogarias Pacheco",
    "categoria": "Farmácia",
    "desconto": "Até 50%",
    "sufixoDesconto": "de desconto",
    "descricao": "Até 50% em medicamentos, produtos diversos e medicamentos isentos de prescrição. Consulte o atendimento da farmácia.",
    "url": "https://www.drogariaspacheco.com.br/",
    "logo": "/logos-parceiros/drogarias-pacheco.jpg",
    "enquadramentoLogo": {
      "width": 206.435,
      "height": 258.044,
      "left": -2.103,
      "top": -65.803
    }
  },
  {
    "nome": "Pharma Zoe",
    "categoria": "Farmácia",
    "desconto": "10%",
    "sufixoDesconto": "de desconto",
    "descricao": "10% em produtos manipulados.",
    "url": "https://instagram.com/pharma_zoe/",
    "logo": "/logos-parceiros/pharma-zoe.jpg",
    "enquadramentoLogo": {
      "width": 224.688,
      "height": 280.86,
      "left": -13.245,
      "top": -88.412
    }
  },
  {
    "nome": "Colégio Mercúrio",
    "categoria": "Educação",
    "desconto": "Até 40%",
    "sufixoDesconto": "de desconto",
    "descricao": "Até 40% de desconto nas mensalidades dos cursos.",
    "url": "https://instagram.com/colegiomercuriooficial/",
    "logo": "/logos-parceiros/colegio-mercurio.jpg",
    "enquadramentoLogo": {
      "width": 204.934,
      "height": 256.167,
      "left": -4.934,
      "top": -51.546
    }
  },
  {
    "nome": "Digital Nave",
    "categoria": "Educação",
    "desconto": "50%",
    "sufixoDesconto": "de desconto na matrícula",
    "descricao": "50% na matrícula de todos os cursos e condições especiais de pagamento. Na matrícula em idiomas, curso de Informática gratuito por 6 meses.",
    "url": "https://instagram.com/digitalnavebr/",
    "logo": "/logos-parceiros/digital-nave.jpg",
    "enquadramentoLogo": {
      "width": 116.776,
      "height": 145.97,
      "left": 39.72,
      "top": -14.381
    }
  },
  {
    "nome": "YES! Idiomas",
    "categoria": "Educação",
    "desconto": "50%",
    "sufixoDesconto": "nas mensalidades",
    "descricao": "100% de desconto na matrícula e 50% nas mensalidades de Inglês e Espanhol.",
    "url": "https://instagram.com/yessjdemeriti/",
    "logo": "/logos-parceiros/yes-idiomas.jpg",
    "enquadramentoLogo": {
      "width": 203.193,
      "height": 253.991,
      "left": -0.405,
      "top": -65.536
    }
  },
  {
    "nome": "Saúde Pés e Mãos",
    "categoria": "Bem-estar e Saúde",
    "desconto": "15%",
    "sufixoDesconto": "de desconto",
    "descricao": "15% em produtos e serviços de prevenção, avaliação e tratamento de patologias dos pés e mãos.",
    "url": "https://instagram.com/saude_pes_e_maos/",
    "logo": "/logos-parceiros/saude-pes-e-maos.jpg",
    "enquadramentoLogo": {
      "width": 165.306,
      "height": 206.633,
      "left": 12.296,
      "top": -38.01
    }
  },
  {
    "nome": "Ative Life Cosméticos",
    "categoria": "Bem-estar e Saúde",
    "desconto": "Até 20%",
    "sufixoDesconto": "de desconto",
    "descricao": "15% em cada produto e 20% no combo com 4 produtos. O guia também prevê um brinde exclusivo para o paciente AMAS.",
    "url": "https://instagram.com/ativelifeterapia/",
    "logo": "/logos-parceiros/ative-life.jpg",
    "enquadramentoLogo": {
      "width": 211.903,
      "height": 264.879,
      "left": -2.354,
      "top": -73.188
    }
  },
  {
    "nome": "Ótica Boa Visão de Meriti",
    "categoria": "Ótica",
    "desconto": "A partir de 15%",
    "sufixoDesconto": "de desconto",
    "descricao": "Descontos a partir de 15% em produtos e serviços ópticos.",
    "url": "https://instagram.com/oticaboavisaomeriti/",
    "logo": "/logos-parceiros/otica-boa-visao.jpg",
    "enquadramentoLogo": {
      "width": 214.215,
      "height": 267.769,
      "left": -9.058,
      "top": -87.512
    }
  },
  {
    "nome": "Hospital Daniel Lipp",
    "categoria": "Emergência",
    "desconto": "20%",
    "sufixoDesconto": "de desconto",
    "descricao": "20% sobre a tabela particular em atendimentos, consultas, exames e especialidades médicas.",
    "url": "https://instagram.com/hdaniellipp/",
    "logo": "/logos-parceiros/hospital-daniel-lipp.jpg",
    "enquadramentoLogo": {
      "width": 201.129,
      "height": 251.411,
      "left": -0.068,
      "top": -63.38
    }
  },
  {
    "nome": "Raquel Groomer",
    "categoria": "Pet Service",
    "desconto": "20%",
    "sufixoDesconto": "nos pacotes Clubinho",
    "descricao": "20% nos pacotes Clubinho Raquel Groomer e 10% no banho avulso.",
    "url": "https://instagram.com/raaquelgroomer/",
    "logo": "/logos-parceiros/raquel-groomer.jpg",
    "enquadramentoLogo": {
      "width": 144.116,
      "height": 180.146,
      "left": 25.051,
      "top": -42.167
    }
  },
  {
    "nome": "Escola Vida",
    "categoria": "Educação",
    "desconto": "Até 15%",
    "sufixoDesconto": "na primeira parcela",
    "descricao": "10% nas demais parcelas e uma blusa no ato da matrícula de 2026. Educação Infantil ao 9º ano do Ensino Fundamental.",
    "url": "https://instagram.com/escolavidacear/",
    "logo": "/logos-parceiros/escola-vida.jpg",
    "enquadramentoLogo": {
      "width": 196.797,
      "height": 245.997,
      "left": 2.755,
      "top": -62.501
    }
  },
  {
    "nome": "Ótica Visão Central",
    "categoria": "Ótica",
    "desconto": "R$ 100",
    "sufixoDesconto": "de desconto",
    "descricao": "R$ 100,00 de desconto ou uma armação Executive na compra, conforme o guia.",
    "url": "https://instagram.com/oticavisaocentral/",
    "logo": "/logos-parceiros/otica-visao-central.jpg",
    "enquadramentoLogo": {
      "width": 202.88,
      "height": 253.601,
      "left": 0.0,
      "top": -69.577
    }
  },
  {
    "nome": "LB Central de Treinamento",
    "categoria": "Academia",
    "desconto": "R$ 65,00",
    "sufixoDesconto": "por mês",
    "descricao": "Mensalidade de R$ 65,00 para associados Cartão AMAS, com matrícula e avaliação gratuitas.",
    "url": "https://instagram.com/lb_centrotreinamento/",
    "logo": "/logos-parceiros/lb-centro-treinamento.jpg",
    "enquadramentoLogo": {
      "width": 233.261,
      "height": 291.577,
      "left": -14.975,
      "top": -63.431
    }
  }
];

export default function AmasBeneficiosPage({ setPaginaAtiva }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const categorias = ['Todos', ...new Set(LISTA_PARCEIROS.map((parceiro) => parceiro.categoria))];

  const parceirosFiltrados = categoriaAtiva === 'Todos'
    ? LISTA_PARCEIROS
    : LISTA_PARCEIROS.filter((parceiro) => parceiro.categoria === categoriaAtiva);

  return (
    <div className="bg-[#f4f6f9] pb-16 font-sans text-[#2c3e50] antialiased">

      {/* BANNER */}
      <section className="bg-[#0b1f52] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative text-center sm:text-left">
        <div className="max-w-5xl mx-auto space-y-2">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 font-medium">
            <button type="button" onClick={() => setPaginaAtiva('inicio')} className="hover:text-white transition-colors cursor-pointer">Início</button>
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
                type="button"
                aria-pressed={categoriaAtiva === cat}
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
          {parceirosFiltrados.map((parceiro) => (
            <div
              key={parceiro.nome}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <div className="p-6 flex flex-col items-center text-center justify-center bg-white min-h-[185px]">
                <div className="relative w-[200px] h-[110px] overflow-hidden bg-white">
                  <img
                    src={parceiro.logo}
                    alt={`Logo ${parceiro.nome}`}
                    decoding="async"
                    className="absolute max-w-none"
                    style={parceiro.enquadramentoLogo}
                  />
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

              <div className="bg-[#ff6b00] text-white p-5 pt-6 flex flex-col items-center text-center gap-2 flex-1">
                <div className="text-white font-medium text-xs">
                  <span className="text-2xl font-black mx-0.5 tracking-tighter text-white">{parceiro.desconto}</span> {parceiro.sufixoDesconto}
                </div>
                <p className="text-[11px] text-orange-50 leading-relaxed max-w-xs opacity-90">
                  {parceiro.descricao}
                </p>
                <a
                  href={parceiro.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mais Informações sobre ${parceiro.nome} (abre em nova aba)`}
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-[#0b1f52] px-6 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#112d75] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Mais Informações
                </a>
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
