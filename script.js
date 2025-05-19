//navegação hamburguer

const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navBar');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('show');
});

const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('show');
    hamburger.classList.remove('active');
  })
})






