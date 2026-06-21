import React from 'react';
import { MapPin, Clock, Phone, Mail, Briefcase, Headphones, ChevronRight } from 'lucide-react';

export default function AmasContatoPage({ setPaginaAtiva }) {
  return (
    <div className="bg-[#f8fafc] pb-12 font-sans text-[#2c3e50] antialiased">
      
      {/* BANNER RECEPTIVO PRINCIPAL */}
      <section className="bg-[#0b1f52] text-white py-12 sm:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 font-medium">
            <span onClick={() => setPaginaAtiva('inicio')} className="hover:text-white transition-colors cursor-pointer">Início</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#ff6b00] font-semibold">Contato</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Fale Conosco</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Estamos aqui para ouvir você. Visite uma de nossas unidades ou entre em contato pelos nossos canais oficiais.
          </p>
        </div>
      </section>

      {/* SESSÃO DE UNIDADES SOLICITADAS (SÃO JOÃO E CAXIAS) */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        
        {/* CARD 1: SÃO JOÃO DE MERITI */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-all">
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-4 md:border-r border-gray-50">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#ff6b00] text-white rounded-xl shadow-md shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0b1f52] tracking-tight">
                Unidade São João de Meriti
              </h2>
            </div>
            <div className="space-y-2 text-sm sm:text-base text-gray-500 font-medium pl-1">
              <p className="leading-relaxed">{`Avenida Automóvel Clube, 63 - Centro, São João de Meriti - RJ`}</p>
              <div className="flex items-center space-x-1.5 pt-1 text-gray-400 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span><strong>Horário:</strong> Segunda à Sexta (7h00 às 17h00) | Sábado (8h às 11h)</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[450px] h-52 sm:h-64 md:h-auto bg-gray-100 shrink-0">
            <iframe
              src="https://maps.google.com/maps?q=Avenida%20Autom%C3%B3vel%20Clube%2C%2063%20-%20Centro%2C%20S%C3%A3o%20Jo%C3%A3o%20de%20Meriti%20-%20RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="Mapa Unidade São João de Meriti"
            />
          </div>
        </div>

        {/* CARD 2: DUQUE DE CAXIAS */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-all">
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-4 md:border-r border-gray-50">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#ff6b00] text-white rounded-xl shadow-md shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0b1f52] tracking-tight">
                Unidade Duque de Caxias
              </h2>
            </div>
            <div className="space-y-2 text-sm sm:text-base text-gray-500 font-medium pl-1">
              <p className="leading-relaxed">{`Rua Doutor Arruda Negreiros, 11 - Centro, Duque de Caxias - RJ`}</p>
              <div className="flex items-center space-x-1.5 pt-1 text-gray-400 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span><strong>Horário:</strong> Segunda à Sexta (7:30 às 17:00)</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[450px] h-52 sm:h-64 md:h-auto bg-gray-100 shrink-0">
            <iframe
              src="https://maps.google.com/maps?q=Rua%20Doutor%20Arruda%20Negreiros%2C%2011%20-%20Centro%2C%20Duque%20de%20Caxias%20-%20RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="Mapa Unidade Duque de Caxias"
            />
          </div>
        </div>

        {/* CENTRAL DE ATENDIMENTO BANNER */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm text-center max-w-3xl mx-auto space-y-2">
          <div className="flex items-center justify-center space-x-2 text-gray-600 font-bold text-sm sm:text-base">
            <Phone className="w-5 h-5 text-[#ff6b00]" />
            <h3>Central de Atendimento Cartão Amas</h3>
          </div>
          <p className="text-2xl sm:text-4xl font-black text-[#0b1f52] tracking-tight">
            (21) 3668-3100
          </p>
        </div>

      </main>

      {/* SESSÃO BANNER COMPACTO: TRABALHE CONOSCO */}
      <section className="bg-[#0b1f52] text-white py-14 px-4 my-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex p-3.5 bg-[#ff6b00] rounded-2xl shadow-lg">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Trabalhe Conosco</h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            Faça parte do <strong className="text-white font-bold">GRUPO ATHENAPAR</strong> e construa uma carreira de sucesso no segmento de Saúde! Se você é um profissional dedicado e busca oportunidades de crescimento, envie seu currículo.
          </p>
          <div className="pt-3">
            <p className="text-xs sm:text-sm text-gray-300">
              Envie para o e-mail: <span className="text-[#ff6b00] font-bold text-sm sm:text-base hover:underline select-all">trabalheconosco@cartaoamas.com.br</span>
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400 max-w-xl mx-auto mt-2">
              Analisaremos seu perfil e, caso haja vagas alinhadas às suas qualificações e experiência, entraremos em contato. Agradecemos seu interesse em fazer parte da nossa equipe!
            </p>
          </div>
        </div>
      </section>

      {/* SESSÃO: OUVIDORIA */}
      <section className="max-w-4xl mx-auto px-4 py-8 text-center space-y-5">
        <div className="inline-flex p-3.5 bg-[#ff6b00] text-white rounded-2xl shadow-md">
          <Headphones className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f52] tracking-tight">Ouvidoria</h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            A Ouvidoria é um canal de segunda instância, destinado a tratar demandas que não foram solucionadas satisfatoriamente pelos canais regulares de atendimento. Atuamos com independência e imparcialidade para garantir a melhor experiência aos nossos clientes.
          </p>
        </div>
        
        {/* Botões Mobile-First Empilháveis */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-2 bg-white border border-gray-100 shadow-sm py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-gray-700 flex-1">
            <Phone className="w-4 h-4 text-[#ff6b00]" />
            <span>(21) 3668-3111</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white border border-gray-100 shadow-sm py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-gray-700 flex-1">
            <Mail className="w-4 h-4 text-[#ff6b00]" />
            <span className="truncate">ouvidoria@cartaoamas.com.br</span>
          </div>
        </div>
      </section>

    </div>
  );
}