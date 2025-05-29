function loadImagem() {
  for (let i = 0; i < 10; i++) {
    const img = document.createElement('img');
    const width = 200 + Math.floor(Math.random() * 200);
    const height = 200 + Math.floor(Math.random() * 300);
    img.src = `https://picsum.photos/${width}/${height}?random=${Date.now() + i}`;
    img.loading = "lazy";

    const container = document.createElement('div');
    container.className = 'grid-item';
    container.appendChild(img);

    document.getElementById('gradeimagem').appendChild(container);
  }
}


loadImagem();


window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    loadImagem();
  }
});
