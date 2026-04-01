// shared.js — nav + footer + animations + working enquiry form

// ================= NAV =================
const NAV_HTML = `
<nav id="nav">
  <div class="nav-inner">
    <a class="logo" href="index.html">
      <div class="logo-mark">iT</div>
      iTechz<span>&nbsp;Solutions</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" data-page="index">Home</a></li>
      <li><a href="services.html" data-page="services">Services</a></li>
      <li><a href="about.html" data-page="about">About</a></li>
      <li><a href="contact.html" data-page="contact">Contact</a></li>
    </ul>
    <div class="nav-right">
      <a class="btn-ghost" href="https://wa.me/918605400518" target="_blank">
        WhatsApp
      </a>
      <a class="btn-primary" href="contact.html">Get a Quote</a>
    </div>
  </div>
</nav>`;

// ================= FOOTER =================
const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-logo">iTechz<span> Solutions</span></div>
      <p class="footer-desc">Professional IT services across Mumbai.</p>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <a href="tel:+918605400518">+91 86054 00518</a>
      <a href="mailto:itechz1solutions@gmail.com">Email</a>
      <a href="https://wa.me/918605400518">WhatsApp</a>
    </div>
  </div>
  <div class="footer-bottom">
    © 2026 iTechz Solutions
  </div>
</footer>`;

// ================= INIT PAGE =================
function initPage(activePage) {

  // Inject NAV
  const navEl = document.createElement('div');
  navEl.innerHTML = NAV_HTML;
  document.body.insertBefore(navEl.firstElementChild, document.body.firstChild);

  // Inject FOOTER
  const footerWrap = document.createElement('div');
  footerWrap.innerHTML = FOOTER_HTML;
  while (footerWrap.firstChild) document.body.appendChild(footerWrap.firstChild);

  // Active menu
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === activePage) {
      a.classList.add('active');
    }
  });

  // Scroll effect
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });

  // Reveal animation
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 100);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ================= ENQUIRY FORM =================
function submitForm() {

  // Get values
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const msg = document.getElementById("msg").value.trim();

  // Validation
  if (!fname || !phone || !service || !msg) {
    alert("Please fill all required fields (*)");
    return;
  }

  // Format message
  const text = `New Enquiry:
Name: ${fname} ${lname}
Phone: ${phone}
Email: ${email}
Service: ${service}
Message: ${msg}`;

  // Encode for URL
  const encodedText = encodeURIComponent(text);

  // Open WhatsApp
  window.open(`https://wa.me/918605400518?text=${encodedText}`, "_blank");

  // Show success UI
  const formWrap = document.getElementById("form-wrap");
  const success = document.getElementById("form-success");

  if (formWrap && success) {
    formWrap.style.display = "none";
    success.style.display = "block";
  }
}
