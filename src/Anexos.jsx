import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

// MAPEAMENTO CORRIGIDO COM BASE EXATA NA SUA PASTA PUBLIC DO VS CODE
const DOCUMENTOS = [
  {
    titulo: "Termo de Adesão ao Cartão Amas - 2026",
    descricao: "Contrato completo com os termos e condições dos planos AMAS: Prático, Cuidado, Bem-Estar, Conforto e Família Plus. - (02/2026)",
    arquivo: "/2026_01_CONTRATO_DE_ADESAO_AMAS_E_ADICIONAL.pdf" // Corrigido para _
  },
  {
    titulo: "Termo de Adesão ao Cartão Amas - 2025",
    descricao: "Contrato completo com os termos e condições dos planos AMAS: 24, Fácil, Integral, Especial, Essencial Família e Total. - (12/2025)",
    arquivo: "/2025_12_TERMO_DO_CONTRATO_DE_ADESAO_AMAS.pdf" // Corrigido para _
  },
  {
    titulo: "Termo de Adesão ao Cartão Amas - Maio 2025",
    descricao: "Documento oficial contendo aditivos contratuais e termos específicos estabelecidos no período. - (05/2025)",
    arquivo: "/2025_05-TERMOS-DO-CONTRATO-DE-ADESÃO-AMAS.pdf"
  },
  {
    titulo: "Regulamento Geral de Uso dos Benefícios",
    descricao: "Detalhes sobre a utilização dos serviços e benefícios inclusos. - (07/2025)",
    arquivo: "/2023-REGULAMENTO-AMAS.pdf"
  },
  {
    titulo: "Anexo I - Comparativo das Assistências (2025)",
    descricao: "Valores de referência para coparticipação em consultas e exames. - (11/2025)",
    arquivo: "/Anexo-1-112025-Comparativo-das-Assistencias.pdf"
  },
  {
    titulo: "Anexo II - Comparativo das Assistências (2026)",
    descricao: "Valores de referência para coparticipação em consultas e exames. - (08/2026)",
    arquivo: "/Anexo-2-082026-Comparativo-das-Assistencias.pdf"
  },
  {
    titulo: "Anexo III - Prazos de Acesso",
    descricao: "Listagem da carência para consultas, procedimentos e exames. - (07/2025)",
    arquivo: "/Anexo-3-Prazos-de-Acesso.pdf"
  },
  {
    titulo: "Anexo IV - Benefícios",
    descricao: "Lista dos benefícios da rede para Odontologia e parceiros como Drogarias, SPA e Ótica. (07/2025)",
    arquivo: "/Anexo-4-Benefícios.pdf"
  },
  {
    titulo: "Anexo V - Rede de atendimento",
    descricao: "Listagem de endereços e polos dos parceiros credenciados. (07/2025)",
    arquivo: "/Anexo-5-Rede-de-Atendimento.pdf"
  },
  {
    titulo: "Anexo VI - Regulamento Donlee Assistência Funeral",
    descricao: "Regulamento do serviço de assistência funeral adicional ao produto AMAS (10/2025)",
    arquivo: "/Anexo-6-Regulamento-Donlee.pdf"
  },
  {
    titulo: "Guia de Benefícios Cartão Amas",
    descricao: "Manual completo de orientação ao associado com todas as coberturas e parcerias da rede.",
    arquivo: "/Guia-de-Beneficios-Cartao-Amas.pdf"
  }
];

export default function AmasAnexosPage() {
  return (
    <div className="bg-[#f8fafc] pb-16 font-sans text-[#2c3e50] antialiased">
      
      {/* CABEÇALHO COMPACTO */}
      <section className="bg-white border-b border-gray-100 pt-10 pb-8 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0b1f52] tracking-tight">
            Anexos e Documentos
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Consulte e visualize os regulamentos e termos oficiais do Cartão Amas.
          </p>
        </div>
      </section>

      {/* LISTAGEM DE COMPONENTES */}
      <main className="max-w-4xl mx-auto px-4 pt-6">
        <div className="space-y-4">
          {DOCUMENTOS.map((doc, idx) => (
            <a
              key={idx}
              href={doc.arquivo}
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:border-[#ff6b00] hover:bg-orange-50/20 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center space-x-4 min-w-0">
                <div className="p-3.5 bg-orange-50 text-[#ff6b00] rounded-xl shrink-0 transition-all duration-300 group-hover:bg-[#ff6b00] group-hover:text-white">
                  <FileText className="w-6 h-6" />
                </div>
                
                <div className="space-y-1 min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-[#0b1f52] tracking-tight transition-colors duration-300 group-hover:text-[#ff6b00] truncate">
                    {doc.titulo}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {doc.descricao}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-gray-300 transition-colors duration-300 group-hover:text-[#ff6b00] p-1">
                <ExternalLink className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </main>

    </div>
  );
}