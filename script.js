(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const preloader = document.getElementById('preloader');
  const header = document.getElementById('siteHeader');
  const progress = document.getElementById('scrollProgress');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  const finishLoading = () => {
    if (preloader) window.setTimeout(() => preloader.classList.add('is-done'), reduceMotion ? 0 : 420);
  };
  if (document.readyState === 'complete') finishLoading();
  else window.addEventListener('load', finishLoading, { once: true });
  // If a third-party image stalls, never keep the page behind the loader.
  window.setTimeout(finishLoading, 1900);

  const updateScrollUI = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (header) header.classList.toggle('is-scrolled', scrollTop > 30);
    if (progress) progress.style.width = `${maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  const closeMobileNav = () => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    mobileNav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      mobileNav.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('nav-open', !isOpen);
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileNav));
    window.addEventListener('resize', () => { if (window.innerWidth > 740) closeMobileNav(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMobileNav(); });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Gentle parallax in the hero; disabled on small screens and for reduced motion.
  const hero = document.querySelector('.hero-image');
  if (hero && !reduceMotion && window.matchMedia('(min-width: 741px)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        hero.style.transform = `translate3d(0, ${y * 0.08}px, 0) scale(1.02)`;
        ticking = false;
      });
    }, { passive: true });
  }

  // Menu filter buttons are fully client-side and keyboard accessible.
  const filterButtons = document.querySelectorAll('.filter-button');
  const menuCards = document.querySelectorAll('.menu-card');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      filterButtons.forEach(other => {
        const active = other === button;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      menuCards.forEach(card => {
        const visible = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !visible);
        if (visible) card.classList.add('is-visible');
      });
    });
  });

  const year = document.getElementById('yearNow');
  if (year) year.textContent = new Date().getFullYear();

  // Avoid broken-photo icons if a public listing changes its image URLs.
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.classList.add('image-unavailable');
      img.alt = img.alt || 'Narus Cafee photo';
    }, { once: true });
  });
})();
