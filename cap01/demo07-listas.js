const minhaLista = [];
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

// console.log(minhaListaDeTarefas[0]);
// console.log(minhaListaDeTarefas[1]);
// console.log(minhaListaDeTarefas[4]);


// ver quantidade de itens
// console.log(minhaListaDeTarefas.length);

// adicionando item no final da lista
// console.log(minhaListaDeTarefas.push('formatar o computador'));
// console.log(minhaListaDeTarefas);

// remover último da lista
// const ultimo = minhaListaDeTarefas.pop();
// console.log(ultimo, minhaListaDeTarefas);

// remover primeiro da lista
// const primeiro = minhaListaDeTarefas.shift();
// console.log(primeiro, minhaListaDeTarefas);

// remover um item em específico a partir de um indice
// console.log(minhaListaDeTarefas[2])
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas)

const itens = [1, 'computador', 0.2];

// verificar tipo do array
// console.log(typeof(itens));

// verificar da forma correta o tipo do array
// console.log(Array.isArray(itens));

// ordenar
const numeros = [5, 9, 20, 1];
console.log(numeros.sort());

// juntar dois arrays
const novo = itens.concat([1, 2, 3])
console.log(novo);

// juntar dois arrays em uma string
console.log(itens.join(','));

// verefica indice do item
const index = itens.indexOf('computador');
console.log(itens[index]);







