const contratante = document.getElementById('contratante');
const outroDiv = document.getElementById('outro-contratante-div');
const nomeOutro = document.getElementById('outro-contratante');
const nome = document.getElementById('nome');
const dataCasamento = document.getElementById('data-casamento');
const equipe = document.getElementById('equipe');
const btnEnviar = document.getElementById('btn-enviar');
const localidade = document.getElementById('local');

function mostrarOutro() {
    outroDiv.style.display = contratante.value === 'outro' ? 'block' : 'none';
}

contratante.addEventListener('change', mostrarOutro);

btnEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();

    // Verifica se os campos essenciais estão preenchidos
    if (!nome.value || !dataCasamento.value || !equipe.value || !contratante.value || !localidade.value) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const fone = '5518997541998';
    let contratanteTexto = contratante.value;

    // Se for "outro", adiciona o nome do contratante informado
    contratante === 'outro' ? contratanteTexto = nomeOutro.value : contratanteTexto = nomeOutro.value;

    const dataHoje = new Date();
    const dataSelecionada = new Date(dataCasamento.value);
    
    // Ajuste para considerar apenas o dia, mês e ano (removendo horas, minutos e segundos)
    dataHoje.setHours(0, 0, 0, 0);
    dataSelecionada.setHours(0, 0, 0, 0);
    
    if (dataSelecionada <= dataHoje) {
        alert("Por favor, informe uma data futura.");
        return;
    }

    const mensagem = `Olá, meu nome é ${nome.value}, sou ${contratanteTexto} e gostaria de contratar a equipe para o dia ${dataCasamento.value}, na localidade: ${localidade.value} com a equipe de ${equipe.value}.`;
    const mensagemFinal = encodeURIComponent(mensagem);
    const WhatsApp = `https://api.whatsapp.com/send?phone=${fone}&text=${mensagemFinal}`;

    window.open(WhatsApp);
});
