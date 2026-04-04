// shared.js — injected nav + footer on every page

const NAV_HTML = `
<nav id="nav">
  <div class="nav-inner">
    <a class="logo" href="index.html">
  <img src="Logo.png" alt="iTechz Logo">
    </a>
    <a class="logo" href="index.html">
  <img src="images/logo.png" alt="logo">
  <span>iTechz Solutions</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" data-page="index">Home</a></li>
      <li><a href="services.html" data-page="services">Services</a></li>
      <li><a href="about.html" data-page="about">About</a></li>
      <li><a href="contact.html" data-page="contact">Contact</a></li>
    </ul>
    <div class="nav-right">
      <a class="btn-ghost" href="https://wa.me/918605400518" target="_blank">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#25d366" style="display:inline;vertical-align:middle;margin-right:5px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.267a.75.75 0 0 0 .92.908l5.42-1.424A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.484-5.25-1.334l-.376-.215-3.895 1.023 1.043-3.808-.232-.387A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
        WhatsApp
      </a>
      <a class="btn-primary" href="contact.html">Get a Quote</a>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<div class="contact-bar">
  <a class="contact-bar-item" href="tel:+918605400518">
    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    +91 86054 00518
  </a>
  <a class="contact-bar-item" href="https://wa.me/918605400518" target="_blank">
    <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    WhatsApp: 86054 00518
  </a>
  <a class="contact-bar-item" href="mailto:itechz1solutions@gmail.com">
    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    itechz1solutions@gmail.com
  </a>
  <span class="contact-bar-item">
    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    Mumbai, Maharashtra
  </span>
</div>
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-logo">iTechz<span> Solutions</span></div>
      <p class="footer-desc">Professional IT services for homes, offices & businesses across Mumbai. Hardware, networking, software & CCTV.</p>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <a href="services.html#laptop">Laptop Repair</a>
      <a href="services.html#desktop">Desktop Services</a>
      <a href="services.html#printer">Printer Repair</a>
      <a href="services.html#software">Software & OS</a>
      <a href="services.html#network">Network & WiFi</a>
      <a href="services.html#cctv">CCTV Installation</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <a href="tel:+918605400518">+91 86054 00518</a>
      <a href="https://wa.me/918605400518">WhatsApp</a>
      <a href="mailto:itechz1solutions@gmail.com">itechz1solutions@gmail.com</a>
      <a href="#">Mumbai, Maharashtra</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2026 iTechz Solutions. All rights reserved.</span>
    <span class="footer-copy">Shubham Kadam · IT Engineer · Mumbai</span>
  </div>
</footer>`;

function initPage(activePage) {
  // Inject nav
  const navEl = document.createElement('div');
  navEl.innerHTML = NAV_HTML;
  document.body.insertBefore(navEl.firstElementChild, document.body.firstChild);

  // Inject footer wrapper
  const footerWrap = document.createElement('div');
  footerWrap.innerHTML = FOOTER_HTML;
  while (footerWrap.firstChild) document.body.appendChild(footerWrap.firstChild);

  // Active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === activePage) a.classList.add('active');
  });

  // Nav scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30));

  // Scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
