// Função que carrega imagens de forma suave
function loadImagemSuave(qtd = 10) {
  let carregadas = 0; // contador de imagens já carregadas

  // Função interna que carrega uma imagem de cada vez
  function carregarProxima() {
    if (carregadas >= qtd) return; // se já carregou a quantidade desejada, sai da função

    // Cria um elemento de imagem
    const img = document.createElement('img');

    // Define largura e altura aleatórias para a imagem
    const width = 200 + Math.floor(Math.random() * 200);
    const height = 200 + Math.floor(Math.random() * 300);

    // Define a URL da imagem aleatória usando picsum.photos
    img.src = `https://picsum.photos/${width}/${height}?random=${Date.now() + carregadas}`;

    // Habilita carregamento preguiçoso (lazy-loading)
    img.loading = "lazy";

    // Quando a imagem terminar de carregar, adiciona a classe 'loaded' para ativar o fade-in
    img.onload = () => {
      img.classList.add('loaded');
    };

    // Cria um contêiner (div) para a imagem
    const container = document.createElement('div');
    container.className = 'grid-item'; // adiciona a classe 'grid-item' para estilização

    // Adiciona a imagem ao contêiner
    container.appendChild(img);

    // Adiciona o contêiner ao elemento de grade de imagens na página
    document.getElementById('gradeimagem').appendChild(container);

    carregadas++; // incrementa o contador de imagens carregadas

    // Aguarda 100ms antes de carregar a próxima imagem, criando o efeito de suavidade
    setTimeout(carregarProxima, 100);
  }

  carregarProxima(); // inicia o carregamento das imagens
}

// Chama a função para carregar imagens logo que a página carrega
loadImagemSuave();

// Flag para evitar múltiplos carregamentos simultâneos
let carregando = false;

// Adiciona um ouvinte de evento para o scroll da página
window.addEventListener('scroll', () => {
  // Verifica se o usuário está a 500px do final da página e se não está carregando
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !carregando) {
    carregando = true; // define a flag como true para evitar múltiplas chamadas

    // Chama a função para carregar mais imagens
    loadImagemSuave();

    // Aguarda 1 segundo antes de permitir o próximo carregamento
    setTimeout(() => carregando = false, 1000);
  }
});