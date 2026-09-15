/* ════════════════════════════════════════════════════════════════════════
   Captación de suscriptores del newsletter — Rosso Materiales
   Aparece en el momento de mayor intención: cuando el cliente ya armó su
   lista de materiales y va a consultar. Pide el email ofreciendo enterarse
   antes de las promos, y NUNCA bloquea: siempre se puede seguir sin dejarlo.

   Da el alta en el mismo formulario de Mailrelay que el home. Mailrelay usa
   doble opt-in, así que el suscriptor recibe un mail de confirmación.

   Uso: <script src="lead-gate.js" defer></script>  (catalogo.html y producto.html)

   API:
     RossoLead.pedirEmail({ titulo, cta, contexto, onDone, onLead })
     RossoLead.suscribir(email, { contexto })
     RossoLead.emailGuardado()  -> string | ''
     RossoLead.yaSuscripto()    -> bool
     RossoLead.debePreguntar()  -> bool
     RossoLead.aviso(texto)     -> toast
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // Mismo endpoint que el formulario del home (index.html)
  const FORM_URL = window.ROSSO_NEWSLETTER_URL || 'https://rossomateriales1.ipzmarketing.com/f/OdA2AtykkcQ';

  const KEY_SUB = 'rosso_news_sub';    // { email, ts } — ya se suscribió, no molestar más
  const KEY_SKIP = 'rosso_news_skip';  // ts del último "no, gracias"
  const DIAS_REINTENTO = 14;           // si dijo que no, recién volvemos a preguntar a los 14 días

  let overlay = null, input = null, errorEl = null, ctx = null;

  /* ── Almacenamiento (tolerante a modo privado) ───────────────── */
  function leer(k) {
    try { return localStorage.getItem(k); } catch (e) { return null; }
  }
  function escribir(k, v) {
    try { localStorage.setItem(k, v); } catch (e) { /* modo privado: seguimos igual */ }
  }

  function datosSub() {
    try { return JSON.parse(leer(KEY_SUB) || 'null'); } catch (e) { return null; }
  }
  function emailGuardado() {
    const d = datosSub();
    return (d && d.email) || '';
  }
  function yaSuscripto() {
    return !!emailGuardado();
  }
  function debePreguntar() {
    if (yaSuscripto()) return false;
    const skip = parseInt(leer(KEY_SKIP) || '0', 10);
    if (!skip) return true;
    return (Date.now() - skip) > DIAS_REINTENTO * 24 * 60 * 60 * 1000;
  }

  function emailValido(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || '').trim());
  }

  /* ── Alta en Mailrelay ───────────────────────────────────────── */
  // no-cors: Mailrelay no devuelve cabeceras CORS, así que no podemos leer la
  // respuesta. Igual que en el home, si no hubo error de red damos el alta por
  // buena; la confirmación real la hace el mail de doble opt-in.
  function suscribir(email, opts) {
    const o = opts || {};
    const limpio = String(email || '').trim();
    const fd = new FormData();
    fd.append('subscriber[email]', limpio);
    fd.append('anotheremail', '');  // honeypot del formulario de Mailrelay
    const p = fetch(FORM_URL, { method: 'POST', body: fd, mode: 'no-cors' })
      .catch(function (e) { console.warn('Newsletter:', e); });
    escribir(KEY_SUB, JSON.stringify({ email: limpio, ts: Date.now(), origen: o.contexto || '' }));
    return p;
  }

  /* ── Estilos ─────────────────────────────────────────────────── */
  const css = [
    '.rl-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:2300;display:none;align-items:center;justify-content:center;padding:20px;font-family:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}',
    '.rl-overlay.open{display:flex;animation:rlFade .2s ease}',
    '@keyframes rlFade{from{opacity:0}to{opacity:1}}',
    '@keyframes rlUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}',
    '.rl-modal{background:#fff;border-radius:16px;width:100%;max-width:430px;box-shadow:0 24px 60px rgba(0,0,0,.28);animation:rlUp .25s ease;overflow:hidden;max-height:92vh;overflow-y:auto}',
    '.rl-head{background:linear-gradient(135deg,#272e68 0%,#3a44a0 100%);padding:22px 24px 20px;color:#fff;position:relative}',
    '.rl-eyebrow{display:inline-flex;align-items:center;gap:6px;background:rgba(236,100,52,.95);color:#fff;font-size:.68rem;font-weight:800;letter-spacing:.04em;text-transform:uppercase;padding:4px 10px;border-radius:99px;margin-bottom:10px}',
    '.rl-head h3{margin:0;font-size:1.15rem;font-weight:800;line-height:1.25}',
    '.rl-head p{margin:8px 0 0;font-size:.83rem;line-height:1.5;color:rgba(255,255,255,.88)}',
    '.rl-close{position:absolute;top:12px;right:12px;width:28px;height:28px;border:none;border-radius:50%;background:rgba(255,255,255,.18);color:#fff;font-size:18px;line-height:1;cursor:pointer;transition:background .15s}',
    '.rl-close:hover{background:rgba(255,255,255,.32)}',
    '.rl-body{padding:20px 24px 24px}',
    '.rl-benefits{list-style:none;margin:0 0 16px;padding:0;display:flex;flex-direction:column;gap:8px}',
    '.rl-benefits li{display:flex;align-items:flex-start;gap:9px;font-size:.82rem;color:#1f2937;line-height:1.4}',
    '.rl-benefits li svg{flex-shrink:0;width:16px;height:16px;margin-top:1px;color:#ec6434}',
    '.rl-field label{display:block;font-size:.78rem;font-weight:600;color:#1f2937;margin-bottom:5px}',
    '.rl-field input[type=email]{width:100%;padding:12px 13px;border:1.5px solid #e5e7eb;border-radius:9px;font-size:.92rem;font-family:inherit;outline:none;box-sizing:border-box;transition:border-color .15s}',
    '.rl-field input[type=email]:focus{border-color:#272e68}',
    '.rl-field input[type=email].error{border-color:#dc2626}',
    '.rl-error{display:none;font-size:.76rem;color:#dc2626;margin-top:6px}',
    '.rl-error.show{display:block}',
    '.rl-cta{width:100%;margin-top:14px;padding:13px;background:#ec6434;color:#fff;border:none;border-radius:9px;font-size:.92rem;font-weight:700;font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .15s,transform .15s}',
    '.rl-cta:hover{background:#d4552a;transform:translateY(-1px)}',
    '.rl-skip{width:100%;margin-top:10px;padding:8px;background:none;border:none;color:#6b7280;font-size:.8rem;font-family:inherit;cursor:pointer;text-decoration:underline;text-underline-offset:3px}',
    '.rl-skip:hover{color:#1f2937}',
    '.rl-legal{margin:12px 0 0;font-size:.7rem;color:#9ca3af;text-align:center;line-height:1.45}',
    '.rl-hp{position:absolute;left:-5000px}',
    '.rl-modal.is-done .rl-head,.rl-modal.is-done .rl-body{display:none}',
    '.rl-done{display:none;padding:30px 26px 26px;text-align:center}',
    '.rl-modal.is-done .rl-done{display:block}',
    '.rl-done-ico{font-size:2.6rem;line-height:1;margin-bottom:12px}',
    '.rl-done h3{margin:0 0 8px;font-size:1.12rem;font-weight:800;color:#272e68}',
    '.rl-done p{margin:0;font-size:.85rem;line-height:1.55;color:#4b5563}',
    '.rl-tip{margin-top:16px;padding:13px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;font-size:.81rem;line-height:1.5;color:#1f2937;text-align:left}',
    '.rl-tip strong{color:#ec6434}',
    '.rl-toast{position:fixed;left:50%;bottom:26px;transform:translate(-50%,20px);background:#1f2937;color:#fff;font-family:"Inter",system-ui,sans-serif;font-size:.84rem;font-weight:600;padding:12px 18px;border-radius:99px;box-shadow:0 10px 30px rgba(0,0,0,.25);z-index:2400;opacity:0;transition:opacity .25s ease,transform .25s ease;pointer-events:none;max-width:90vw;text-align:center}',
    '.rl-toast.show{opacity:1;transform:translate(-50%,0)}',
    '@media (max-width:480px){.rl-head{padding:20px 18px 18px}.rl-body{padding:18px}.rl-head h3{font-size:1.05rem}}'
  ].join('\n');

  const CHECK = '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" clip-rule="evenodd"/></svg>';

  /* ── Montaje ─────────────────────────────────────────────────── */
  function montar() {
    if (overlay) return;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    overlay = document.createElement('div');
    overlay.className = 'rl-overlay';
    overlay.innerHTML =
      '<div class="rl-modal" role="dialog" aria-modal="true" aria-labelledby="rl-title">' +
      '  <div class="rl-head">' +
      '    <button class="rl-close" type="button" aria-label="Cerrar">&times;</button>' +
      '    <span class="rl-eyebrow">🔥 Promos exclusivas</span>' +
      '    <h3 id="rl-title">Enterate de las ofertas antes que nadie</h3>' +
      '    <p>Dejanos tu email y te avisamos primero de las promos, los ingresos nuevos y los descuentos por cantidad.</p>' +
      '  </div>' +
      '  <div class="rl-body">' +
      '    <ul class="rl-benefits">' +
      '      <li>' + CHECK + '<span>Promos y liquidaciones antes de que salgan al salón</span></li>' +
      '      <li>' + CHECK + '<span>Ingresos y novedades del catálogo</span></li>' +
      '      <li>' + CHECK + '<span>Sin spam: te podés desuscribir cuando quieras</span></li>' +
      '    </ul>' +
      '    <div class="rl-field">' +
      '      <label for="rl-email">Tu email</label>' +
      '      <input type="email" id="rl-email" placeholder="tucorreo@ejemplo.com" autocomplete="email" inputmode="email" />' +
      '      <input type="text" class="rl-hp" id="rl-hp" tabindex="-1" autocomplete="off" aria-hidden="true" />' +
      '      <div class="rl-error" id="rl-error">Escribí un email válido para poder avisarte.</div>' +
      '    </div>' +
      '    <button class="rl-cta" type="button" id="rl-cta">Suscribirme y continuar</button>' +
      '    <button class="rl-skip" type="button" id="rl-skip">Prefiero continuar sin dejar mi email</button>' +
      '    <p class="rl-legal">Te mandamos un mail para confirmar la suscripción.</p>' +
      '  </div>' +
      '  <div class="rl-done">' +
      '    <div class="rl-done-ico">📬</div>' +
      '    <h3>Falta un paso: confirmá tu email</h3>' +
      '    <p>Te mandamos un mail de <strong>Rosso Materiales</strong>. Hasta que no toques el enlace de confirmación, las promos no te van a llegar.</p>' +
      '    <div class="rl-tip">¿No lo ves? Fijate en <strong>Spam</strong> o en la pestaña <strong>Promociones</strong>, y marcalo como <strong>«No es spam»</strong>. Con eso te aseguramos que las ofertas te lleguen siempre a la bandeja principal.</div>' +
      '    <button class="rl-cta" type="button" id="rl-done-close">Entendido</button>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(overlay);

    input = overlay.querySelector('#rl-email');
    errorEl = overlay.querySelector('#rl-error');

    overlay.querySelector('#rl-cta').addEventListener('click', confirmar);
    overlay.querySelector('#rl-skip').addEventListener('click', function () { salir(true); });
    overlay.querySelector('#rl-done-close').addEventListener('click', cerrar);
    overlay.querySelector('.rl-close').addEventListener('click', function () { salir(false); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) salir(false); });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') confirmar(); });
    input.addEventListener('input', function () {
      input.classList.remove('error');
      errorEl.classList.remove('show');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) salir(false);
    });
  }

  /* ── Flujo ───────────────────────────────────────────────────── */
  // Ojo con el orden: onDone() abre WhatsApp en otra pestaña y tiene que
  // dispararse dentro del gesto del click, sin ningún await en el medio, o
  // el navegador lo bloquea como popup.
  function confirmar() {
    if (overlay.querySelector('#rl-hp').value) { salir(true); return; }  // bot
    const email = input.value.trim();
    if (!emailValido(email)) {
      input.classList.add('error');
      errorEl.classList.add('show');
      input.focus();
      return;
    }
    const c = ctx || {};
    ctx = null;
    suscribir(email, { contexto: c.contexto });
    // El modal NO se cierra: queda el recordatorio de ir a confirmar. Ahí es
    // donde hoy se pierde la mayoría de las altas, porque el mail de
    // confirmación de Mailrelay les cae en Spam y nunca lo ven.
    overlay.querySelector('.rl-modal').classList.add('is-done');
    if (typeof c.onLead === 'function') { try { c.onLead(email); } catch (e) { /* analytics no bloquea */ } }
    if (typeof c.onDone === 'function') c.onDone(email);
  }

  // salir(true)  = eligió "continuar sin dejar mi email": sigue con su consulta.
  // salir(false) = cerró el modal (X, Escape, click afuera): no continúa.
  function salir(continuar) {
    escribir(KEY_SKIP, String(Date.now()));
    const c = ctx || {};
    cerrar();
    if (continuar && typeof c.onDone === 'function') c.onDone('');
  }

  function cerrar() {
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.querySelector('.rl-modal').classList.remove('is-done');
    ctx = null;
  }

  // Para los flujos que se suscriben sin pasar por el modal (la casilla del
  // pedido de presupuesto): les mostramos el mismo recordatorio de confirmar.
  function mostrarConfirmacion() {
    montar();
    ctx = null;
    overlay.querySelector('.rl-modal').classList.add('is-done');
    overlay.classList.add('open');
  }

  function pedirEmail(opts) {
    const o = opts || {};
    if (!debePreguntar()) {
      if (typeof o.onDone === 'function') o.onDone(emailGuardado());
      return;
    }
    montar();
    ctx = o;
    overlay.querySelector('.rl-modal').classList.remove('is-done');
    if (o.titulo) overlay.querySelector('#rl-title').textContent = o.titulo;
    overlay.querySelector('#rl-cta').textContent = o.cta || 'Suscribirme y continuar';
    input.value = '';
    input.classList.remove('error');
    errorEl.classList.remove('show');
    overlay.classList.add('open');
    setTimeout(function () { input.focus(); }, 120);
  }

  /* ── Toast ───────────────────────────────────────────────────── */
  let toastEl = null, toastT = null;
  function aviso(texto) {
    montar();
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'rl-toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = texto;
    requestAnimationFrame(function () { toastEl.classList.add('show'); });
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 4200);
  }

  window.RossoLead = {
    pedirEmail: pedirEmail,
    mostrarConfirmacion: mostrarConfirmacion,
    suscribir: suscribir,
    emailGuardado: emailGuardado,
    yaSuscripto: yaSuscripto,
    debePreguntar: debePreguntar,
    emailValido: emailValido,
    aviso: aviso
  };
})();
