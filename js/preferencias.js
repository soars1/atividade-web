const seletorCor = document.getElementById('paleta');
const mensagemCor = document.getElementById('estado-preferencia');
const seletorFonte = document.getElementById('fonte');
const mensagemFonte = document.getElementById('estado-fonte');
const temaSalvo = localStorage.getItem('tema-techpoint');
const fonteSalva = localStorage.getItem('fonte-techpoint');
const temas = ['petroleo', 'oliva', 'ocre'];
const fontes = ['mista', 'serifada', 'sem-serifa'];
const nomesDasCores = {
  petroleo: 'azul-petróleo',
  oliva: 'verde-oliva',
  ocre: 'ocre'
};
const nomesDasFontes = {
  mista: 'Source Sans 3 no texto e Georgia nos títulos',
  serifada: 'Georgia',
  'sem-serifa': 'Source Sans 3'
};

if (temas.includes(temaSalvo)) {
  document.documentElement.dataset.tema = temaSalvo;
  seletorCor.value = temaSalvo;
}

if (fontes.includes(fonteSalva)) {
  document.documentElement.dataset.fonte = fonteSalva;
  seletorFonte.value = fonteSalva;
}

mensagemCor.textContent = `A cor escolhida foi ${nomesDasCores[seletorCor.value]}.`;
mensagemFonte.textContent = `A fonte escolhida foi ${nomesDasFontes[seletorFonte.value]}.`;

seletorCor.addEventListener('change', () => {
  document.documentElement.dataset.tema = seletorCor.value;
  localStorage.setItem('tema-techpoint', seletorCor.value);
  mensagemCor.textContent = `Mudei a cor para ${nomesDasCores[seletorCor.value]}.`;
});

seletorFonte.addEventListener('change', () => {
  document.documentElement.dataset.fonte = seletorFonte.value;
  localStorage.setItem('fonte-techpoint', seletorFonte.value);
  mensagemFonte.textContent = `Mudei a fonte para ${nomesDasFontes[seletorFonte.value]}.`;
});

document.getElementById('form-contato').addEventListener('submit', (evento) => {
  evento.preventDefault();
  document.getElementById('resposta-formulario').textContent =
    'Pronto! O formulário funcionou, mas a mensagem não foi enviada.';
});
