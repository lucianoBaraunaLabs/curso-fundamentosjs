function nomeDaFuncao() {

}

function queDiaEhoje() {
    const data = new Date();
    console.log(`Hoje é dia ${data.getDate()}`);
}

function soma(valor1, valor2) {
    return `A soma de ${valor1} + ${valor2} é: `, valor1 + valor2

}

const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho);

console.log('resultado', resultado);

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado
}

console.log('O resultado da multiplicação é: ', multiplicar(10, 30));

const funcionario1 = {
    nome: 'Jose',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0,
}

const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0,
}

function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto);
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(
    `
    Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
    Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}
    `
)



