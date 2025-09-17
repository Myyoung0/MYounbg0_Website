(function(){
  var root = document.documentElement;
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  function setPressed(button, isDark){
    if(!button) return;
    button.setAttribute('aria-pressed', String(isDark));
  }

  function announce(message){
    var live = document.getElementById('sr-announce');
    if(!live) return;
    live.textContent = '';
    setTimeout(function(){ live.textContent = message; }, 0);
  }

  window.toggleTheme = function(){
    var current = root.getAttribute('data-theme') || theme;
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    var btn = document.getElementById('theme-toggle');
    setPressed(btn, next === 'dark');
    announce('Theme set to ' + next);
  };

  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('theme-toggle');
    setPressed(btn, (root.getAttribute('data-theme') === 'dark'));
    if(btn){ btn.addEventListener('click', window.toggleTheme); }
  });
})();


