
// // Enquanto mudar, não para!

// let termoDeParada = true;
// let contador = 0;

// while(termoDeParada) {
//     termoDeParada = contador < 10
//     if(contador % 2 === 0) {
//         console.log('Numero par ', contador)
//     }
//     contador += 1
// }

// // roda a primeira vez e testa a variavel depois!
// do {
//     console.log('Só uma vez! pois termoDeParada é', termoDeParada);

// } while (termoDeParada);

const listaDeTarefas = [

    { tarefa: 'lavar o chão', id: 1},

    { tarefa: 'lavar a louça', id: 2},

    { tarefa: 'arrumar o quarto', id: 3},

    ]


let indice = 0
// while(indice < listaDeTarefas.length) {

// console.log(listaDeTarefas[indice].tarefa)

// indice++

// }


do {

console.log(listaDeTarefas[indice].tarefa)

indice++

} while(indice < listaDeTarefas.length)