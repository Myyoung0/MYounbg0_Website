(function(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });
  });
})();


