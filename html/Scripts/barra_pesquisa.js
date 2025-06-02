var lupa = document.getElementById('lupa');
lupa.addEventListener('click', troca);

function troca() {
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Digite sua busca';
    input.id = 'barra';

    var ligacoes = document.getElementById('ligacoes');
    ligacoes.appendChild(input);

    input.addEventListener('blur', troca2); // Usar blur para fechar ao sair do campo
    lupa.remove();
}

function troca2() {
    var input = document.getElementById('barra');
    if (input) {
        input.remove();
    }
    var ligacoes = document.getElementById('ligacoes');
    ligacoes.appendChild(lupa);
}
