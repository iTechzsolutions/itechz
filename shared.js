const INSTAGRAM_URL = 'https://www.instagram.com/itechzsolutions?utm_source=qr&igsi=a2FkdjJrZ3RvdWZy';
const FACEBOOK_URL = 'https://www.facebook.com/share/18tpbbhqYf/';
const WHATSAPP_URL = 'https://wa.me/918698529411';

const ICONS = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3A2 2 0 0 1 8.6 3a12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  whatsapp: '<svg class="brand-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2A9.84 9.84 0 0 0 3.6 16.9L2 22l5.24-1.53A9.98 9.98 0 1 0 12.04 2Zm5.78 14.1c-.25.7-1.47 1.34-2.02 1.43-.52.1-1.18.13-1.9-.1-.44-.14-1-.33-1.73-.64-3.04-1.31-5.02-4.37-5.17-4.57-.15-.2-1.24-1.64-1.24-3.13 0-1.5.78-2.23 1.06-2.53.28-.3.61-.37.81-.37h.59c.19 0 .44-.07.68.52.25.6.84 2.06.91 2.2.08.15.13.33.03.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.5-.15.15-.3.3-.13.6.18.3.78 1.28 1.68 2.08 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.4-.25.68-.15.28.1 1.77.84 2.07.99.3.15.5.22.58.35.07.13.07.73-.18 1.43Z"/></svg>',
  instagram: '<svg class="brand-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
  facebook: '<svg class="brand-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-9h3l.45-3.5H13.7V7.27c0-1.01.28-1.7 1.73-1.7h1.85V2.44c-.32-.04-1.42-.14-2.7-.14-2.67 0-4.5 1.63-4.5 4.62V9.5H7.05V13h3.03v9h3.62Z"/></svg>'
};

const NAV_HTML = `
  <header id="site-header" class="site-header">
    <div class="nav-shell">
      <a href="index.html" class="brand-lockup" aria-label="iTechz Solutions home">
        <span class="brand-logo-frame"><img src="assets/itechz-logo-web.png" onerror="this.src='assets/itechz-logo-source.jpg'" alt="iTechz Solutions logo" width="58" height="58"></span>
        <span class="brand-copy"><strong>iTechz Solutions</strong><small>Technology for business</small></span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a class="nav-link" data-page="home" href="index.html">Home</a>
        <a class="nav-link" data-page="services" href="services.html">Services</a>
        <a class="nav-link" data-page="about" href="about.html">About</a>
        <a class="nav-link" data-page="contact" href="contact.html">Contact</a>
      </nav>

      <div class="nav-actions">
        <a class="button button-ghost" href="tel:+918698529411">${ICONS.phone}<span>Call us</span></a>
        <a class="button button-electric" data-social="whatsapp" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer"><span>Let’s talk</span>${ICONS.arrow}</a>
      </div>

      <button id="menu-button" class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div id="mobile-menu" class="mobile-menu" hidden>
      <nav aria-label="Mobile navigation">
        <a class="mobile-nav-link" data-page="home" href="index.html">Home</a>
        <a class="mobile-nav-link" data-page="services" href="services.html">Services</a>
        <a class="mobile-nav-link" data-page="about" href="about.html">About</a>
        <a class="mobile-nav-link" data-page="contact" href="contact.html">Contact</a>
      </nav>
      <div class="mobile-actions">
        <a class="button button-ghost" href="tel:+918698529411">${ICONS.phone}<span>Call</span></a>
        <a class="button button-electric" data-social="whatsapp" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span></a>
      </div>
    </div>
  </header>`;

