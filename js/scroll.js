window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem',window.scrollY > 0);
})


const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('.header__ul')
const bars = document.querySelectorAll('.bar1, .bar2, .bar3');

// Abre o navBar
const clickHamburger = () => {
    bars.forEach(bar => bar.classList.toggle('active'));
    navBar.classList.toggle('active');
}

hamburger.addEventListener('click', clickHamburger);

document.addEventListener('click', (event) => {
    // se meu click for dentro/no hamburger 
    const clockedOut = hamburger.contains(event.target);
    const clickedNav = navBar.contains(event.target);

    if(navBar.classList.contains('active') && !clickedNav && !clockedOut){
      
      clickHamburger();
    }
});