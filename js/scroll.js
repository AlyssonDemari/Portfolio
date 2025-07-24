window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem',window.scrollY > 0);
})


const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('.header__ul-mobile');
const bars = document.querySelectorAll('.bar1, .bar2, .bar3');

// Abre o navBar
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  bars.forEach(bar => bar.classList.toggle('active'));
});

// fecha o navBar ao clicar fora dele
document.addEventListener('click', (event) => {
  // verifica se o navBar esta ativo
  const isMenuOpen = mobileNav.classList.contains('active');
  
  // verifica se o click não foi no navBar
  const isClickOutside = !mobileNav.contains(event.target) && !hamburger.contains(event.target);

  if (isMenuOpen && isClickOutside) {
    mobileNav.classList.remove('active');
    bars.forEach(bar => bar.classList.remove('active'));
  }
});