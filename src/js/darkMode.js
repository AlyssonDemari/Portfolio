function exportDarkMode(){

  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  function applyTheme(theme) {
    body.classList.remove('dark-mode'); // Limpa a classe existente
    if (theme === 'dark') {
      body.classList.add('dark-mode');
    }
    localStorage.setItem('theme', theme);
    updateButtonText(theme);
  }

  // Função para atualizar o icon do botão e logo
  function updateButtonText(theme) {
    const iconTheme = document.querySelector('.icon-theme')
    const logoImgs = document.querySelectorAll('.logo');
    
    iconTheme.src = theme === 'dark' ? 'assets/images/icon-sun.svg' : 'assets/images/icon-moon.png';
    
    logoImgs.forEach(logo => {
      logo.src = theme === 'dark' ? 'assets/images/logoWhite.png' : 'assets/images/logo.png';
    });
    
    iconTheme.alt = theme === 'dark' ? 'ícone de sol' : 'ícone de lua';
  }

  // Evento de clique no botão
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // Carregar o tema salvo ao iniciar a página
  document.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme) {
          applyTheme(savedTheme);
      } else if (systemPrefersDark) {
          applyTheme('dark');
      } else {
          applyTheme('light');
      }
  });
};

export function initDarkMode(){
  exportDarkMode()
}
