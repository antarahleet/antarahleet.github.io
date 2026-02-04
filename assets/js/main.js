const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('in-view');
  });
},{threshold:0.2});

document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

// Orb rotation is handled purely in CSS for visibility/consistency.
