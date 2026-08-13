import React from 'react';
import {
  MapPin, Clock, Phone, ArrowUpRight, ChevronRight
} from 'lucide-react';

// 1. DATA: UNIDADES MÉDICAS OFICIAIS (REDE CREDENCIADA)
const REDE_CREDENCIADA = [
  {
    id: 1,
    nome: "Ápice Saúde - Unidade São João de Meriti",
    descricao: "A Ápice Saúde possui mais de 20 anos de tradição em qualidade e resolutividade no segmento da saúde em São João de Meriti. Oferece consultas, exames, pronto atendimento e cirurgias a preço popular. Conta com equipamentos de alta tecnologia, como o melhor e mais moderno tomógrafo da Baixada Fluminense. Com essa parceria, o Cartão Amas expande o acesso a serviços de excelência para seus beneficiários na região.",
    cidade: "São João de Meriti",
    bairro: "Centro",
    endereco: "Avenida Automóvel Clube, 63 - Centro, São João de Meriti - RJ",
    horario: "Segunda à Sexta (7h00 às 16h30)",
    telefone: "(21) 3668-3100",
    whatsapp: "552136683100",
    especialidades: [
      "Angiologia", "Neurologia", "Alergista", "Oftalmologia",
      "Clínica Geral", "Ortopedia", "Cardiologia", "Otorrinolaringologia",
      "Dermatologia", "Pediatria", "Endocrinologia", "Pneumologia",
      "Fisioterapia", "Psiquiatria", "Gastroenterologia", "Psicologia",
      "Ginecologia", "Raio-X", "Nutrição", "Reumatologia"
    ],
    mapaEmbed: "https://maps.google.com/maps?q=Avenida%20Autom%C3%B3vel%20Clube%2C%2063%20-%20Centro%2C%20S%C3%A3o%20Jo%C3%A3o%20de%20Meriti%20-%20RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 2,
    nome: "Ápice Saúde - Unidade Duque de Caxias",
    descricao: "A Ápice Saúde - Unidade Duque de Caxias está há mais de 26 anos promovendo saúde e bem-estar para seus pacientes.",
    cidade: "Duque de Caxias",
    bairro: "Centro",
    endereco: "Rua Arruda Negreiros, 11 - Centro, Duque de Caxias - RJ",
    horario: "Segunda à Sexta (7:30 às 17:00)",
    telefone: "(21) 2652-5991",
    whatsapp: "552126525991",
    especialidades: [
      "Clínica Geral", "Ginecologia", "Cardiologia", "Mastologista",
      "Dermatologia", "Ortopedia", "Endocrinologia", "Pediatria",
      "Fonoaudiologia", "Psiquiatria", "Gastroenterologia", "Raio-X"
    ],
    mapaEmbed: "https://maps.google.com/maps?q=Rua%20Arruda%20Negreiros%2C%2011%20-%20Centro%2C%20Duque%20de%20Caxias%20-%20RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 3,
    nome: "SEMERJ",
    descricao: "Informamos que devido ao fechamento da unidade de Guadalupe, o Cartão Amas credenciou a SEMERJ como clínica prestadora de serviços na região.",
    cidade: "Rio de Janeiro",
    bairro: "Guadalupe",
    endereco: "Estr. do Camboatá, 2194 - Guadalupe, Rio de Janeiro - RJ",
    horario: "Segunda à Sexta (7:30 às 17:00)",
    telefone: "(21) 3106-6225",
    whatsapp: "5521965065077",
    especialidades: ["Urologia"], // <-- Ajustado para conter SOMENTE Urologia
    mapaEmbed: "https://maps.google.com/maps?q=Estr.%20do%20Camboat%C3%A3%2C%202194%20-%20Guadalupe%2C%20Rio%20de%20Janeiro%20-%20RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 4,
    nome: "Ápice Saúde - Unidade Centro/RJ",
    descricao: "A Ápice Saúde - Unidade Centro/RJ oferece atendimento médico especializado de excelência no coração do Rio de Janeiro, proporcionando consultas de qualidade, conforto e fácil acesso para cuidar do seu bem-estar.",
    cidade: "Rio de Janeiro",
    bairro: "Centro",
    endereco: "Av. Rio Branco, 156 - Centro, Rio de Janeiro - RJ, 20040-003",
    horario: "Segundas e Sextas (8h00 às 17h00)",
    telefone: "(21) 3668-3100",
    whatsapp: "552136683100",
    especialidades: [
      "Clínica Médica", "Neurologia", "Nefrologia"
    ],
    mapaEmbed: "https://maps.google.com/maps?q=Av.%20Rio%20Branco%2C%20156%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020040-003&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export default function AmasRedePage({ setPaginaAtiva }) {
  return (
    <div className="bg-[#f4f6f9] pb-16 font-sans text-[#2c3e50] antialiased">
      
      {/* BANNER */}
      <section className="bg-[#0b1f52] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative text-center sm:text-left">
        <div className="max-w-5xl mx-auto space-y-2">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-400 font-medium">
            <span onClick={() => setPaginaAtiva('inicio')} className="hover:text-white transition-colors cursor-pointer">Início</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#ff6b00] font-semibold">Parceiros</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Rede de Parceiros</h1>
          <p className="text-gray-300 text-xs sm:text-base max-w-xl font-normal">
            Consulte a nossa ampla rede credenciada de clínicas, laboratórios e atendimento médico especializado.
          </p>
        </div>
      </section>

      {/* SECÇÃO 1: UNIDADES MÉDICAS */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-3 mb-6 justify-center sm:justify-start">
          <div className="w-1.5 h-6 bg-[#ff6b00] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-black text-[#0b1f52] tracking-tight">Clínicas e Unidades Médicas</h2>
        </div>

        <div className="space-y-6">
          {REDE_CREDENCIADA.map((parceiro) => (
            <div key={parceiro.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              
              <div className="p-4 sm:p-6 flex flex-col md:flex-row justify-between gap-4 md:gap-6 pb-2">
                <div className="space-y-2 flex-1 text-justify sm:text-left">
                  <div className="flex items-start sm:items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff6b00] mt-2 sm:mt-0 shrink-0" />
                    <h2 className="text-lg sm:text-2xl font-black text-[#0b1f52] tracking-tight">{parceiro.nome}</h2>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-base leading-relaxed">{parceiro.descricao}</p>
                </div>

                <div className="md:w-64 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-5 shrink-0 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-[#0b1f52] font-bold text-sm">
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{parceiro.bairro} — {parceiro.cidade}</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{parceiro.endereco}</p>
                  </div>

                  <a 
                    href={`https://wa.me/${parceiro.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%2C%20vim%20pelo%20site%20do%20Cart%C3%A3o%20Amas.`}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-[#0b1f52] hover:bg-[#ff6b00] text-white py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 transition-all shadow-sm text-center"
                  >
                    <span>Entrar em Contato</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              {/* ESPECIALIDADES OFERECIDAS */}
              <div className="px-4 sm:px-6 pb-4">
                <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-4 sm:p-5 space-y-3">
                  <h3 className="text-xs font-bold text-[#0b1f52] uppercase tracking-wider">
                    Especialidades Oferecidas:
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                    {parceiro.especialidades.map((esp, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs sm:text-[14px] text-gray-700 font-medium">
                        <span className="text-[#ff6b00] font-bold text-[9px] shrink-0">►</span>
                        <span className="truncate" title={esp}>{esp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-3 text-xs sm:text-sm text-gray-500 font-medium px-1">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-[#ff6b00] shrink-0" />
                    <span><strong>Horário:</strong> {parceiro.horario}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Phone className="w-4 h-4 text-[#ff6b00] shrink-0" />
                    <span><strong>Telefone:</strong> {parceiro.telefone}</span>
                  </div>
                </div>
              </div>

              {/* MAPA */}
              <div className="border-t border-gray-100 bg-gray-50 p-3 sm:p-4">
                <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden shadow-inner border border-gray-200 bg-gray-100">
                  <iframe
                    src={parceiro.mapaEmbed}
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    title={`Mapa da Unidade ${parceiro.nome}`}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>

    </div>
  );
}

