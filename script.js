// ficha técnica toggle
  document.querySelectorAll('.ficha-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.parentElement.querySelector('.ficha-panel');
      const open = panel.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.firstChild.textContent = open ? 'Ocultar ficha técnica ' : 'Ver ficha técnica ';
    });
  });

  // category filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.cat-grid .card');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card=>{
        card.style.display = (f==='all' || card.dataset.cat===f) ? '' : 'none';
      });
    });
  });

  // close mobile menu on link click
  document.querySelectorAll('nav.links a').forEach(a=>{
    a.addEventListener('click', ()=>{ document.getElementById('menu-toggle').checked = false; });
  });
