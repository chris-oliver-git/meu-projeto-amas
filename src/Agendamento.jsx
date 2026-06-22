import React from 'react';
import { AlertCircle, ExternalLink, Calendar, UserPlus, Shield } from 'lucide-react';

export default function AmasAgendamentoPage({ setPaginaAtiva }) {
  const URL_PLATAFORMA_AGENDAMENTO = "https://apicesaude5.realclinic.com.br/ApiceSaude/AgOnline/";
  
  // URL do WhatsApp com a mensagem personalizada perfeitamente codificada
  const URL_WHATSAPP_EXAMES = "https://wa.me/552136683100?text=Eu%20vim%20do%20site%20e%20gostaria%20de%20agendar%20meu%20exame.";

  return (
    <div className="bg-[#f8fafc] pb-20 font-sans text-[#2c3e50] antialiased">
      
      <div className="max-w-6xl mx-auto px-4 pt-6 sm:pt-8">
        
        {/* BANNER DE AVISO 100% CENTRALIZADO */}
        <div className="bg-orange-50/70 border border-orange-200/60 rounded-2xl p-4 flex items-center justify-center space-x-2.5 shadow-sm max-w-5xl mx-auto text-center">
          <AlertCircle className="w-5 h-5 text-[#ff6b00] shrink-0" />
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
            <span className="font-bold text-gray-900">Aviso:</span> O agendamento pelo aplicativo Cartão Amas foi descontinuado. Utilize nosso novo portal web abaixo.
          </p>
        </div>

        {/* BLOCO CENTRAL REESTRUTURADO EM 3 BLOCOS LINDOS */}
        <section className="text-center pt-12 sm:pt-16 max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1f52] tracking-tight leading-tight mb-6">
            Agendamento Online
          </h1>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            {/* Bloco 1 */}
            <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed px-2">
              Agora, você pode realizar seus agendamentos de consultas médicas de forma rápida e segura diretamente pelo nosso portal.
            </p>
            
            {/* Bloco 2 */}
            <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed px-2">
              Acesse sua conta, gerencie suas consultas em nossas 3 unidades e mantenha seus dados atualizados em um só lugar.
            </p>
            
            {/* Bloco 3: Aviso de Exames com Link Inteligente para o WhatsApp */}
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-tight pt-3 px-2">
              Para agendamento de exames, entre em contato pelo nosso WhatsApp{' '}
              <a
                href={URL_WHATSAPP_EXAMES}
                target="_blank"
                rel="noreferrer"
                className="text-[#ff6b00] font-black underline hover:text-[#e05e00] transition-colors inline-flex items-center cursor-pointer bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100"
                title="Clique para iniciar conversa no WhatsApp"
              >
                (21) 3668-3100
              </a>{' '}
              com a foto do pedido médico.
            </p>
          </div>

          {/* BOTÃO PRINCIPAL DE ACESSO EXTERNO */}
          <div className="pt-6 flex justify-center">
            <a
              href={URL_PLATAFORMA_AGENDAMENTO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-[#ff6b00] hover:bg-[#e05e00] text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-orange-600/10 text-base sm:text-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Acessar Agendamento Online</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* TEXTO DE SUPORTE INFERIOR DO BOTÃO */}
          <p className="text-[11px] sm:text-xs text-gray-400 font-medium max-w-md mx-auto leading-relaxed pt-1">
            Já possui cadastro? Acesse direto. Esqueceu a senha? Use a opção de recuperação na tela de login da plataforma.
          </p>
        </section>

        {/* GRADE DE RECURSOS E BENEFÍCIOS (3 COLUNAS) */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 sm:pt-20">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
            <div className="p-4 bg-orange-50 text-[#ff6b00] rounded-2xl shadow-inner">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0b1f52] tracking-tight">
              Agendamento Prático
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
              Marque consultas em nossas 3 unidades de forma rápida, fácil e segura, com total controle sobre seus horários.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
            <div className="p-4 bg-orange-50 text-[#ff6b00] rounded-2xl shadow-inner">
              <UserPlus className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0b1f52] tracking-tight">
              Cadastro Simples
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
              Novo por aqui? Cadastre-se na hora. Já é paciente? Basta fazer login para acessar seu histórico e agendar suas consultas.  
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
            <div className="p-4 bg-orange-50 text-[#ff6b00] rounded-2xl shadow-inner">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0b1f52] tracking-tight">
              Controle Total
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
              Recupere sua senha, atualize seus dados cadastrais e gerencie seu histórico com autonomia.
            </p>
          </div>

        </section>

      </div>
    </div>
  );
}