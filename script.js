// Small interactive behaviors: view counter (fake increment), see more toggle, mark active nav
document.addEventListener('DOMContentLoaded', function(){
  const viewEl = document.getElementById('viewCount');
  if(viewEl){
    // fake small random increment to show "live" feel, persistent in session
    try {
      const k = sessionStorage.getItem('views') || viewEl.textContent || '1750';
      let v = parseInt(k,10) || 1750;
      v += Math.floor(Math.random()*3); // subtle
      sessionStorage.setItem('views', v);
      viewEl.textContent = v;
    } catch(e){ /* ignore storage errors */ }
  }

  const toggle = document.getElementById('toggleMore');
  const more = document.getElementById('moreText');
  if(toggle && more){
    toggle.addEventListener('click', function(){
      if(more.classList.contains('hidden')){
        more.classList.remove('hidden');
        toggle.textContent = 'see less';
      } else {
        more.classList.add('hidden');
        toggle.textContent = 'see more';
      }
    });
  }

  // highlight nav link for current path
  const links = document.querySelectorAll('.bottom-nav .nav-link');
  links.forEach(a => {
    try{
      if(a.href.endsWith(location.pathname.split('/').pop() || 'index.html')){
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    }catch(e){}
  });
});
