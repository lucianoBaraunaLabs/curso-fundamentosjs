let frutasExistetenNoMercado = false
let tempCPUSuficiente = true

// obter valores no terminal

// process.argv - pegando o que o usuário digita no terminal. Onde você coloca o
// caminho do arquivo e logo depois o argumento que vc precisa.
// ex: node foo.js 'olá mundo'

const args = process.argv
const saldo = args[args.length -1]

if(isNaN(saldo)) {
    console.log('Valor inválido!!')
    return;
}

let tipoCliente = "premium"

if(saldo < 9) {
    tipoCliente = "basic"
}
else if (saldo >= 10 && saldo < 20) {
    tipoCliente = "gold"
}
else {
    tipoCliente = null
}

// null, undefined, vazio , 0 === false!
if(!tipoCliente) {
    tipoCliente = "indefinido"
}

console.log('tipo do cliente', tipoCliente);

const operadorOu = 1 > 2 || 2 > 1;
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1==1)

const idade = 18
const resultado = idade >= 18 ?
                        "pode dirigir" :
                        "não pode dirigir!!"

console.log('resultado', resultado);
