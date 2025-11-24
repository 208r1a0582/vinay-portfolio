// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => {
  if(nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// tiny fade-in on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card, .project, .hero-text, .hero-image').forEach((el,i)=>{
    el.style.opacity = 0;
    setTimeout(()=> el.style.opacity = 1, 120*i);
  });
});
