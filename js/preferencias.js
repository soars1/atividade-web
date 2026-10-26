const seletorCor = document.getElementById('paleta');
const mensagemCor = document.getElementById('estado-preferencia');
const temaSalvo = localStorage.getItem('tema-techpoint');
const temas = ['petroleo', 'oliva', 'ocre'];
const nomesDasCores = {
  petroleo: 'azul-petróleo',
  oliva: 'verde-oliva',
  ocre: 'ocre'
};

if (temas.includes(temaSalvo)) {
  document.documentElement.dataset.tema = temaSalvo;
  seletorCor.value = temaSalvo;
}

mensagemCor.textContent = `A cor escolhida foi ${nomesDasCores[seletorCor.value]}.`;

seletorCor.addEventListener('change', () => {
  document.documentElement.dataset.tema = seletorCor.value;
  localStorage.setItem('tema-techpoint', seletorCor.value);
  mensagemCor.textContent = `Mudei a cor para ${nomesDasCores[seletorCor.value]}.`;
});

document.getElementById('form-contato').addEventListener('submit', (evento) => {
  evento.preventDefault();
  document.getElementById('resposta-formulario').textContent =
    'Pronto! O formulário funcionou, mas a mensagem não foi enviada.';
});
