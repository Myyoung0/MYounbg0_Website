(function(){
  function smoothAnchors(){
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){
        var id = a.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if(el){
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.focus({ preventScroll: true });
        }
      });
    });
  }

  function wireCollapsibles(){
    // If JS disabled: details are natively interactive; no-op
    // With JS: ensure keyboard accessibility hints remain
    document.querySelectorAll('details').forEach(function(d){
      d.addEventListener('toggle', function(){
        // Optional hook for analytics; keep minimal
      });
    });
  }

  function keyboardShortcuts(){
    document.addEventListener('keydown', function(e){
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var key = e.key.toLowerCase();
      if (key === 'g') { var g = document.getElementById('link-github'); if(g){ g.focus(); } }
      if (key === 'b') { var b = document.getElementById('link-blog'); if(b){ b.focus(); } }
      if (key === 'e') { var m = document.getElementById('link-email'); if(m){ m.focus(); } }
      if (key === 't') { if (typeof window.toggleTheme === 'function') { window.toggleTheme(); } }
    });
  }

  function initYear(){
    var y = document.getElementById('year');
    if(y){ y.textContent = String(new Date().getFullYear()); }
  }

  function fadeLoading(){
    var line = document.querySelector('.loading-line');
    if(!line) return;
    setTimeout(function(){ line.classList.add('hide'); }, 600);
    setTimeout(function(){ if(line && line.parentNode){ line.parentNode.removeChild(line); } }, 1200);
  }

  document.addEventListener('DOMContentLoaded', function(){
    smoothAnchors();
    wireCollapsibles();
    keyboardShortcuts();
    initYear();
    fadeLoading();
  });
})();


