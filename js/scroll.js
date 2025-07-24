window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem',window.scrollY > 0);
})


const hamburger = document.querySelector('#hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');   

hamburger.addEventListener('click', () => {
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');
})