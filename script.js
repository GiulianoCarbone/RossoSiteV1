document.addEventListener('DOMContentLoaded', () => {
  // ====== Mobile menu ======
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });

  // Cerrar al hacer click en un enlace (mejora UX)
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
  }));

  // ====== Slider ======
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsWrap = document.querySelector('.dots');
  let current = 0;
  let timer;

  // Crear dots accesibles
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('role','tab');
    dot.setAttribute('aria-label', `Ir al slide ${i+1}`);
    dot.addEventListener('click', () => goTo(i, true));
    dotsWrap.appendChild(dot);
  });

  function render(){
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dotsWrap.querySelectorAll('.dot').forEach((d, i) => d.setAttribute('aria-current', i === current ? 'true' : 'false'));
  }

  function goTo(i, user=false){
    current = (i + slides.length) % slides.length;
    render();
    if(user){ restart(); }
  }

  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }

  function start(){ timer = setInterval(next, 5000); }
  function stop(){ clearInterval(timer); }
  function restart(){ stop(); start(); }

  nextBtn.addEventListener('click', () => { prevBtn.blur(); next(); restart(); });
  prevBtn.addEventListener('click', () => { nextBtn.blur(); prev(); restart(); });

  // Teclado
  document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight') { next(); restart(); }
    if(e.key === 'ArrowLeft') { prev(); restart(); }
  });

  // Gestos táctiles
  let x0 = null;
  const threshold = 30;
  document.getElementById('slider').addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, {passive:true});
  document.getElementById('slider').addEventListener('touchmove', e => {
    if(x0===null) return;
    const dx = e.touches[0].clientX - x0;
    if(Math.abs(dx) > threshold){
      dx > 0 ? prev() : next();
      x0 = null; restart();
    }
  }, {passive:true});

  start();

  // ====== Scroll reveal de tarjetas ======
  const cards = document.querySelectorAll('.card-link');
  const io = new IntersectionObserver((entries, ob) => {
    entries.forEach(ent => { if(ent.isIntersecting){ ent.target.classList.add('is-visible'); ob.unobserve(ent.target); } });
  }, {threshold:.15});
  cards.forEach(c => io.observe(c));
});