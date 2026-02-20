document.addEventListener('DOMContentLoaded', () => {
  // ====== Mobile menu ======
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('show');
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (event) => {
        if (!a.classList.contains('dropdown-toggle')) {
          menu.classList.remove('show');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ====== Slider ======
  const slider = document.getElementById('slider');
  if (slider) {
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsWrap = document.querySelector('.dots');
    let current = 0;
    let timer;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ir al slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i, true));
      dotsWrap.appendChild(dot);
    });

    function render() {
      slides.forEach((s, i) => s.classList.toggle('active', i === current));
      dotsWrap.querySelectorAll('.dot').forEach((d, i) => d.setAttribute('aria-current', i === current ? 'true' : 'false'));
    }

    function goTo(i, user = false) {
      current = (i + slides.length) % slides.length;
      render();
      if (user) { restart(); }
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function start() { timer = setInterval(next, 5000); }
    function stop() { clearInterval(timer); }
    function restart() { stop(); start(); }

    nextBtn.addEventListener('click', () => { prevBtn.blur(); next(); restart(); });
    prevBtn.addEventListener('click', () => { nextBtn.blur(); prev(); restart(); });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { next(); restart(); }
      if (e.key === 'ArrowLeft') { prev(); restart(); }
    });

    let x0 = null;
    const threshold = 30;
    slider.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchmove', e => {
      if (x0 === null) return;
      const dx = e.touches[0].clientX - x0;
      if (Math.abs(dx) > threshold) {
        dx > 0 ? prev() : next();
        x0 = null; restart();
      }
    }, { passive: true });

    render();
    start();
  }

  // ====== Scroll reveal de tarjetas ======
  const cards = document.querySelectorAll('.card-link');
  const io = new IntersectionObserver((entries, ob) => {
    entries.forEach(ent => { if (ent.isIntersecting) { ent.target.classList.add('is-visible'); ob.unobserve(ent.target); } });
  }, { threshold: .15 });
  cards.forEach(c => io.observe(c));

  // El código ineficiente para tapar la marca de agua fue eliminado para mejorar el rendimiento.

  // ====== Dropdown en menú móvil (NUEVO) ======
  const mobileDropdownToggles = document.querySelectorAll('#mobile-menu .dropdown-toggle');
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      const dropdown = toggle.closest('.dropdown');
      if (dropdown) {
        dropdown.classList.toggle('open');
      }
    });
  });

  // ====== Botón Volver Arriba (Back to Top) - CÓDIGO CORREGIDO ======
  const backToTopButton = document.getElementById('back-to-top');

  if (backToTopButton) {
    const scrollFunction = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    window.onscroll = () => {
      scrollFunction();
    };

    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ====== SLIDER HORIZONTAL SECUNDARIO CON AUTOPLAY ======
  const hSlider = document.getElementById('horizontal-slider');
  if (hSlider) {
    const sliderContainer = hSlider.querySelector('.horizontal-slider-container');
    const slides = hSlider.querySelectorAll('.horizontal-slide');
    const prevBtn = hSlider.querySelector('#horizontal-prevBtn');
    const nextBtn = hSlider.querySelector('#horizontal-nextBtn');
    let currentIndex = 0;
    let autoPlayInterval;

    function goToSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      sliderContainer.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000); // Cambia la imagen cada 3 segundos
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
      stopAutoPlay(); // Opcional: reiniciar el temporizador al usar los controles
      startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
      stopAutoPlay(); // Opcional: reiniciar el temporizador al usar los controles
      startAutoPlay();
    });

    // Opcional: Pausar el slider al pasar el mouse por encima
    hSlider.addEventListener('mouseenter', stopAutoPlay);
    hSlider.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay(); // Inicia el autoplay
  }
});

// ====== CÓDIGO PARA NEWSLETTER CON AJAX (NUEVO) ======
document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.getElementById('newsletter-form-ajax');

  if (newsletterForm) {
    const messageContainer = document.getElementById('newsletter-message');
    const formButton = document.getElementById('newsletter-button');
    const originalButtonText = formButton.innerHTML;

    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevenimos que la página se recargue

      // Mostramos un estado de "cargando"
      formButton.innerHTML = 'ENVIANDO...';
      formButton.disabled = true;

      const formData = new FormData(newsletterForm);
      const url = newsletterForm.action;

      // Enviamos los datos en segundo plano
      fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Importante para evitar problemas de seguridad del navegador
      })
        .then(response => {
          // Mailrelay no nos da una respuesta clara, pero si no hay error, asumimos que funcionó.
          newsletterForm.style.display = 'none'; // Ocultamos el formulario
          messageContainer.innerHTML = '¡Gracias por suscribirte!🙌 Por favor, revisá tu email para activar tu cuenta. Si no lo encontrás, ¡no te olvides de revisar la carpeta de spam!🔎.';
          messageContainer.className = 'newsletter-message success'; // Aplicamos el estilo verde
          messageContainer.style.display = 'block'; // Mostramos el mensaje
        })
        .catch(error => {
          // En caso de un error de red
          messageContainer.innerHTML = 'Hubo un error al procesar tu solicitud. Por favor, intentá de nuevo.';
          messageContainer.className = 'newsletter-message error'; // (Podrías crear un estilo .error en rojo)
          messageContainer.style.display = 'block';

          // Restauramos el botón
          formButton.innerHTML = originalButtonText;
          formButton.disabled = false;
        });
    });
  }
});