const fs = require('fs');
const readLine = require('readline');
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Modelo callback
// terminal.question('Qual o seu nome ? \n', nome => {
//     terminal.question('Qual o seu telefone ? \n', telefone => {
//         console.log(
//             `
//                 Nome: ${nome},
//                 telefone: ${telefone}
//             `
//         )
//         terminal.close()
//     })

// })

// Modelo em promise
function questionAsync(texto) {
    // Como não tem erro nós conseguimos passar direto o resolve.
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ''
let telefone = ''
// Promise resolve - Retornar uma Promise, apenas para facilitar o encadeamento de pipelines (.then.then.then) onde não se depende da primeira chamada
Promise.resolve()
        .then(() => questionAsync('Qual é o seu nome ?'))
        .then((respostaNome) => {
            if(!respostaNome) throw new Error('campo vazio!!!')
            nome = respostaNome
        })
        .then(() => questionAsync('Qual é o seu telefone ?'))
        .then((respostaTelefone) => {
            if(!respostaTelefone) throw new Error('campo vazio!!!')
            nome = respostaTelefone
        })
        .then(() => {
            console.log(`Nome: ${nome}, Telefone: ${telefone}`);

        })
        .catch((error) => {
            console.log('Deu ruim**', error)
        })
        .finally(() => terminal.close())


