const herois = {
    nome: 'Hulk',
    idade: 100,
    sexo: 'Masculino'
}

// console.log('nome', herois.name);
// console.log('sexo', herois.sexo);
// console.log('idade', herois['idade']);
// console.log('idade', herois['altura']);

// herois.id = 1 // é permitido por que só estamos adicinando uma propriedade ao objeto herois e não estamos reasinando a variável.

// retorna os chaves do objeto em uma lista
// console.log(Object.keys(herois))

// retorna os valores do objeto em uma lista
// console.log(Object.values(herois))

// Juntando dois objetos
const pessoa = {
    tamanho: '10 metros'
}

const newObj =  Object.assign(herois, pessoa);

delete newObj.nome;

console.log('novo objeto criado: \n', newObj)