const FOOTER_HTML = `
  <section class="connect-ribbon" aria-label="Quick contact">
    <div class="connect-shell">
      <div class="connect-intro"><span class="kicker kicker-on-dark">Need a technology partner?</span><h2>Make the next move with iTechz.</h2></div>
      <div class="connect-actions">
        <a class="connect-link" href="tel:+918698529411"><span class="mini-icon">${ICONS.phone}</span><span><small>Call us</small><strong>+91 86985 29411</strong></span></a>
        <a class="connect-link" href="mailto:info@itechz.in"><span class="mini-icon">${ICONS.mail}</span><span><small>Email</small><strong>info@itechz.in</strong></span></a>
        <a class="connect-link" data-social="whatsapp" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer"><span class="mini-icon whatsapp-icon">${ICONS.whatsapp}</span><span><small>WhatsApp</small><strong>Start a chat</strong></span></a>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="footer-shell">
      <div class="footer-brand">
        <a href="index.html" class="brand-lockup footer-lockup" aria-label="iTechz Solutions home">
          <span class="brand-logo-frame brand-logo-frame-large"><img src="assets/itechz-logo-web.png" onerror="this.src='assets/itechz-logo-source.jpg'" alt="iTechz Solutions logo" width="68" height="68"></span>
          <span class="brand-copy"><strong>iTechz Solutions</strong><small>Technology for business</small></span>
        </a>
        <p>Secure infrastructure, modern websites and dependable technical support for businesses that want technology to work harder.</p>
        <div class="social-stack">
          <a class="social-brand instagram" data-social="instagram" href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" aria-label="Follow iTechz Solutions on Instagram">${ICONS.instagram}<span>Instagram</span></a>
          <a class="social-brand facebook" data-social="facebook" href="${FACEBOOK_URL}" target="_blank" rel="noopener noreferrer" aria-label="Follow iTechz Solutions on Facebook">${ICONS.facebook}<span>Facebook</span></a>
          <a class="social-brand whatsapp" data-social="whatsapp" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Chat with iTechz Solutions on WhatsApp">${ICONS.whatsapp}<span>WhatsApp</span></a>
        </div>
      </div>

      <div class="footer-column"><h2>Explore</h2><a href="index.html">Home</a><a href="services.html">Services</a><a href="about.html">About</a><a href="contact.html">Contact</a></div>
      <div class="footer-column"><h2>Services</h2><a href="services.html#infrastructure">IT Infrastructure</a><a href="services.html#websites">Website Solutions</a><a href="services.html#support">AMC &amp; Technical Support</a></div>
      <div class="footer-column"><h2>Contact</h2><a href="tel:+918698529411">+91 86985 29411</a><a href="mailto:info@itechz.in">info@itechz.in</a><a href="mailto:admin@itechz.in">admin@itechz.in</a><span>Mumbai, Maharashtra</span></div>
    </div>
    <div class="footer-bottom"><div><span>© <span id="current-year"></span> iTechz Solutions. All rights reserved.</span><span>Designed for clarity. Built for performance.</span></div></div>
  </footer>

  <a class="floating-whatsapp" data-social="whatsapp" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Chat with iTechz Solutions on WhatsApp">${ICONS.whatsapp}<span>WhatsApp</span></a>`;

function initSite(activePage) {
  const navWrap = document.createElement('div');
  navWrap.innerHTML = NAV_HTML;
  document.body.insertBefore(navWrap.firstElementChild, document.body.firstChild);

  const footerWrap = document.createElement('div');
  footerWrap.innerHTML = FOOTER_HTML;
  while (footerWrap.firstChild) document.body.appendChild(footerWrap.firstChild);

  document.querySelectorAll(`[data-page="${activePage}"]`).forEach((link) => {
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');
  });

  const header = document.getElementById('site-header');
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    const nextOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(nextOpen));
    menuButton.setAttribute('aria-label', nextOpen ? 'Close navigation menu' : 'Open navigation menu');
    menuButton.classList.toggle('is-open', nextOpen);
    mobileMenu.hidden = !nextOpen;
    document.body.classList.toggle('menu-open', nextOpen);
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }, { passive: true });

  const revealItems = document.querySelectorAll('.reveal');
  document.querySelectorAll('.service-grid, .process-grid, .value-grid, .detail-grid, .stack-list, .connect-actions').forEach((group) => {
    group.querySelectorAll(':scope > .reveal, :scope > * > .reveal').forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index * 70, 210)}ms`);
    });
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    revealItems.forEach((item) => observer.observe(item));
    window.setTimeout(() => revealItems.forEach((item) => item.classList.add('is-visible')), 1800);
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-social]').forEach((link) => {
    link.addEventListener('click', () => {
      const platform = link.dataset.social;
      if (typeof window.gtag === 'function') window.gtag('event', 'social_click', { platform });
      if (typeof window.fbq === 'function') window.fbq('trackCustom', 'SocialClick', { platform });
    });
  });
}
