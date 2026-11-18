(() => {
  'use strict';
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.getElementById('site-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?'Cerrar navegación':'Abrir navegación');});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus();}});
  }
  const progress=document.getElementById('progress');
  function progressUpdate(){const total=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(total>0?Math.min(100,Math.max(0,window.scrollY/total*100)):0)+'%';}
  window.addEventListener('scroll',progressUpdate,{passive:true});window.addEventListener('resize',progressUpdate);progressUpdate();
  document.querySelectorAll('img[data-img-fallback]').forEach(img=>{img.addEventListener('error',()=>img.classList.add('img-failed'));if(img.complete&&!img.naturalWidth)img.classList.add('img-failed');});
  const lightbox=document.getElementById('lightbox');
  if(lightbox){const img=document.getElementById('lightboxImg'),caption=document.getElementById('lightboxCaption'),closeBtn=document.getElementById('lightboxClose');let previous;
    document.querySelectorAll('[data-lightbox]').forEach(button=>button.addEventListener('click',()=>{previous=document.activeElement;img.src=button.dataset.lightbox;caption.textContent=button.dataset.caption||'';lightbox.hidden=false;document.body.style.overflow='hidden';closeBtn.focus();}));
    function close(){lightbox.hidden=true;document.body.style.overflow='';img.removeAttribute('src');if(previous)previous.focus();}
    closeBtn.addEventListener('click',close);lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lightbox.hidden)close();});
  }
})();