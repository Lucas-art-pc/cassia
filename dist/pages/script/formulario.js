const outro = document.getElementById('outro');
const outroText = document.getElementById('outro-contratante');
outro.addEventListener('click', () => {
  if (outro.checked) {
    outroText.style.display = 'block';
  } else if (!outro.checked) {
    outroText.style.display = 'none';
  }
});