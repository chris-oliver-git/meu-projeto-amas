import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, X } from "lucide-react";
import { openSchedulingChat, closeSchedulingChat, isSchedulingChatOpen, configureSchedulingChatIcon } from "./ezchat";

export function EzChatHint() {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [closeHost, setCloseHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let host: HTMLDivElement | null = null;
    let observedWidget: Element | null = null;
    const timer = window.setTimeout(() => setVisible(true), 900);
    const ensureCloseHost = () => {
      const widget = document.querySelector("ez-webchat, #EZchatWidget");
      if (!widget) return;
      if (observedWidget !== widget) {
        resizeObserver.disconnect();
        resizeObserver.observe(widget);
        observedWidget = widget;
        configureSchedulingChatIcon();
      }

      if (!host) {
        host = document.createElement("div");
        host.id = "amas-ezchat-close-host";
        document.body.appendChild(host);
        setCloseHost(host);
      }

      const hostIsAfterWidget = Boolean(
        widget.compareDocumentPosition(host) & Node.DOCUMENT_POSITION_FOLLOWING,
      );

      if (!hostIsAfterWidget) document.body.appendChild(host);
    };
    const syncChatState = () => {
      ensureCloseHost();
      const opened = isSchedulingChatOpen();
      setChatOpen(opened);
      if (opened) setVisible(false);
      const widget = document.querySelector('ez-webchat');
      const panel = widget ?? document.querySelector('#EZchatWidget iframe[title="mainFrame"]');
      if (host && panel && opened) {
        const box = panel.getBoundingClientRect();
        host.style.setProperty('--amas-chat-close-top', `${Math.max(8, box.top + 8)}px`);
        host.style.setProperty('--amas-chat-close-right', `${Math.max(8, window.innerWidth - box.right + 8)}px`);
      }

    };
    const hideWhenChatOpens = () => {
      setVisible(false);
      setChatOpen(true);
    };
    const showWhenChatCloses = () => setChatOpen(false);
    const resizeObserver = new ResizeObserver(syncChatState);
    const observer = new MutationObserver(syncChatState);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["height", "width", "data-open", "data-fullscreen", "hidden"],
      childList: true,
      subtree: true,
    });

    window.addEventListener("amas:ezchat-opened", hideWhenChatOpens);
    window.addEventListener("amas:ezchat-closed", showWhenChatCloses);
    window.addEventListener("resize", syncChatState);
    syncChatState();

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncChatState);
      window.removeEventListener("amas:ezchat-opened", hideWhenChatOpens);
      window.removeEventListener("amas:ezchat-closed", showWhenChatCloses);
      host?.remove();
    };
  }, []);

  function dismiss() {
    setVisible(false);
  }

  async function openChat() {
    if (!(await openSchedulingChat())) window.location.assign("/atendimento/");
  }
  function closeChat() { closeSchedulingChat(); setChatOpen(false); }

  return (
    <>
      <aside
        hidden={!visible || chatOpen}
        aria-live="polite"
        aria-label="Atalho para atendimento"
        className={`ez-chat-hint fixed bottom-[36px] right-[104px] z-[2147483646] max-w-[260px] transition-all duration-500 ease-out max-sm:bottom-[88px] max-sm:right-3 max-sm:max-w-[calc(100vw-24px)] ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="relative rounded-2xl border border-orange-200 bg-white p-2 pr-10 shadow-2xl shadow-blue-950/20">
          <button
            type="button"
            onClick={openChat}
            className="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-black text-[#0b1f52] transition hover:bg-orange-50 hover:text-[#c54e00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#ff6b00] text-white">
              <CalendarDays className="size-4" aria-hidden="true" />
            </span>
            <span>Iniciar atendimento AMAS</span>
          </button>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Fechar aviso de atendimento"
            className="absolute right-2 top-2 grid size-7 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-[#0b1f52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      </aside>

      {closeHost
        ? createPortal(
            <button
              type="button"
              onClick={closeChat}
              aria-label="Fechar atendimento e voltar ao site"
              aria-hidden={!chatOpen}
              tabIndex={chatOpen ? 0 : -1}
              title="Fechar atendimento"
              className={`ez-chat-close grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0b1f52] shadow-xl transition-all duration-300 hover:border-orange-500 hover:bg-[#ff6b00] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                chatOpen
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-90 opacity-0"
              }`}
            >
              <X className="size-6" aria-hidden="true" />
            </button>,
            closeHost,
          )
        : null}
    </>
  );
}
