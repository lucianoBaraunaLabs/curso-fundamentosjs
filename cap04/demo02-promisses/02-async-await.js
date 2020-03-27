const fs = require('fs');
const readLine = require('readline');
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        // Nesse caso quando utilizamos o reject e aplicamos um erro nós não precisamos utilizar
        // a palavra throw
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O campo não pode ser vazio'))
        })
    })
}

async function main() {
    try {
        const nome = await questionAsync('Qual é o seu nome?')
        const telefone = await questionAsync('Qual é o seu telefone?')
        console.log(`Nome:${nome}, Telefone: ${telefone}`);

    } catch (error) {
        console.log('Deu ruim***', error.stack)
    }
    finally {
        terminal.close()
    }
}

main();
