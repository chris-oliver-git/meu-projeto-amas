import React, { useState, useEffect } from 'react';
import { 
  FileText, LogIn, CreditCard, Check, DollarSign, 
  Building2, Heart, Clock, Menu, X 
} from 'lucide-react';

// Importação dos ativos locais
import logoAmas from './Logo_AMAS.png';
import iconeAmas from './icone-amas.png'; 
import AmasRedePage from './Rede.jsx';
import AmasBeneficiosPage from './Beneficios.jsx';
import AmasContatoPage from './Contato.jsx';
import AmasAnexosPage from './Anexos.jsx';
import AmasAgendamentoPage from './Agendamento.jsx';
import AmasPlanosPage from './Planos.jsx';

const ROTAS_VALIDAS = ['planos', 'rede', 'beneficios', 'agendamento', 'anexos', 'contato'];

const obterPaginaPorUrl = () => {
  const caminho = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');

  // Compatibilidade com links antigos compartilhados antes da separação das páginas.
  if (caminho === 'parceiros') return 'beneficios';

  return ROTAS_VALIDAS.includes(caminho) ? caminho : 'inicio';
};

export default function App() {
  const [paginaAtiva, setPaginaAtiva] = useState(obterPaginaPorUrl);
  const [menuAberto, setMenuAberto] = useState(false);
  const [carregando, setCarregando] = useState(true);

  // Sincronização do título da aba conforme a rota ativa
  useEffect(() => {
    const titulosDasPaginas = {
      inicio: "Cartão Amas",
      planos: "Cartão Amas | Planos",
      rede: "Cartão Amas | Rede Credenciada",
      beneficios: "Cartão Amas | Benefícios",
      agendamento: "Cartão Amas | Agendamento",
      anexos: "Cartão Amas | Anexos",
      contato: "Cartão Amas | Contato"
    };
    document.title = titulosDasPaginas[paginaAtiva] || "Cartão Amas";
  }, [paginaAtiva]);

  // Mantém a interface sincronizada com os botões voltar e avançar do navegador.
  useEffect(() => {
    const sincronizarComHistorico = () => {
      setPaginaAtiva(obterPaginaPorUrl());
      setMenuAberto(false);
      setCarregando(false);
    };

    window.addEventListener('popstate', sincronizarComHistorico);
    return () => window.removeEventListener('popstate', sincronizarComHistorico);
  }, []);

  // Loading de inicialização ao abrir o site
  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  const URL_BOLETO = "https://www.cartaoamas.com.br/AliancaAppNet2/Site/autenticacao/login?t=cpf";
  const URL_LOGIN = "https://www.cartaoamas.com.br/AliancaAppNet2/Site/site";
  const URL_WHATSAPP = "https://wa.me/552136683100?text=Ol%C3%A1%2C%20eu%20vim%20do%20site%20Cart%C3%A3o%20Amas%20e%20gostaria%20de%20mais%20informa%C3%A7%B5es%2C";

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

  const verificarSeLinkAtivo = (pagina) => paginaAtiva === pagina;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#2c3e50] font-sans antialiased flex flex-col relative">
      
      {/* LOADING SCREEN */}
      {carregando && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999] transition-opacity duration-300">
          <div className="flex flex-col items-center justify-center animate-fadeIn">
            <img 
              src={iconeAmas} 
              alt="Carregando..." 
              className="h-16 sm:h-20 w-auto object-contain animate-spin" 
            />
          </div>
        </div>
      )}

      {/* NAVBAR GLOBAL RESPONSIVA */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          <div className="flex items-center cursor-pointer shrink-0" onClick={() => navegarPara('inicio')}>
            <img src={logoAmas} alt="Cartão Amas" className="h-11 sm:h-14 w-auto object-contain" />
          </div>

          <nav className="hidden xl:flex items-center space-x-1">
            {LINKS_NAVEGACAO.map((item, idx) => {
              const ativo = verificarSeLinkAtivo(item.id);
              return (
                <button 
                  key={idx}
                  onClick={() => navegarPara(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                    ativo ? 'bg-[#fdf2e9] text-[#ff6b00]' : 'text-[#0b1f52] hover:text-[#ff6b00]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center space-x-3 shrink-0">
            <a href={URL_BOLETO} target="_blank" rel="noreferrer" className="flex items-center space-x-1 border border-gray-300 hover:border-blue-600 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-blue-600 transition-all shadow-sm bg-white">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Boleto</span>
            </a>
            <a href={URL_LOGIN} target="_blank" rel="noreferrer" className="flex items-center space-x-1 bg-[#0b1f52] hover:bg-[#112d75] px-5 py-2 rounded-full text-sm font-semibold text-white transition-all shadow-md">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </a>
            <a href={URL_WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center space-x-1 bg-[#ff6b00] hover:bg-[#e05e00] px-5 py-2 rounded-full text-sm font-semibold text-white transition-all shadow-md transform hover:-translate-y-0.5">
              <CreditCard className="w-4 h-4" />
              <span>Adquirir Cartão</span>
            </a>
          </div>

          <div className="flex items-center xl:hidden">
            <button 
              onClick={() => setMenuAberto(!menuAberto)}
              className="p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 focus:outline-none transition-all cursor-pointer border border-gray-100"
            >
              {menuAberto ? <X className="w-6 h-6 text-[#ff6b00]" /> : <Menu className="w-6 h-6 text-[#0b1f52]" />}
            </button>
          </div>

        </div>

        {menuAberto && (
          <div className="xl:hidden border-t border-gray-100 bg-white shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {LINKS_NAVEGACAO.map((item, idx) => {
                const ativo = verificarSeLinkAtivo(item.id);
                return (
                  <button 
                    key={idx}
                    onClick={() => navegarPara(item.id)} 
                    className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                      ativo ? 'bg-[#fdf2e9] text-[#ff6b00]' : 'text-[#0b1f52] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
                <a href={URL_BOLETO} target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-1 border border-gray-300 py-3 rounded-xl text-sm font-medium text-gray-700 bg-gray-50">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Boleto</span>
                </a>
                <a href={URL_LOGIN} target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-1 bg-[#0b1f52] py-3 rounded-xl text-sm font-semibold text-white">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </a>
              </div>
              <a href={URL_WHATSAPP} target="_blank" rel="noreferrer" className="w-full mt-2 flex items-center justify-center space-x-2 bg-[#ff6b00] py-3 rounded-xl text-sm font-bold text-white shadow-md">
                <CreditCard className="w-4 h-4" />
                <span>Adquirir Cartão</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* CONTEÚDO DINÂMICO DAS PÁGINAS */}
      <div className="flex-grow">
        {paginaAtiva === 'inicio' ? (
          <>
            {/* HERO SECTION - CORRIGIDO PARA .PNG */}
            <section className="relative bg-[#0b1f52] overflow-hidden min-h-[500px] sm:min-h-[580px] flex items-center justify-center px-4 sm:px-6">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/familia-home.png" 
                  alt="Família Amas" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-35"
                />
                <div className="absolute inset-0 bg-[#0b1f52]/40" />
              </div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center py-16 space-y-5 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
                  Cuidando da Sua Saúde com Carinho e Economia.
                </h1>
                <p className="text-base sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed opacity-95">
                  Acesso facilitado a uma ampla rede de saúde sem burocracia. Para você e toda sua família.
                </p>
                <div className="pt-4 flex justify-center">
                  <button 
                    onClick={() => navegarPara('planos')} 
                    className="bg-[#ff6b00] hover:bg-[#e05e00] text-white font-black px-10 py-4 rounded-xl shadow-lg shadow-orange-950/30 text-md sm:text-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Conheça Nossos Planos
                  </button>
                </div>
              </div>
            </section>

            {/* SOBRE O CARTÃO */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center sm:text-left">
                  <div className="flex items-center space-x-3 justify-center sm:justify-start">
                    <div className="w-1.5 h-8 bg-[#ff6b00] rounded-full" />
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f52] tracking-tight">Sobre o Cartão Amas</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">O Cartão Amas é a sua melhor alternativa para cuidar da saúde com inteligência. Oferecemos uma experiência transparente, ágil e humana.</p>
                  <div className="bg-blue-50/70 border-l-4 border-blue-600 p-4 sm:p-5 rounded-r-2xl shadow-sm text-left">
                    <p className="text-blue-900 font-medium italic text-sm sm:text-base leading-relaxed">
                      "Importante: Somos um cartão de benefícios para Assistência Médica, o que nos permite oferecer maior flexibilidade e condições diferenciadas para nossos pacientes."
                    </p>
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
                      <div className="p-2.5 bg-gray-50 rounded-xl shrink-0">{card.icon}</div>
                      <h3 className="font-bold text-[#0b1f52] text-sm sm:text-base">{card.title}</h3>
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
      <footer className="bg-[#0b1f52] text-[#a5b4fc] pt-12 pb-8 border-t border-white/5 font-sans mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="cursor-pointer" onClick={() => navegarPara('inicio')}>
              <img src={logoAmas} alt="Cartão Amas" className="h-11 w-auto object-contain bg-white/10 p-1.5 rounded-lg" />
            </div>
            <p className="text-[14px] leading-relaxed font-normal text-[#a5b4fc]/80">
              Cartão Amas — O seu cartão <br className="hidden sm:inline" /> de Assistência.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Navegação</h4>
            <div className="flex flex-col space-y-2 text-[14px]">
              <button onClick={() => navegarPara('inicio')} className="hover:text-white transition-colors cursor-pointer text-center sm:text-left">Home</button>
              <button onClick={() => navegarPara('planos')} className="hover:text-white transition-colors cursor-pointer text-center sm:text-left">Planos</button>
              <button onClick={() => navegarPara('rede')} className="hover:text-white transition-colors cursor-pointer text-center sm:text-left">Rede</button>
              <button onClick={() => navegarPara('beneficios')} className="hover:text-white transition-colors cursor-pointer text-center sm:text-left">Benefícios</button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Serviços</h4>
            <div className="flex flex-col space-y-2 text-[14px]">
              <button onClick={() => navegarPara('agendamento')} className="hover:text-white transition-colors cursor-pointer text-center sm:text-left">Agendamento</button>
              <button onClick={() => navegarPara('anexos')} className="hover:text-white transition-colors cursor-pointer text-center sm:text-left">Anexos</button>
              <button onClick={() => navegarPara('contato')} className="hover:text-white transition-colors cursor-pointer text-center sm:text-left">Contato</button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Contato</h4>
            <div className="text-[14px] leading-relaxed space-y-1 text-[#a5b4fc]/80">
              <p className="text-white font-semibold">AMAS MULTI SAÚDE LTDA</p>
              <p>CNPJ 31.798.999/0001-90</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 mt-8 border-t border-white/10 text-center flex flex-col space-y-2 sm:space-y-0 text-xs sm:text-[13px] text-[#a5b4fc]/60">
          <p>Copyright © 2026 AMAS MULTI SAUDE LTDA. Todos os direitos reservados.</p>
          <p className="text-[14px] text-white/90 font-medium pt-1">
            Desenvolvido por <span className="text-[#ff6b00] font-bold tracking-wide">Íon Digital</span>
          </p>
        </div>
      </footer>

    </div>
  );
}
