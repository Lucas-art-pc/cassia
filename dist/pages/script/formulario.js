const outro = document.getElementById('outro');
const outroText = document.getElementById('outro-contratante');
const nome = document.getElementById('nome');
const dataCasamento = document.getElementById('data-casamento');
const equipe = document.getElementById('equipe');
const btnEnviar = document.getElementById('btn-enviar');

outro.addEventListener('click', (evento) => {
    evento.preventDefault();
  if (outro.checked) {
    outroText.style.display = 'block';
  } 
});

btnEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const fone = '5518997541998';
    const mensagem = `Olá, meu nome é ${nome.value} e gostaria de contratar a equipe para o dia ${dataCasamento.value}, com a equipe de ${equipe.value}.`;
    const mensagemFinal = encodeURIComponent(mensagem); // Codifica a mensagem corretamente
    const WhatsApp = `https://api.whatsapp.com/send?phone=${fone}&text=${mensagemFinal}`; // Adiciona o & corretamente

    window.open(WhatsApp);
});
