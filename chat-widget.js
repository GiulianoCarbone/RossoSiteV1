/* ════════════════════════════════════════════════════════════════════════
   Asistente IA del catálogo — Rosso Materiales
   Mismo estilo que el chat flotante del home (index.html), conectado a la
   Cloud Function `chat` (recomienda SOLO productos reales del catálogo).
   Uso: <script src="chat-widget.js" defer></script>  (catalogo.html y producto.html)
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const CHAT_URL = 'https://us-central1-backend-panel-vendedores.cloudfunctions.net/chat';
  const CDN = 'dbntmfmdv';                 // Cloudinary cloud name
  const COOLDOWN = 2000;                   // ms mínimo entre mensajes
  const MAX_SESSION = 25;                  // tope de mensajes por sesión
  const MAX_CHARS = 250;

  let sending = false, lastSent = 0, sessionCount = 0;
  const history = [];
  let fab, win, msgs, input, sendBtn, typing, charCountEl, counterWrap;

  /* ── Estilos (clonados del chat del home + tarjetas de producto) ── */
  const css = `
  .chat-fab{position:fixed;bottom:25px;right:25px;background:#ec6434;color:#fff;border:none;border-radius:50px;padding:14px 22px;display:flex;align-items:center;gap:8px;font-size:15px;font-weight:700;font-family:'Inter',sans-serif;box-shadow:0 6px 20px rgba(236,100,52,.45);cursor:pointer;z-index:1065;transition:transform .25s ease,box-shadow .25s ease,border-radius .25s ease,padding .25s ease,background .2s ease}
  .chat-fab:hover{transform:scale(1.06) translateY(-2px);box-shadow:0 10px 28px rgba(236,100,52,.55);background:#d4552a}
  .chat-fab-label{display:flex;align-items:center;gap:5px}
  .chat-fab-icon-close{display:none;width:20px;height:20px}
  .chat-fab-icon-close svg{width:20px;height:20px}
  .chat-fab.is-open .chat-fab-label{display:none}
  .chat-fab.is-open .chat-fab-icon-close{display:flex;align-items:center;justify-content:center}
  .chat-fab.is-open{border-radius:50%;padding:14px}
  .chat-window{position:fixed;bottom:90px;right:25px;width:370px;height:560px;background:#f4f6f9;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.18),0 4px 16px rgba(0,0,0,.08);z-index:2100;display:flex;flex-direction:column;overflow:hidden;transform-origin:bottom right;animation:rcChatOpen .3s cubic-bezier(.34,1.56,.64,1) forwards}
  .chat-window[hidden]{display:none}
  .chat-window.is-closing{animation:rcChatClose .2s ease-in forwards}
  @keyframes rcChatOpen{from{opacity:0;transform:scale(.75) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}
  @keyframes rcChatClose{from{opacity:1;transform:scale(1) translateY(0)}to{opacity:0;transform:scale(.75) translateY(20px)}}
  .chat-window-header{background:#ec6434;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
  .chat-header-info{display:flex;align-items:center;gap:11px}
  .chat-avatar{width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:4px;box-shadow:0 2px 8px rgba(0,0,0,.15)}
  .chat-avatar img{width:100%;height:100%;object-fit:contain}
  .chat-header-name{color:#fff;font-weight:700;font-size:14px;margin:0;line-height:1.2}
  .chat-header-status{color:rgba(255,255,255,.85);font-size:11px;margin:2px 0 0;display:flex;align-items:center;gap:5px}
  .status-dot{width:7px;height:7px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 0 2px rgba(46,204,113,.3);animation:rcPulseDot 2s infinite}
  @keyframes rcPulseDot{0%,100%{box-shadow:0 0 0 2px rgba(46,204,113,.3)}50%{box-shadow:0 0 0 5px rgba(46,204,113,.1)}}
  .chat-close-btn{background:rgba(255,255,255,.2);border:none;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;transition:background .2s;flex-shrink:0}
  .chat-close-btn:hover{background:rgba(255,255,255,.35)}
  .chat-close-btn svg{width:15px;height:15px}
  .chat-messages{flex:1;overflow-y:auto;padding:16px 14px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}
  .chat-messages::-webkit-scrollbar{width:4px}
  .chat-messages::-webkit-scrollbar-thumb{background:#d1d5db;border-radius:4px}
  .chat-msg{display:flex;flex-direction:column;max-width:82%;gap:3px}
  .chat-msg--bot{align-self:flex-start}
  .chat-msg--user{align-self:flex-end;align-items:flex-end}
  .chat-msg-bubble{padding:10px 14px;border-radius:18px;font-size:13.5px;line-height:1.5;word-break:break-word}
  .chat-msg--bot .chat-msg-bubble{background:#fff;color:#1f2937;border-bottom-left-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.07)}
  .chat-msg--user .chat-msg-bubble{background:#ec6434;color:#fff;border-bottom-right-radius:4px}
  .chat-msg--error .chat-msg-bubble{background:#fef2f2;color:#b91c1c;border:1px solid #fecaca}
  .chat-msg-time{font-size:10.5px;color:#9ca3af;padding:0 4px}
  .chat-cards{display:flex;flex-direction:column;gap:8px;margin-top:8px;max-width:82%;align-self:flex-start}
  .chat-card{display:flex;gap:10px;align-items:center;text-decoration:none;color:inherit;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:8px;box-shadow:0 1px 4px rgba(0,0,0,.06);transition:border-color .15s,transform .15s}
  .chat-card:hover{border-color:#c0392b;transform:translateY(-1px)}
  .chat-card img,.chat-card .chat-card-noimg{width:48px;height:48px;border-radius:8px;object-fit:contain;background:#f3f4f6;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:20px}
  .chat-card-info{display:flex;flex-direction:column;min-width:0}
  .chat-card-nom{font-weight:600;font-size:12.5px;color:#1f2937;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .chat-card-cat{font-size:11px;color:#9ca3af;margin-top:2px}
  .chat-typing{display:flex;align-items:center;gap:8px;padding:8px 14px 4px;flex-shrink:0}
  .chat-typing[hidden]{display:none}
  .chat-typing-dots{display:flex;gap:4px;align-items:center}
  .chat-typing-dots span{width:7px;height:7px;border-radius:50%;background:#ec6434;display:inline-block;animation:rcTyping 1.2s infinite ease-in-out}
  .chat-typing-dots span:nth-child(2){animation-delay:.2s}
  .chat-typing-dots span:nth-child(3){animation-delay:.4s}
  @keyframes rcTyping{0%,80%,100%{transform:scale(.7);opacity:.5}40%{transform:scale(1);opacity:1}}
  .chat-typing-label{font-size:11px;color:#9ca3af}
  .chat-input-wrapper{background:#fff;border-top:1px solid #e5e7eb;flex-shrink:0}
  .chat-input-area{display:flex;align-items:flex-end;gap:8px;padding:10px 12px 4px}
  .chat-char-counter{text-align:right;font-size:10.5px;color:#9ca3af;padding:0 14px 6px;transition:color .2s}
  .chat-char-counter.is-warning{color:#f59e0b}
  .chat-char-counter.is-danger{color:#ef4444;font-weight:600}
  .chat-input{flex:1;border:1.5px solid #e5e7eb;border-radius:22px;padding:9px 14px;font-size:13.5px;font-family:'Inter',sans-serif;resize:none;outline:none;max-height:100px;overflow-y:auto;line-height:1.4;color:#1f2937;transition:border-color .2s;background:#f9fafb}
  .chat-input:focus{border-color:#c0392b;background:#fff}
  .chat-input::placeholder{color:#9ca3af}
  .chat-send-btn{width:38px;height:38px;flex-shrink:0;background:linear-gradient(135deg,#c0392b,#e74c3c);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;transition:transform .2s,box-shadow .2s;box-shadow:0 3px 10px rgba(192,57,43,.35)}
  .chat-send-btn:hover{transform:scale(1.1);box-shadow:0 5px 14px rgba(192,57,43,.45)}
  .chat-send-btn:disabled{opacity:.5;cursor:not-allowed;transform:none}
  .chat-send-btn svg{width:18px;height:18px}
  @media(max-width:480px){
    .chat-window{width:calc(100vw - 16px);height:calc(100dvh - 90px);right:8px;bottom:76px;border-radius:16px}
    .chat-fab{right:14px;bottom:14px}
  }
  `;

  const ICON_X = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const ICON_SEND = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';

  /* ── Helpers ── */
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const cdn = (pid) => pid ? `https://res.cloudinary.com/${CDN}/image/upload/w_120,h_120,c_fit,f_auto,q_auto/${pid}` : '';
  const hora = () => new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });

  function cardsHTML(productos) {
    if (!productos || !productos.length) return '';
    return '<div class="chat-cards">' + productos.map((p) => `
      <a class="chat-card" href="producto.html?sku=${encodeURIComponent(p.sku)}">
        ${p.imagen ? `<img src="${cdn(p.imagen)}" alt="" loading="lazy" onerror="this.style.display='none'">` : '<span class="chat-card-noimg">📦</span>'}
        <span class="chat-card-info"><span class="chat-card-nom">${esc(p.nombre)}</span><span class="chat-card-cat">${esc(p.categoria)}</span></span>
      </a>`).join('') + '</div>';
  }

  function addUser(text) {
    const d = document.createElement('div');
    d.className = 'chat-msg chat-msg--user';
    d.innerHTML = `<div class="chat-msg-bubble">${esc(text)}</div><span class="chat-msg-time">${hora()}</span>`;
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
  }

  function addBot(text, productos, isError) {
    const d = document.createElement('div');
    d.className = 'chat-msg chat-msg--bot' + (isError ? ' chat-msg--error' : '');
    d.innerHTML = `<div class="chat-msg-bubble">${esc(text).replace(/\n/g, '<br>')}</div>` +
      cardsHTML(productos) +
      `<span class="chat-msg-time">${hora()}</span>`;
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
  }

  function openChat() {
    win.hidden = false;
    win.classList.remove('is-closing');
    fab.classList.add('is-open');
    fab.setAttribute('aria-expanded', 'true');
    setTimeout(() => input.focus(), 120);
  }
  function closeChat() {
    win.classList.add('is-closing');
    fab.classList.remove('is-open');
    fab.setAttribute('aria-expanded', 'false');
    setTimeout(() => { win.hidden = true; win.classList.remove('is-closing'); }, 200);
  }

  function updateCounter() {
    const n = input.value.length;
    charCountEl.textContent = n;
    counterWrap.classList.toggle('is-warning', n >= 200 && n < 235);
    counterWrap.classList.toggle('is-danger', n >= 235);
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  }

  async function send() {
    const text = input.value.trim();
    if (!text || sending) return;
    const now = Date.now();
    if (now - lastSent < COOLDOWN) return;                 // cooldown silencioso
    if (sessionCount >= MAX_SESSION) {
      addBot('Llegaste al límite de consultas de esta sesión. Si necesitás seguir, escribinos por WhatsApp y te ayudamos. 😊', null, true);
      return;
    }
    lastSent = now; sessionCount++;
    addUser(text);
    history.push({ role: 'user', content: text });
    input.value = ''; updateCounter();
    sending = true; sendBtn.disabled = true;
    typing.hidden = false; msgs.scrollTop = msgs.scrollHeight;
    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje: text, history: history.slice(-6) }),
      });
      const data = await resp.json().catch(() => ({}));
      typing.hidden = true;
      if (!resp.ok) {
        addBot(data.error || 'Disculpá, hubo un problema. Probá de nuevo en un momento.', null, true);
      } else {
        addBot(data.respuesta || 'No te entendí bien, ¿podés darme más detalle?', data.productos);
        history.push({ role: 'assistant', content: data.respuesta || '' });
      }
    } catch (e) {
      typing.hidden = true;
      addBot('No me pude conectar. Revisá tu internet e intentá de nuevo.', null, true);
    } finally {
      sending = false; sendBtn.disabled = false; input.focus();
    }
  }

  /* ── Bootstrap ── */
  function init() {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <button id="chat-fab" class="chat-fab" aria-label="Abrir chat" aria-expanded="false">
        <span class="chat-fab-label">¡Hola! <span class="emoji-wave">👋</span></span>
        <span class="chat-fab-icon-close" aria-hidden="true">${ICON_X}</span>
      </button>
      <div id="chat-window" class="chat-window" role="dialog" aria-modal="true" aria-label="Asistente Rosso" hidden>
        <div class="chat-window-header">
          <div class="chat-header-info">
            <div class="chat-avatar"><img src="https://i.ibb.co/PzZscw0G/Logo-Rosso-Institucional-1.png" alt="Rosso Materiales"></div>
            <div>
              <p class="chat-header-name">Rosso Materiales</p>
              <p class="chat-header-status"><span class="status-dot"></span> En línea</p>
            </div>
          </div>
          <button class="chat-close-btn" id="chat-close-btn" aria-label="Cerrar chat">${ICON_X}</button>
        </div>
        <div class="chat-messages" id="chat-messages" role="log" aria-live="polite">
          <div class="chat-msg chat-msg--bot">
            <div class="chat-msg-bubble">👋 ¡Hola! Soy el asistente de <strong>Rosso Materiales</strong>.<br>Contame qué estás buscando y te recomiendo productos del catálogo.</div>
            <span class="chat-msg-time">ahora</span>
          </div>
        </div>
        <div class="chat-typing" id="chat-typing" hidden>
          <div class="chat-typing-dots"><span></span><span></span><span></span></div>
          <span class="chat-typing-label">Rosso está escribiendo...</span>
        </div>
        <div class="chat-input-wrapper">
          <div class="chat-input-area">
            <textarea id="chat-input" class="chat-input" placeholder="¿Qué estás buscando?" rows="1" aria-label="Escribí tu mensaje" maxlength="${MAX_CHARS}"></textarea>
            <button id="chat-send-btn" class="chat-send-btn" aria-label="Enviar mensaje">${ICON_SEND}</button>
          </div>
          <div class="chat-char-counter"><span id="chat-char-count">0</span>/${MAX_CHARS}</div>
        </div>
      </div>`;
    document.body.appendChild(wrap);

    fab = document.getElementById('chat-fab');
    win = document.getElementById('chat-window');
    msgs = document.getElementById('chat-messages');
    input = document.getElementById('chat-input');
    sendBtn = document.getElementById('chat-send-btn');
    typing = document.getElementById('chat-typing');
    charCountEl = document.getElementById('chat-char-count');
    counterWrap = win.querySelector('.chat-char-counter');

    fab.addEventListener('click', () => (win.hidden ? openChat() : closeChat()));
    document.getElementById('chat-close-btn').addEventListener('click', closeChat);
    sendBtn.addEventListener('click', send);
    input.addEventListener('input', updateCounter);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
