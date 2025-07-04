let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}