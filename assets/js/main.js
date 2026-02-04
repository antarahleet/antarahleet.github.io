const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('in-view');
  });
},{threshold:0.2});

document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

// Subtle parallax + scroll rotation on hero orb
const orb = document.querySelector('.hero-orb');
if(orb){
  let mx = 0, my = 0, rot = 0;
  const render = () => {
    orb.style.transform = `translate3d(${mx}px, ${my}px, 0) rotate(${rot}deg)`;
  };
  window.addEventListener('mousemove', (e)=>{
    mx = (e.clientX / window.innerWidth - 0.5) * 8;
    my = (e.clientY / window.innerHeight - 0.5) * 8;
    render();
  });
  window.addEventListener('scroll', ()=>{
    rot = (window.scrollY * 0.05) % 360;
    render();
  }, {passive:true});
  render();
}
