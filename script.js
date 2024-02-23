const toggle = document.querySelector('.icon');
const nav = document.querySelector('.actve');

toggle.addEventListener('click', () => {
  nav.classList.toggle('.active');
});
