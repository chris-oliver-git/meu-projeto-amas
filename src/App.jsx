import React, { useState, useEffect } from 'react';
import { 
  FileText, LogIn, CreditCard, Check, DollarSign, 
  Building2, Heart, Menu, X 
} from 'lucide-react';

// Importação dos ativos locais
import logoAmas from './Logo_AMAS.png';
import iconeAmas from './icone-amas.png'; 
import imagemInformativo from './Informativo - Encerramento APP.png'; 

import { AmasRedePage, AmasBeneficiosPage } from './Parceiros.jsx';
import AmasContatoPage from './Contato.jsx';
import AmasAnexosPage from './Anexos.jsx';
import AmasAgendamentoPage from './Agendamento.jsx';
import AmasPlanosPage from './Planos.jsx';

export default function App() {
  
  // Função de roteamento para ler as URLs
  const obterPaginaPorUrl = () => {
    const caminho = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
    const rotasValidas = ['planos', 'rede', 'beneficios', 'agendamento', 'anexos', 'contato'];
    return rotasValidas.includes(caminho) ? caminho : 'inicio';
  };

  const [paginaAtiva, setPaginaAtiva] = useState(obterPaginaPorUrl);
  const [menuAberto, setMenuAberto] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [popupAberto, setPopupAberto] = useState(true);

  // Sincronização automática do título da aba do navegador
  useEffect(() => {
    const titulosDasPaginas = {
      inicio: "Cartão Amas",
      planos: "Cartão Amas | Planos",
      rede: "Cartão Amas | Rede",
      beneficios: "Cartão Amas | Benefícios",
      agendamento: "Cartão Amas | Agendamento",
      anexos: "Cartão Amas | Anexos",
      contato: "Cartão Amas | Contato"
    };
    document.title = titulosDasPaginas[paginaAtiva] || "Cartão Amas";
  }, [paginaAtiva]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  const URL_BOLETO = "https://www.cartaoamas.com.br/AliancaAppNet2/Site/autenticacao/login?t=cpf";
  const URL_LOGIN = "https://www.cartaoamas.com.br/AliancaAppNet2/Site/site";
  const URL_WHATSAPP = "https://wa.me/552136683100?text=Ol%C3%A1";

  const navegarPara = (pagina) => {
    setMenuAberto(false);
    setCarregando(true);

    const novaUrl = pagina === 'inicio' ? '/' : `/${pagina}`;
    window.history.pushState({}, '', novaUrl);
    
    setTimeout(() => {
      setPaginaAtiva(pagina);
      setCarregando(false);
    }, 600); 
  };

  const LINKS_NAVEGACAO = [
    { id: 'inicio', label: 'Início' },
    { id: 'planos', label: 'Planos' }, 
    { id: 'rede', label: 'Rede' },       
    { id: 'beneficios', label: 'Benefícios' }, 
    { id: 'agendamento', label: 'Agendamento' },
    { id: 'anexos', label: 'Anexos' },
    { id: 'contato', label: 'Contato' }
  ];

  const verificarSeLinkAtivo = (id) => paginaAtiva === id;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#2c3e50] font-sans antialiased flex flex-col relative">
      
      {/* LOADING SCREEN */}
      {carregando && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
          <div className="flex flex-col items-center justify-center">
            <img src={iconeAmas} alt="Carregando..." className="h-16 sm:h-20 w-auto animate-spin" />
          </div>
        </div>
      )}

      {/* POP-UP INFORMATIVO */}
      {popupAberto && !carregando && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] p-4 animate-fade-in">
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-[500px] w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-100">
            <button 
              onClick={() => setPopupAberto(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
              title="Fechar comunicado"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="overflow-y-auto w-full h-full object-contain">
              <img 
                src={imagemInformativo} 
                alt="Comunicado Importante" 
                className="w-full h-auto block"
              />
            </div>
            <div className="p-3 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setPopupAberto(false)}
                className="px-6 py-2 bg-[#0b1f52] hover:bg-[#ff6b00] text-white text-sm font-bold rounded-xl transition-all"
              >
                Entendi e quero fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR GLOBAL */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          <div className="flex items-center cursor-pointer shrink-0" onClick={() => navegarPara('inicio')}>
            <img src={logoAmas} alt="Cartão Amas" className="h-11 sm:h-14 w-auto object-contain" />
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden xl:flex items-center space-x-1">
            {LINKS_NAVEGACAO.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => navegarPara(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  verificarSeLinkAtivo(item.id) ? 'bg-[#fdf2e9] text-[#ff6b00]' : 'text-[#0b1f52] hover:text-[#ff6b00]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* BOTÕES DE AÇÃO (DESKTOP) */}
          <div className="hidden xl:flex items-center space-x-3 shrink-0">
            <a href={URL_BOLETO} target="_blank" rel="noreferrer" className="flex items-center space-x-1 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 bg-white">
              <FileText className="w-4 h-4 text-blue-600" /><span>Boleto</span>
            </a>
            <a href={URL_LOGIN} target="_blank" rel="noreferrer" className="flex items-center space-x-1 bg-[#0b1f52] px-5 py-2 rounded-full text-sm font-semibold text-white">
              <LogIn className="w-4 h-4" /><span>Login</span>
            </a>
            <a href={URL_WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center space-x-1 bg-[#ff6b00] px-5 py-2 rounded-full text-sm font-semibold text-white">
              <CreditCard className="w-4 h-4" /><span>Adquirir Cartão</span>
            </a>
          </div>

          {/* ÍCONE MENU HAMBÚRGUER (MOBILE) */}
          <div className="flex items-center xl:hidden">
            <button onClick={() => setMenuAberto(!menuAberto)} className="p-2.5 rounded-xl border border-gray-100">
              {menuAberto ? <X className="w-6 h-6 text-[#ff6b00]" /> : <Menu className="w-6 h-6 text-[#0b1f52]" />}
            </button>
          </div>
        </div>

        {/* MENU EXPANSÍVEL MOBILE */}
        {menuAberto && (
          <div className="xl:hidden border-t border-gray-100 bg-white shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {/* Links das Páginas */}
              {LINKS_NAVEGACAO.map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => navegarPara(item.id)} 
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                    verificarSeLinkAtivo(item.id) ? 'bg-[#fdf2e9] text-[#ff6b00]' : 'text-[#0b1f52] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Linha Divisória */}
              <div className="border-t border-gray-100 my-2 pt-2" />

              {/* Botões de Ação Inclusos no Mobile */}
              <div className="flex flex-col space-y-3 px-2 pt-2">
                <a 
                  href={URL_BOLETO} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center space-x-2 border border-gray-300 py-3 rounded-xl text-sm font-bold text-gray-700 bg-white shadow-sm"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Boleto</span>
                </a>
                
                <a 
                  href={URL_LOGIN} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center space-x-2 bg-[#0b1f52] py-3 rounded-xl text-sm font-bold text-white shadow-sm"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </a>
                
                <a 
                  href={URL_WHATSAPP} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center space-x-2 bg-[#ff6b00] py-3 rounded-xl text-sm font-bold text-white shadow-sm"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Adquirir Cartão</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* CONTEÚDO DINÂMICO */}
      <div className="flex-grow">
        {paginaAtiva === 'inicio' ? (
          <>
            {/* HERO SECTION */}
            <section className="relative bg-[#0b1f52] overflow-hidden min-h-[500px] sm:min-h-[580px] flex items-center justify-center px-4 sm:px-6">
              <div className="absolute inset-0 z-0">
                <img src="/familia-home.png" alt="Família" className="w-full h-full object-cover mix-blend-multiply opacity-35" />
                <div className="absolute inset-0 bg-[#0b1f52]/40" />
              </div>
              <div className="relative z-10 max-w-4xl mx-auto text-center py-16 space-y-8">
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.2] max-w-3xl mx-auto">
                  Amas, assistência que entrega cuidado imediato com economia de verdade
                </h1>
                <div className="pt-2 flex justify-center">
                  <button onClick={() => navegarPara('planos')} className="bg-[#ff6b00] hover:bg-[#e05e00] text-white font-black px-10 py-4 rounded-xl text-md sm:text-lg transition-all transform hover:scale-105 active:scale-95 shadow-md">
                    Conheça Nossos Planos
                  </button>
                </div>
              </div>
            </section>

            {/* SOBRE O CARTÃO */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6 text-center sm:text-left">
                  <div className="flex items-center space-x-3 justify-center sm:justify-start">
                    <div className="w-1.5 h-8 bg-[#ff6b00] rounded-full" /><h2 className="text-2xl sm:text-3xl font-black text-[#0b1f52]">Sobre o Cartão Amas</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600">O Cartão Amas é a sua melhor alternativa para cuidar da saúde com inteligência. Oferecemos uma experiência transparente, ágil e humana.</p>
                  <div className="bg-blue-50/70 border-l-4 border-blue-600 p-5 rounded-r-2xl shadow-sm">
                    <p className="text-blue-900 font-medium italic">"Importante: Somos um cartão de benefícios para Assistência Médica, o que nos permite oferecer maior flexibilidade e condições diferenciadas para nossos pacientes."</p>
                  </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Check className="w-6 h-6 text-emerald-500" />, title: "Consulta médica sem carência" },
                    { icon: <DollarSign className="w-6 h-6 text-amber-500" />, title: "Preço Justo" },
                    { icon: <Building2 className="w-6 h-6 text-blue-500" />, title: "Rede Ampla" },
                    { icon: <Heart className="w-6 h-6 text-rose-500" />, title: "Atendimento Humano" }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4">
                      <div className="p-2.5 bg-gray-50 rounded-xl">{card.icon}</div>
                      <h3 className="font-bold text-[#0b1f52] text-sm">{card.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : paginaAtiva === 'planos' ? (
          <AmasPlanosPage setPaginaAtiva={navegarPara} />
        ) : paginaAtiva === 'rede' ? (
          <AmasRedePage setPaginaAtiva={navegarPara} /> 
        ) : paginaAtiva === 'beneficios' ? (
          <AmasBeneficiosPage setPaginaAtiva={navegarPara} /> 
        ) : paginaAtiva === 'anexos' ? (
          <AmasAnexosPage setPaginaAtiva={navegarPara} />
        ) : paginaAtiva === 'agendamento' ? (
          <AmasAgendamentoPage setPaginaAtiva={navegarPara} />
        ) : (
          <AmasContatoPage setPaginaAtiva={navegarPara} />
        )}
      </div>

      {/* FOOTER GLOBAL */}
      <footer className="bg-[#0b1f52] text-[#a5b4fc] pt-12 pb-8 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          
          {/* BLOCO INSTITUCIONAL */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <img src={logoAmas} alt="Cartão Amas" className="h-11 w-auto bg-white/10 p-1.5 rounded-lg" />
            <p className="text-[14px] text-[#a5b4fc]/80">Cartão Amas — O seu cartão de Assistência.</p>
            
            <div className="flex items-center space-x-2.5 pt-1 justify-center sm:justify-start">
              <a 
                href="https://pt-br.facebook.com/cartaoamas" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-white/5 hover:bg-[#ff6b00] text-white rounded-xl transition-all shadow-sm flex items-center justify-center"
                title="Siga-nos no Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/cartaoamas" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-white/5 hover:bg-[#ff6b00] text-white rounded-xl transition-all shadow-sm flex items-center justify-center"
                title="Siga-nos no Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUNA NAVEGAÇÃO */}
          <div className="space-y-3">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Navegação</h4>
            <div className="flex flex-col space-y-2 text-[14px]">
              <button onClick={() => navegarPara('inicio')} className="hover:text-white text-center sm:text-left">Home</button>
              <button onClick={() => navegarPara('planos')} className="hover:text-white text-center sm:text-left">Planos</button>
              <button onClick={() => navegarPara('rede')} className="hover:text-white text-center sm:text-left">Rede</button>
              <button onClick={() => navegarPara('beneficios')} className="hover:text-white text-center sm:text-left">Benefícios</button>
            </div>
          </div>

          {/* COLUNA SERVIÇOS */}
          <div className="space-y-3">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Serviços</h4>
            <div className="flex flex-col space-y-2 text-[14px]">
              <button onClick={() => navegarPara('agendamento')} className="hover:text-white text-center sm:text-left">Agendamento</button>
              <button onClick={() => navegarPara('anexos')} className="hover:text-white text-center sm:text-left">Anexos</button>
              <button onClick={() => navegarPara('contato')} className="hover:text-white text-center sm:text-left">Contato</button>
            </div>
          </div>

          {/* COLUNA CONTATO */}
          <div className="space-y-3">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Contato</h4>
            <div className="text-[14px] text-[#a5b4fc]/80">
              <p className="text-white font-semibold">AMAS MULTI BENEFICIOS LTDA</p>
              <p>CNPJ 31.798.999/0001-90</p>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 mt-8 border-t border-white/10 text-center text-xs text-[#a5b4fc]/60">
          <p>Copyright © 2026 AMAS MULTI BENEFICIOS LTDA. Todos os direitos reservados. Desenvolvido por <span className="text-[#ff6b00] font-bold">Íon Digital</span></p>
        </div>
      </footer>

    </div>
  );
}