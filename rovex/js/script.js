// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('active');
  });
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// Плавное появление карточек
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .faq__item').forEach((el, i) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity .5s ease ${i * 0.06}s, transform .5s ease ${i * 0.06}s`;
  observer.observe(el);
});