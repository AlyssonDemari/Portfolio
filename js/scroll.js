window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem',window.scrollY > 0);
})


const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('.header__ul-mobile');
const bars = document.querySelectorAll('.bar1, .bar2, .bar3');

// Função para ABRIR e FECHAR o menu ao clicar no ícone
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  // Itera sobre as barras para adicionar/remover a classe de uma vez
  bars.forEach(bar => bar.classList.toggle('active'));
});

// Listener para FECHAR o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  // Verifica se a classe 'active' está presente (ou seja, se o menu está aberto)
  const isMenuOpen = mobileNav.classList.contains('active');
  
  // Verifica se o alvo do clique NÃO está dentro do menu e NÃO é o próprio ícone do hamburguer
  const isClickOutside = !mobileNav.contains(event.target) && !hamburger.contains(event.target);

  if (isMenuOpen && isClickOutside) {
    mobileNav.classList.remove('active');
    bars.forEach(bar => bar.classList.remove('active'));
  }
});