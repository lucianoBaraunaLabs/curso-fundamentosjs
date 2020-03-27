
let variavelSemInicializacao

console.log(
    variavelSemInicializacao,
    typeof(variavelSemInicializacao)
);

variavelSemInicializacao = "Olá mundo"

console.log(
    variavelSemInicializacao,
    typeof(variavelSemInicializacao)
);

/**
 * Quando criamos uma variável vazia para ser preenchida em algum momento depois é uma boa prática que
 * essa variável seja setada com o valor null e não undefined.
 *
*/

variavelSemInicializacao = null;

console.log(
    variavelSemInicializacao,
    typeof(variavelSemInicializacao)
);
