const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('in-view');
  });
},{threshold:0.2});

document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

// Subtle parallax on hero orb
const orb = document.querySelector('.hero-orb');
if(orb){
  window.addEventListener('mousemove', (e)=>{
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    orb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}
