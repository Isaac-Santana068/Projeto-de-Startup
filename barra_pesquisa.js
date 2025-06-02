var lupa = document.getElementById('lupa')
lupa.addEventListener('click', troca)
function troca(){
    var input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Digite sua busca'
    input.id = 'barra'
    var ligações = document.getElementById('ligacoes')
    ligações.appendChild(input)
    lupa.remove()
}
var input2 = document.getElementById('barra');
input2.addEventListener('click', troca2);

function troca2() {
  var ligacoes = document.getElementById('ligacoes');
  ligacoes.appendChild(lupa);
  input2.remove();
}
