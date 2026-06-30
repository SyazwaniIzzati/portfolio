// ── Mobile menu toggle ──
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ── EmailJS Contact Form ──
const EMAILJS_PUBLIC_KEY  = 'Yc107OAWhaEK53EED';
const EMAILJS_SERVICE_ID  = 'service_3zeg3en';
const EMAILJS_TEMPLATE_ID = 'template_rasj04s';

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const btn    = document.getElementById('submitBtn');
    const status = document.getElementById('formStatus');

    btn.disabled = true;
    btn.textContent = 'Sending...';
    status.textContent = '';
    status.className = '';

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
        .then(() => {
            status.textContent = '✓ Message sent! I will get back to you soon.';
            status.className = 'success';
            this.reset();
        })
        .catch(() => {
            status.textContent = '✗ Something went wrong. Please try again.';
            status.className = 'error';
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Send Message';
        });
});