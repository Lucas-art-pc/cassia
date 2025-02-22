const saibaMais = document.getElementById('saibaMais');
const modal = document.getElementById('modal');

saibaMais.addEventListener('click', () => {
  modal.style.display = 'flex';
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});