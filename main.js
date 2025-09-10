
// Simple interactivity: open/close modals and smooth scrolling
function openModal(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.setAttribute('aria-hidden','false');
}
function closeModal(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.setAttribute('aria-hidden','true');
}
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
// Close modal on background click
document.querySelectorAll('.modal').forEach(m=>{
  m.addEventListener('click', e=>{
    if(e.target === m) m.setAttribute('aria-hidden','true');
  });
});
// Fade-in on scroll
const faders = document.querySelectorAll('.fade-section');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
